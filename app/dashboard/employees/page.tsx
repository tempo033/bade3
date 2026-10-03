import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

export default async function EmployeesPage() {
  const supabase = await createClient()
  const { data: employees, error } = await supabase
    .from('employees')
    .select('id, employee_no, full_name, job_title, nationality, employment_status, departments(name), companies(name)')
    .order('employee_no')

  return (
    <main className="dashboard-page">
      <aside className="side">
        <Link href="/" className="brand"><span className="brand-mark">B</span><span>Bade3</span></Link>
        <div className="side-label">الرئيسية</div>
        <Link className="side-link" href="/dashboard">لوحة التحكم</Link>
        <Link className="side-link active" href="/dashboard/employees">الموظفون</Link>
        <Link className="side-link" href="/dashboard/attendance">الحضور والانصراف</Link>
        <Link className="side-link" href="/dashboard/leaves">الإجازات والأذونات</Link>
        <Link className="side-link" href="/dashboard/payroll">الرواتب</Link>
        <div className="side-label">الإدارة</div>
        <Link className="side-link" href="/dashboard/reports">التقارير</Link>
        <Link className="side-link" href="/dashboard/settings">الإعدادات</Link>
      </aside>

      <section className="dash-content">
        <header className="page-title-row">
          <div><span className="eyebrow">إدارة الموارد البشرية</span><h1>الموظفون</h1><p>بيانات الموظفين المعروضة الآن من قاعدة بيانات Bade3.</p></div>
          <button className="primary">+ إضافة موظف</button>
        </header>

        <div className="toolbar">
          <input placeholder="بحث باسم الموظف أو الرقم..." />
          <select defaultValue="all"><option value="all">كل الأقسام</option></select>
          <select defaultValue="status"><option value="status">كل الحالات</option><option>على رأس العمل</option><option>إجازة</option></select>
        </div>

        <div className="table-panel">
          <div className="table-head"><b>قائمة الموظفين</b><span>{employees?.length ?? 0} موظفين</span></div>
          {error ? (
            <div className="empty-state">تعذر تحميل بيانات الموظفين. تحقق من صلاحيات قاعدة البيانات وتسجيل الدخول.</div>
          ) : (
            <div className="employee-table-wrap">
              <table>
                <thead><tr><th>الرقم</th><th>اسم الموظف</th><th>المسمى الوظيفي</th><th>القسم</th><th>الشركة</th><th>الجنسية</th><th>الحالة</th><th>الإجراء</th></tr></thead>
                <tbody>
                  {(employees ?? []).map((employee) => {
                    const department = Array.isArray(employee.departments) ? employee.departments[0]?.name : employee.departments?.name
                    const company = Array.isArray(employee.companies) ? employee.companies[0]?.name : employee.companies?.name
                    return (
                      <tr key={employee.id}>
                        <td>{employee.employee_no}</td>
                        <td><b>{employee.full_name}</b></td>
                        <td>{employee.job_title || '—'}</td>
                        <td>{department || '—'}</td>
                        <td>{company || '—'}</td>
                        <td>{employee.nationality || '—'}</td>
                        <td><span className={employee.employment_status === 'إجازة' ? 'status status-leave' : 'status'}>{employee.employment_status}</span></td>
                        <td><Link className="table-action" href={`/dashboard/employees/${employee.id}`}>عرض</Link></td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

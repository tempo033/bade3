import Link from 'next/link'

const employees = [
  ['1001','أحمد محمد العتيبي','مدير مشاريع','الإدارة الهندسية','سعودي','على رأس العمل'],
  ['1002','محمد عبدالله سالم','مهندس موقع','إدارة التشغيل','سعودي','على رأس العمل'],
  ['1003','خالد حسن علي','محاسب','المالية والمحاسبة','مصري','على رأس العمل'],
  ['1004','سارة أحمد محمد','أخصائي موارد بشرية','الموارد البشرية','سعودي','إجازة'],
  ['1005','يوسف محمود حسن','مراقب جودة','الجودة','مصري','على رأس العمل'],
  ['1006','عبدالله صالح','مسؤول مشتريات','المشتريات وسلسلة الإمداد','سعودي','على رأس العمل'],
]

export default function EmployeesPage() {
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
        <Link className="side-link" href="/">التقارير</Link>
        <Link className="side-link" href="/">الإعدادات</Link>
      </aside>
      <section className="dash-content">
        <header className="page-title-row">
          <div><span className="eyebrow">إدارة الموارد البشرية</span><h1>الموظفون</h1><p>إدارة بيانات الموظفين والملفات والحالات الوظيفية.</p></div>
          <button className="primary">+ إضافة موظف</button>
        </header>
        <div className="toolbar">
          <input placeholder="بحث باسم الموظف أو الرقم..." />
          <select defaultValue="all"><option value="all">كل الأقسام</option><option>الموارد البشرية</option><option>الإدارة الهندسية</option><option>إدارة التشغيل</option><option>المالية والمحاسبة</option></select>
          <select defaultValue="status"><option value="status">كل الحالات</option><option>على رأس العمل</option><option>إجازة</option></select>
        </div>
        <div className="table-panel">
          <div className="table-head"><b>قائمة الموظفين</b><span>{employees.length} موظفين</span></div>
          <div className="employee-table-wrap"><table><thead><tr><th>الرقم</th><th>اسم الموظف</th><th>المسمى الوظيفي</th><th>القسم</th><th>الجنسية</th><th>الحالة</th><th>الإجراء</th></tr></thead>
          <tbody>{employees.map(e=><tr key={e[0]}><td>{e[0]}</td><td><b>{e[1]}</b></td><td>{e[2]}</td><td>{e[3]}</td><td>{e[4]}</td><td><span className={e[5]==='إجازة'?'status status-leave':'status'}>{e[5]}</span></td><td><button className="table-action">عرض</button></td></tr>)}</tbody></table></div>
        </div>
      </section>
    </main>
  )
}

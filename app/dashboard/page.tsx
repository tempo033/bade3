import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

export default async function DashboardPage() {
  const supabase = await createClient()
  const today = new Date().toISOString().slice(0, 10)

  const [{ count: employeeCount }, { count: presentCount }, { count: leaveCount }, { data: activities }] = await Promise.all([
    supabase.from('employees').select('*', { count: 'exact', head: true }),
    supabase.from('attendance').select('*', { count: 'exact', head: true }).eq('attendance_date', today).in('status', ['حاضر', 'متأخر']),
    supabase.from('leave_requests').select('*', { count: 'exact', head: true }).eq('status', 'معلق'),
    supabase.from('leave_requests').select('id, requested_at, status, employees(full_name)').order('requested_at', { ascending: false }).limit(4),
  ])

  const cards = [
    ['إجمالي الموظفين', String(employeeCount ?? 0), 'من قاعدة البيانات', '/dashboard/employees'],
    ['حاضر اليوم', String(presentCount ?? 0), 'حضور مسجل اليوم', '/dashboard/attendance'],
    ['طلبات الإجازات', String(leaveCount ?? 0), 'طلبات معلقة', '/dashboard/leaves'],
    ['مسير الرواتب', '—', 'سيتم ربطه بالمسيرات', '/dashboard/payroll'],
  ]

  return (
    <main className="dashboard-page">
      <aside className="side">
        <Link href="/" className="brand"><span className="brand-mark">B</span><span>Bade3</span></Link>
        <div className="side-label">الرئيسية</div>
        <Link className="side-link active" href="/dashboard">لوحة التحكم</Link>
        <Link className="side-link" href="/dashboard/employees">الموظفون</Link>
        <Link className="side-link" href="/dashboard/attendance">الحضور والانصراف</Link>
        <Link className="side-link" href="/dashboard/leaves">الإجازات والأذونات</Link>
        <Link className="side-link" href="/dashboard/payroll">الرواتب</Link>
        <div className="side-label">الإدارة</div>
        <Link className="side-link" href="/dashboard/reports">التقارير</Link>
        <Link className="side-link" href="/dashboard/settings">الإعدادات</Link>
        <div className="side-bottom"><Link href="/">العودة للموقع</Link></div>
      </aside>

      <section className="dash-content">
        <header className="dash-header">
          <div><span className="eyebrow">لوحة الإدارة</span><h1>مرحبًا بك في Bade3</h1><p>مؤشرات الموارد البشرية من قاعدة البيانات الفعلية.</p></div>
          <Link className="primary" href="/dashboard/employees">+ إضافة موظف</Link>
        </header>

        <div className="dash-cards">{cards.map(([title,value,meta,link])=><Link href={link} className="dash-card" key={title}><span>{title}</span><strong>{value}</strong><small>{meta}</small></Link>)}</div>

        <div className="dash-grid">
          <article className="panel">
            <div className="panel-head"><h2>الحضور خلال الأسبوع</h2><span>بيانات قاعدة البيانات</span></div>
            <div className="big-chart">{[0,0,0,0,0,0,0].map((h,i)=><div key={i}><span style={{height:(h || 8)+'%'}}></span><small>{['الأحد','الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'][i]}</small></div>)}</div>
          </article>
          <article className="panel">
            <div className="panel-head"><h2>آخر العمليات</h2><Link href="/dashboard/leaves">عرض الكل</Link></div>
            <div className="activity-list">
              {(activities ?? []).length === 0 ? <div className="empty-state">لا توجد عمليات مسجلة حتى الآن.</div> : activities?.map((item) => {
                const employee = Array.isArray(item.employees) ? item.employees[0]?.full_name : item.employees?.full_name
                return <div className="activity" key={item.id}><i>{employee?.[0] ?? 'B'}</i><div><b>{employee ?? 'موظف'}</b><p>طلب إجازة — {item.status}</p></div><time>{new Date(item.requested_at).toLocaleDateString('ar-SA')}</time></div>
              })}
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}

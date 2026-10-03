import Link from 'next/link'

const cards = [
  ['إجمالي الموظفين','1,248','↑ 8.2%','الموظفون'],
  ['حاضر اليوم','1,106','88.6%','الحضور والانصراف'],
  ['طلبات الإجازات','37','12 جديدة','الإجازات والأذونات'],
  ['مسير الرواتب','SAR 2.84M','هذا الشهر','الرواتب'],
]

const activities = [
  ['أحمد محمد','تم تسجيل حضور الموظف','08:01 ص'],
  ['محمد علي','تم اعتماد طلب إجازة','09:14 ص'],
  ['سارة خالد','تم تحديث بيانات الموظف','10:32 ص'],
  ['خالد حسن','تم إنشاء مسير الرواتب','11:05 ص'],
]

export default function DashboardPage() {
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
        <Link className="side-link" href="/">التقارير</Link>
        <Link className="side-link" href="/">الإعدادات</Link>
        <div className="side-bottom"><Link href="/">العودة للموقع</Link></div>
      </aside>

      <section className="dash-content">
        <header className="dash-header">
          <div><span className="eyebrow">لوحة الإدارة</span><h1>مرحبًا بك في Bade3</h1><p>نظرة سريعة على أهم مؤشرات الموارد البشرية اليوم.</p></div>
          <Link className="primary" href="/dashboard/employees">+ إضافة موظف</Link>
        </header>

        <div className="dash-cards">{cards.map(([title,value,meta,link])=><Link href={link === 'الموظفون' ? '/dashboard/employees' : '#'} className="dash-card" key={title}><span>{title}</span><strong>{value}</strong><small>{meta}</small></Link>)}</div>

        <div className="dash-grid">
          <article className="panel">
            <div className="panel-head"><h2>الحضور خلال الأسبوع</h2><span>آخر 7 أيام</span></div>
            <div className="big-chart">{[62,74,69,88,82,91,86].map((h,i)=><div key={i}><span style={{height:h+'%'}}></span><small>{['الأحد','الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'][i]}</small></div>)}</div>
          </article>
          <article className="panel">
            <div className="panel-head"><h2>آخر العمليات</h2><span>عرض الكل</span></div>
            <div className="activity-list">{activities.map(([name,event,time])=><div className="activity" key={name}><i>{name[0]}</i><div><b>{name}</b><p>{event}</p></div><time>{time}</time></div>)}</div>
          </article>
        </div>
      </section>
    </main>
  )
}

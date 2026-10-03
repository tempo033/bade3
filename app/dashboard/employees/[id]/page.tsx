import Link from 'next/link'

export default async function EmployeeProfile({params}:{params:Promise<{id:string}>}) {
  const {id}=await params
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
      </aside>
      <section className="dash-content">
        <div className="page-title-row">
          <div><span className="eyebrow">ملف الموظف #{id}</span><h1>بيانات الموظف</h1></div>
          <Link className="secondary" href="/dashboard/employees">← العودة للموظفين</Link>
        </div>
        <div className="employee-profile">
          <div className="profile-head"><div className="avatar">أ</div><div><h2>أحمد محمد العتيبي</h2><p>مدير مشاريع · الإدارة الهندسية · <span className="status">على رأس العمل</span></p></div></div>
          <div className="tabs"><a className="active" href="#">البيانات الأساسية</a><a href="#">البيانات الوظيفية</a><a href="#">البيانات المالية</a><a href="#">المستندات</a></div>
          <div className="profile-section"><h3>البيانات الأساسية</h3><div className="profile-grid">
            <div className="profile-item"><span>الرقم الوظيفي</span><b>1001</b></div>
            <div className="profile-item"><span>الجنسية</span><b>سعودي</b></div>
            <div className="profile-item"><span>رقم الهوية</span><b>10XXXXXXXX</b></div>
            <div className="profile-item"><span>رقم الجوال</span><b>05XXXXXXXX</b></div>
            <div className="profile-item"><span>البريد الإلكتروني</span><b>employee@bade3.com</b></div>
            <div className="profile-item"><span>تاريخ الميلاد</span><b>01 / 01 / 1990</b></div>
          </div></div>
          <div className="profile-section"><h3>البيانات الوظيفية</h3><div className="profile-grid">
            <div className="profile-item"><span>المسمى الوظيفي</span><b>مدير مشاريع</b></div>
            <div className="profile-item"><span>الإدارة</span><b>الإدارة الهندسية</b></div>
            <div className="profile-item"><span>تاريخ التعيين</span><b>01 / 01 / 2024</b></div>
            <div className="profile-item"><span>نوع العقد</span><b>دوام كامل</b></div>
            <div className="profile-item"><span>الشركة</span><b>شركة Bade3</b></div>
            <div className="profile-item"><span>الحالة الوظيفية</span><b>على رأس العمل</b></div>
          </div></div>
        </div>
      </section>
    </main>
  )
}

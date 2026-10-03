import Link from 'next/link'

const features = [
  ['الحضور والانصراف', 'متابعة الحضور والانصراف وساعات العمل من لوحة واحدة.'],
  ['إدارة الموظفين', 'ملف متكامل للموظف وبياناته الوظيفية والمستندات.'],
  ['الإجازات والأذونات', 'طلبات إلكترونية ومسارات اعتماد واضحة وسريعة.'],
  ['الرواتب', 'إدارة المسيرات والاستقطاعات والبدلات والتقارير المالية.'],
  ['التقارير', 'تقارير إدارية قابلة للطباعة والتصدير لاتخاذ القرار.'],
  ['الصلاحيات', 'صلاحيات مرنة حسب الشركة والإدارة والدور الوظيفي.'],
]

export default function Home() {
  return (
    <div className="bade3">
      <header className="topbar">
        <div className="container nav">
          <Link href="/" className="brand"><span className="brand-mark">B</span><span>Bade3</span></Link>
          <nav>
            <a href="#features">المميزات</a>
            <a href="#how">كيف يعمل</a>
            <a href="#pricing">الباقات</a>
            <a href="#contact">تواصل معنا</a>
          </nav>
          <Link href="#contact" className="nav-cta">ابدأ الآن</Link>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">منصة موارد بشرية متكاملة</span>
              <h1>إدارة أسهل لمواردك البشرية مع <strong>Bade3</strong></h1>
              <p>حل حديث لإدارة الموظفين والحضور والانصراف والإجازات والرواتب والتقارير، مصمم ليمنح فريق الموارد البشرية رؤية كاملة وتحكمًا أسرع.</p>
              <div className="hero-actions">
                <a className="primary" href="#contact">ابدأ تجربتك</a>
                <a className="secondary" href="#features">اكتشف المميزات</a>
              </div>
              <div className="trust"><span>✓ سهل الاستخدام</span><span>✓ عربي بالكامل</span><span>✓ جاهز للتوسع</span></div>
            </div>
            <div className="hero-card">
              <div className="dashboard-head"><span>لوحة التحكم</span><i></i></div>
              <div className="stats"><div><small>الموظفون</small><b>1,248</b></div><div><small>حاضر اليوم</small><b>1,106</b></div><div><small>طلبات معلقة</small><b>37</b></div></div>
              <div className="chart"><span style={{height:'35%'}}></span><span style={{height:'54%'}}></span><span style={{height:'44%'}}></span><span style={{height:'70%'}}></span><span style={{height:'61%'}}></span><span style={{height:'88%'}}></span><span style={{height:'78%'}}></span></div>
              <div className="rows"><div><b>حضور اليوم</b><span>94%</span></div><div><b>طلبات الإجازة</b><span>12</span></div><div><b>ملفات مكتملة</b><span>98%</span></div></div>
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="container"><div className="section-title"><span className="eyebrow">كل ما تحتاجه</span><h2>منصة واحدة لإدارة فريقك</h2><p>اجمع عمليات الموارد البشرية اليومية في نظام واضح وسريع وقابل للتوسع.</p></div>
          <div className="feature-grid">{features.map(([title,text],i)=><article className="feature" key={title}><span className="feature-icon">{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div>
        </section>

        <section id="how" className="dark-section">
          <div className="container split"><div><span className="eyebrow light">كيف يعمل Bade3</span><h2>من البيانات اليومية إلى قرار إداري واضح</h2><p>صممنا التجربة لتكون مباشرة: أدخل البيانات، اعتمد الطلبات، راقب المؤشرات، ثم استخرج التقرير الذي تحتاجه.</p></div>
          <div className="steps"><div><b>01</b><span>إضافة الموظفين والبيانات</span></div><div><b>02</b><span>إدارة العمليات والاعتمادات</span></div><div><b>03</b><span>متابعة المؤشرات والتقارير</span></div></div></div>
        </section>

        <section id="pricing" className="section pricing"><div className="container"><div className="section-title"><span className="eyebrow">باقات مرنة</span><h2>اختر ما يناسب حجم منشأتك</h2></div><div className="price-card"><div><h3>Bade3 Business</h3><p>حل متكامل للشركات التي تريد إدارة موارد بشرية مركزية.</p></div><ul><li>إدارة الموظفين</li><li>الحضور والانصراف</li><li>الإجازات والأذونات</li><li>التقارير والصلاحيات</li></ul><a className="primary" href="#contact">تواصل معنا</a></div></div></section>

        <section id="contact" className="contact"><div className="container contact-box"><div><span className="eyebrow light">جاهز للبدء؟</span><h2>خلّي إدارة الموارد البشرية أسهل</h2><p>تواصل معنا لتهيئة Bade3 بما يتناسب مع احتياجات منشأتك.</p></div><a className="primary" href="mailto:info@bade3.com">تواصل معنا</a></div></section>
      </main>

      <footer><div className="container footer"><span>© 2026 Bade3</span><span>منصة إدارة الموارد البشرية</span></div></footer>
    </div>
  )
}

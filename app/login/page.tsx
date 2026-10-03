import Link from 'next/link'

export default function LoginPage() {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <Link href="/" className="brand auth-brand"><span className="brand-mark">B</span><span>Bade3</span></Link>
        <span className="eyebrow">بوابة الدخول</span>
        <h1>تسجيل الدخول</h1>
        <p>ادخل إلى لوحة إدارة الموارد البشرية الخاصة بك.</p>
        <form>
          <label>البريد الإلكتروني<input type="email" placeholder="name@company.com" /></label>
          <label>كلمة المرور<input type="password" placeholder="••••••••" /></label>
          <button className="primary" type="submit">دخول</button>
        </form>
        <Link href="/" className="back-link">العودة للرئيسية</Link>
      </div>
    </main>
  )
}

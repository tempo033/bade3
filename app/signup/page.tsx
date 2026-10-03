'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function SignupPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError('')
    setMessage('')

    const supabase = createClient()
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: name } },
    })

    if (signUpError) {
      setError(signUpError.message)
      setLoading(false)
      return
    }

    if (data.session) {
      router.replace('/dashboard')
      router.refresh()
      return
    }

    setMessage('تم إنشاء الحساب. إذا كان تأكيد البريد الإلكتروني مفعّلًا، افتح رسالة التأكيد ثم سجّل الدخول.')
    setLoading(false)
  }

  return (
    <main className="auth-page">
      <div className="auth-card">
        <Link href="/" className="brand auth-brand"><span className="brand-mark">B</span><span>Bade3</span></Link>
        <span className="eyebrow">إنشاء حساب</span>
        <h1>ابدأ باستخدام Bade3</h1>
        <p>أنشئ أول حساب إدارة للنظام.</p>
        <form onSubmit={handleSubmit}>
          <label>الاسم<input value={name} onChange={(e) => setName(e.target.value)} required /></label>
          <label>البريد الإلكتروني<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></label>
          <label>كلمة المرور<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength={6} required /></label>
          {error && <div className="auth-error" role="alert">{error}</div>}
          {message && <div className="auth-success">{message}</div>}
          <button className="primary" type="submit" disabled={loading}>{loading ? 'جارٍ الإنشاء...' : 'إنشاء الحساب'}</button>
        </form>
        <Link href="/login" className="back-link">لديك حساب؟ تسجيل الدخول</Link>
      </div>
    </main>
  )
}

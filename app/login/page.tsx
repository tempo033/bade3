'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError('')

    const supabase = createClient()
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password })

    if (signInError) {
      setError('بيانات الدخول غير صحيحة أو أن المستخدم غير مُنشأ بعد.')
      setLoading(false)
      return
    }

    router.replace('/dashboard')
    router.refresh()
  }

  return (
    <main className="auth-page">
      <div className="auth-card">
        <Link href="/" className="brand auth-brand"><span className="brand-mark">B</span><span>Bade3</span></Link>
        <span className="eyebrow">بوابة الدخول</span>
        <h1>تسجيل الدخول</h1>
        <p>ادخل إلى لوحة إدارة الموارد البشرية الخاصة بك.</p>
        <form onSubmit={handleSubmit}>
          <label>البريد الإلكتروني
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@company.com" required />
          </label>
          <label>كلمة المرور
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required />
          </label>
          {error && <div className="auth-error" role="alert">{error}</div>}
          <button className="primary" type="submit" disabled={loading}>
            {loading ? 'جارٍ الدخول...' : 'دخول'}
          </button>
        </form>
        <Link href="/" className="back-link">العودة للرئيسية</Link>
      </div>
    </main>
  )
}

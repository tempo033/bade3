import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bade3 — منصة إدارة الموارد البشرية',
  description: 'Bade3 — منصة حديثة لإدارة الموارد البشرية والحضور والانصراف.',
  metadataBase: new URL('https://bade3.com'),
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>
}

import { notFound } from 'next/navigation'
import Header from '../components/Header'
import Footer from '../components/Footer'

const locales = ['en', 'hi']

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function LocaleLayout({ children, params }) {
  const { locale } = params
  
  if (!locales.includes(locale)) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale} />
      <main className="flex-1">
        {children}
      </main>
      <Footer locale={locale} />
    </div>
  )
}
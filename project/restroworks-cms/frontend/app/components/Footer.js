import Link from 'next/link'
import { Twitter, Linkedin, Github, Mail } from 'lucide-react'

const translations = {
  en: {
    product: 'Product',
    features: 'Features',
    pricing: 'Pricing',
    integrations: 'Integrations',
    company: 'Company',
    about: 'About Us',
    blog: 'Blog',
    careers: 'Careers',
    support: 'Support',
    helpCenter: 'Help Center',
    contact: 'Contact',
    documentation: 'Documentation',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    description: 'The smart choice for your team. Streamline workflows and boost productivity.',
    rightsReserved: '© 2025 Restroworks WorkManage. All rights reserved.'
  },
  hi: {
    product: 'उत्पाद',
    features: 'सुविधाएं',
    pricing: 'मूल्य निर्धारण',
    integrations: 'एकीकरण',
    company: 'कंपनी',
    about: 'हमारे बारे में',
    blog: 'ब्लॉग',
    careers: 'करियर',
    support: 'सहायता',
    helpCenter: 'सहायता केंद्र',
    contact: 'संपर्क',
    documentation: 'दस्तावेज़ीकरण',
    legal: 'कानूनी',
    privacy: 'गोपनीयता नीति',
    terms: 'सेवा की शर्तें',
    description: 'आपकी टीम के लिए स्मार्ट विकल्प। वर्कफ़्लो को सुव्यवस्थित करें और उत्पादकता बढ़ाएं।',
    rightsReserved: '© 2024 WorkManage। सभी अधिकार सुरक्षित।'
  }
}

export default function Footer({ locale = 'en' }) {
  const t = translations[locale]

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href={`/${locale}`} className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="font-bold text-xl text-gray-900">WorkManage</span>
            </Link>
            <p className="text-gray-600 mb-4 max-w-sm">
              {t.description}
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{t.product}</h3>
            <ul className="space-y-3">
              <li><Link href={`/${locale}#features`} className="text-gray-600 hover:text-gray-900 transition-colors">{t.features}</Link></li>
              <li><Link href={`/${locale}#pricing`} className="text-gray-600 hover:text-gray-900 transition-colors">{t.pricing}</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">{t.integrations}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{t.company}</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">{t.about}</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">{t.blog}</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">{t.careers}</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{t.support}</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">{t.helpCenter}</Link></li>
              <li><Link href={`/${locale}/contact`} className="text-gray-600 hover:text-gray-900 transition-colors">{t.contact}</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">{t.documentation}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">{t.rightsReserved}</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">{t.privacy}</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">{t.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
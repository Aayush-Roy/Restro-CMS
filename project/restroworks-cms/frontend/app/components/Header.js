'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Globe } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'

const translations = {
  en: {
    features: 'Features',
    pricing: 'Pricing',
    contact: 'Contact',
    login: 'Log in',
    getStarted: 'Get started',
    company: 'Company',
    about: 'About Us',
    blog: 'Blog',
    careers: 'Careers'
  },
  hi: {
    features: 'सुविधाएं',
    pricing: 'मूल्य निर्धारण',
    contact: 'संपर्क',
    login: 'लॉग इन',
    getStarted: 'शुरू करें',
    company: 'कंपनी',
    about: 'हमारे बारे में',
    blog: 'ब्लॉग',
    careers: 'करियर'
  }
}

export default function Header({ locale = 'en' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = translations[locale]

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="font-bold text-xl text-gray-900">WorkManage</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href={`/${locale}#features`} className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              {t.features}
            </Link>
            <Link href={`/${locale}#pricing`} className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              {t.pricing}
            </Link>
            <Link href={`/${locale}/contact`} className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              {t.contact}
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher locale={locale} />
            <Link href="#login" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              {t.login}
            </Link>
            <Link href="#signup" className="btn-primary">
              {t.getStarted}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher locale={locale} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 animate-slide-up">
            <div className="py-4 space-y-4">
              <Link 
                href={`/${locale}#features`} 
                className="block px-4 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.features}
              </Link>
              <Link 
                href={`/${locale}#pricing`} 
                className="block px-4 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.pricing}
              </Link>
              <Link 
                href={`/${locale}/contact`} 
                className="block px-4 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.contact}
              </Link>
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-gray-100">
                <Link href="#login" className="btn-secondary text-center">
                  {t.login}
                </Link>
                <Link href="#signup" className="btn-primary text-center">
                  {t.getStarted}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
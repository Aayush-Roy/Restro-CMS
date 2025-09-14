'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Play, Star, Users, CheckCircle } from 'lucide-react'
import Image from 'next/image'

const translations = {
  en: {
    title: 'Effortless task',
    titleHighlight: 'management, anytime',
    subtitle: 'Transform your productivity with WorkManage - the smart task management platform designed for modern teams. Streamline workflows, collaborate seamlessly, and achieve more together.',
    getStarted: 'Get started',
    watchDemo: 'Watch demo',
    trustedBy: 'Trusted by 15,000+ teams worldwide',
    rating: '4.9/5 stars',
    reviews: '2,000+ reviews',
    users: '15,000+ users'
  },
  hi: {
    title: 'सहज कार्य',
    titleHighlight: 'प्रबंधन, कभी भी',
    subtitle: 'WorkManage के साथ अपनी उत्पादकता को बढ़ाएं - आधुनिक टीमों के लिए डिज़ाइन किया गया स्मार्ट कार्य प्रबंधन प्लेटफॉर्म। वर्कफ़्लो को सुव्यवस्थित करें, सहयोग करें और एक साथ अधिक उपलब्धियां हासिल करें।',
    getStarted: 'शुरू करें',
    watchDemo: 'डेमो देखें',
    trustedBy: '15,000+ टीमों द्वारा भरोसा',
    rating: '4.9/5 स्टार',
    reviews: '2,000+ समीक्षाएं',
    users: '15,000+ उपयोगकर्ता'
  }
}

export default function HeroBlock({ locale = 'en' }) {
  const [isVisible, setIsVisible] = useState(false)
  const t = translations[locale]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative pt-20 pb-12 lg:pt-32 lg:pb-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-gray-900/5 bg-grid-16"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-purple-100/50 to-transparent"></div>
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t.title}{' '}
                <span className="gradient-text">{t.titleHighlight}</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
                {t.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center space-x-2 text-lg">
                <span>{t.getStarted}</span>
                <ArrowRight size={20} />
              </button>
              <button className="btn-secondary flex items-center justify-center space-x-2 text-lg">
                <Play size={18} />
                <span>{t.watchDemo}</span>
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-700">{t.rating}</span>
              </div>
              <div className="text-sm text-gray-500">{t.reviews}</div>
              <div className="flex items-center space-x-2">
                <Users size={16} className="text-gray-400" />
                <span className="text-sm text-gray-500">{t.users}</span>
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              {/* Desktop Dashboard */}
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-float">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="bg-white rounded-lg px-3 py-1 text-xs text-gray-600">workmanage.app</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">Hello, Cecilia</h3>
                      <div className="w-8 h-8 bg-primary-100 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-gray-900">12</div>
                        <div className="text-xs text-gray-500">Active</div>
                      </div>
                      <div className="bg-primary-50 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-primary-600">8</div>
                        <div className="text-xs text-gray-500">Completed</div>
                      </div>
                      <div className="bg-accent-50 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-accent-600">3</div>
                        <div className="text-xs text-gray-500">Overdue</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded-r-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-900">Design system updates</span>
                          <CheckCircle size={16} className="text-amber-500" />
                        </div>
                      </div>
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-900">Client presentation</span>
                          <CheckCircle size={16} className="text-blue-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile App Preview */}
              <div className="absolute -bottom-4 -right-4 w-32 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="bg-gray-900 h-6 rounded-t-2xl flex items-center justify-center">
                  <div className="w-8 h-1 bg-gray-600 rounded-full"></div>
                </div>
                <div className="p-3">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <div className="w-16 h-1 bg-gray-200 rounded"></div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-12 h-1 bg-gray-200 rounded"></div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <div className="w-14 h-1 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

const translations = {
  en: {
    title: 'Ready to streamline',
    titleHighlight: 'your workflow?',
    subtitle: 'Join thousands of teams who have transformed their productivity with WorkManage. Start your free trial today and experience the difference.',
    getStarted: 'Start Free Trial',
    watchDemo: 'Schedule Demo',
    noCredit: 'No credit card required',
    features: ['30-day free trial', 'Setup in minutes', '24/7 support']
  },
  hi: {
    title: 'अपने वर्कफ़्लो को सुव्यवस्थित',
    titleHighlight: 'करने के लिए तैयार?',
    subtitle: 'हजारों टीमों में शामिल हों जिन्होंने WorkManage के साथ अपनी उत्पादकता को बदल दिया है। आज ही अपना निःशुल्क परीक्षण शुरू करें और अंतर का अनुभव करें।',
    getStarted: 'निःशुल्क परीक्षण शुरू करें',
    watchDemo: 'डेमो शेड्यूल करें',
    noCredit: 'क्रेडिट कार्ड की आवश्यकता नहीं',
    features: ['30-दिन निःशुल्क परीक्षण', 'मिनटों में सेटअप', '24/7 सहायता']
  }
}

export default function CTABlock({ locale = 'en' }) {
  const [isVisible, setIsVisible] = useState(false)
  const t = translations[locale]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('cta-block')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="cta-block" className="py-20 bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative">
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sparkles size={20} className="text-yellow-300" />
              <span className="text-white font-medium">Transform Your Team Today</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t.title}{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              {t.titleHighlight}
            </span>
          </h2>
          
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-white hover:bg-gray-100 text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 text-lg">
              <span>{t.getStarted}</span>
              <ArrowRight size={20} />
            </button>
            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-lg border border-white/30 transition-all duration-200 transform hover:scale-105 text-lg">
              {t.watchDemo}
            </button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-purple-100">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>{t.noCredit}</span>
            </div>
            {t.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useEffect, useState } from 'react'

const translations = {
  en: {
    trustedBy: 'Trusted by teams at'
  },
  hi: {
    trustedBy: 'इन टीमों का भरोसा'
  }
}

const companies = [
  { name: 'Grammarly', color: '#1DBF73' },
  { name: 'Unbounce', color: '#FF6900' },
  { name: 'Buffer', color: '#1DA1F2' },
  { name: 'Spotify', color: '#1ED760' },
  { name: 'Webflow', color: '#4353FF' }
]

export default function CompanyLogos({ locale = 'en' }) {
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

    const element = document.getElementById('company-logos')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="company-logos" className="py-12 bg-white">
      <div className="container">
        <div className={`text-center transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sm font-medium text-gray-500 mb-8">{t.trustedBy}</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {companies.map((company, index) => (
              <div
                key={company.name}
                className={`flex items-center justify-center transition-all duration-500 hover:scale-110 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: company.color }}
                  >
                    <span className="text-white font-bold text-sm">
                      {company.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-gray-600 font-semibold text-lg">
                    {company.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
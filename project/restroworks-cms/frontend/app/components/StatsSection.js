'use client'

import { useEffect, useState, useRef } from 'react'
import { TrendingUp, Users, Clock, Target } from 'lucide-react'

const translations = {
  en: {
    stats: [
      { number: '15,000+', label: 'Active Users', icon: Users },
      { number: '1,300+', label: 'Projects Completed', icon: Target },
      { number: '150,000+', label: 'Tasks Managed', icon: Clock },
      { number: '195%', label: 'Productivity Increase', icon: TrendingUp }
    ]
  },
  hi: {
    stats: [
      { number: '15,000+', label: 'सक्रिय उपयोगकर्ता', icon: Users },
      { number: '1,300+', label: 'पूर्ण परियोजनाएं', icon: Target },
      { number: '150,000+', label: 'प्रबंधित कार्य', icon: Clock },
      { number: '195%', label: 'उत्पादकता में वृद्धि', icon: TrendingUp }
    ]
  }
}

function AnimatedCounter({ end, duration = 2000, prefix = '', suffix = '' }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime
    const startCount = 0
    const endCount = parseInt(end.replace(/[^\d]/g, ''))

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * endCount)
      
      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <span ref={elementRef}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export default function StatsSection({ locale = 'en' }) {
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

    const element = document.getElementById('stats-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats-section" className="py-20 bg-gradient-to-br from-primary-500 to-purple-600">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {t.stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className={`text-center text-white transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <IconComponent size={32} className="text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <AnimatedCounter 
                    end={stat.number} 
                    suffix={stat.number.includes('+') ? '+' : stat.number.includes('%') ? '%' : ''}
                  />
                </div>
                <div className="text-primary-100 font-medium">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
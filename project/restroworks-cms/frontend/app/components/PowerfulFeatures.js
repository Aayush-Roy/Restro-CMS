'use client'

import { useEffect, useState } from 'react'
import { Zap, Target, BarChart3, Users2, Smartphone, CheckCircle } from 'lucide-react'

const translations = {
  en: {
    title: 'Powerful Features to Elevate Your Workflow',
    features: [
      {
        icon: Zap,
        title: 'Make Smart Decisions',
        description: 'Data-driven insights help you make informed decisions and optimize your workflow for maximum productivity.',
        color: 'text-yellow-500',
        bg: 'bg-yellow-50'
      },
      {
        icon: Target,
        title: 'Optimize Your Goals',
        description: 'Set clear objectives, track progress, and achieve your targets with intelligent goal management.',
        color: 'text-pink-500',
        bg: 'bg-pink-50'
      },
      {
        icon: BarChart3, 
        title: 'Task management',
        description: 'Organize, prioritize, and complete tasks efficiently with our intuitive task management system.',
        color: 'text-purple-500',
        bg: 'bg-purple-50'
      },
      {
        icon: Users2,
        title: 'Team chat',
        description: 'Stay connected with integrated team communication tools and real-time collaboration features.',
        color: 'text-blue-500',
        bg: 'bg-blue-50'
      }
    ]
  },
  hi: {
    title: 'आपके वर्कफ़्लो को बेहतर बनाने की शक्तिशाली विशेषताएं',
    features: [
      {
        icon: Zap,
        title: 'स्मार्ट निर्णय लें',
        description: 'डेटा-संचालित अंतर्दृष्टि आपको सूचित निर्णय लेने और अधिकतम उत्पादकता के लिए अपने वर्कफ़्लो को अनुकूलित करने में मदद करती है।',
        color: 'text-yellow-500',
        bg: 'bg-yellow-50'
      },
      {
        icon: Target,
        title: 'अपने लक्ष्यों को अनुकूलित करें',
        description: 'स्पष्ट उद्देश्य निर्धारित करें, प्रगति को ट्रैक करें, और बुद्धिमान लक्ष्य प्रबंधन के साथ अपने लक्ष्यों को प्राप्त करें।',
        color: 'text-pink-500',
        bg: 'bg-pink-50'
      },
      {
        icon: BarChart3,
        title: 'कार्य प्रबंधन',
        description: 'हमारे सहज कार्य प्रबंधन सिस्टम के साथ कार्यों को व्यवस्थित, प्राथमिकता दें और कुशलता से पूरा करें।',
        color: 'text-purple-500',
        bg: 'bg-purple-50'
      },
      {
        icon: Users2,
        title: 'टीम चैट',
        description: 'एकीकृत टीम संचार उपकरण और रियल-टाइम सहयोग सुविधाओं के साथ जुड़े रहें।',
        color: 'text-blue-500',
        bg: 'bg-blue-50'
      }
    ]
  }
}

export default function PowerfulFeatures({ locale = 'en' }) {
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

    const element = document.getElementById('powerful-features')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="powerful-features" className="py-20 bg-white">
      <div className="container">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {t.features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className={`feature-card flex items-start space-x-6 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <IconComponent size={28} className={feature.color} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Dashboard Preview */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-2xl border border-gray-200">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Browser Bar */}
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                  <div className="bg-white rounded-lg px-3 py-1 text-xs text-gray-600 max-w-xs mx-auto">
                    workmanage.app/dashboard
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Hello, Cecilia</h3>
                    <p className="text-gray-600">Here's what's happening with your projects today.</p>
                  </div>
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary-500 rounded-full"></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-primary-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-primary-900">Active Projects</h4>
                      <BarChart3 size={20} className="text-primary-600" />
                    </div>
                    <div className="text-3xl font-bold text-primary-600 mb-2">12</div>
                    <div className="text-sm text-primary-700">+2 from last week</div>
                  </div>

                  <div className="bg-green-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-green-900">Completed</h4>
                      <CheckCircle size={20} className="text-green-600" />
                    </div>
                    <div className="text-3xl font-bold text-green-600 mb-2">28</div>
                    <div className="text-sm text-green-700">+5 this week</div>
                  </div>

                  <div className="bg-amber-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-amber-900">Team Members</h4>
                      <Users2 size={20} className="text-amber-600" />
                    </div>
                    <div className="text-3xl font-bold text-amber-600 mb-2">8</div>
                    <div className="text-sm text-amber-700">Online now</div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Recent Tasks</h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                        <span className="font-medium text-gray-900">Design system updates</span>
                      </div>
                      <span className="text-sm text-gray-500">Due today</span>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="font-medium text-gray-900">Client presentation</span>
                      </div>
                      <span className="text-sm text-gray-500">Tomorrow</span>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                        <span className="font-medium text-gray-900">Team sync meeting</span>
                      </div>
                      <span className="text-sm text-gray-500">Friday</span>
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
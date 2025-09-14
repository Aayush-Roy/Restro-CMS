'use client'

import { useEffect, useState } from 'react'
import { Check, Star, Sparkles } from 'lucide-react'

const translations = {
  en: {
    title: 'Flexible plans for every team',
    subtitle: 'Choose the plan that fits your team size and workflow requirements. Upgrade or downgrade anytime.',
    monthly: 'Monthly',
    yearly: 'Yearly',
    save: 'Save 20%',
    plans: [
      {
        name: 'Starter Plan',
        description: 'Perfect for small teams getting started',
        price: 'FREE',
        yearlyPrice: 'FREE',
        features: [
          'Up to 5 team members',
          'Basic task management',
          'Email support',
          'Mobile app access',
          'Basic integrations'
        ],
        cta: 'Get Started Free',
        popular: false
      },
      {
        name: 'Pro Plan',
        description: 'Best for growing teams and businesses',
        price: '$19',
        yearlyPrice: '$15',
        features: [
          'Up to 50 team members',
          'Advanced project management',
          'Priority support',
          'Custom workflows',
          'Advanced integrations',
          'Team analytics',
          'Unlimited projects'
        ],
        cta: 'Start Pro Trial',
        popular: true
      },
      {
        name: 'Enterprise Plan',
        description: 'For large organizations with advanced needs',
        price: '$49',
        yearlyPrice: '$39',
        features: [
          'Unlimited team members',
          'Advanced security & compliance',
          'Dedicated account manager',
          'Custom integrations',
          'Advanced reporting',
          'SSO & LDAP',
          'Priority onboarding'
        ],
        cta: 'Contact Sales',
        popular: false
      }
    ]
  },
  hi: {
    title: 'हर टीम के लिए लचीली योजनाएं',
    subtitle: 'वह योजना चुनें जो आपकी टीम के आकार और वर्कफ़्लो आवश्यकताओं के अनुकूल हो। कभी भी अपग्रेड या डाउनग्रेड करें।',
    monthly: 'मासिक',
    yearly: 'वार्षिक',
    save: '20% बचाएं',
    plans: [
      {
        name: 'स्टार्टर प्लान',
        description: 'शुरुआत करने वाली छोटी टीमों के लिए बेहतरीन',
        price: 'निःशुल्क',
        yearlyPrice: 'निःशुल्क',
        features: [
          '5 टीम सदस्यों तक',
          'बुनियादी कार्य प्रबंधन',
          'ईमेल सहायता',
          'मोबाइल ऐप एक्सेस',
          'बुनियादी एकीकरण'
        ],
        cta: 'निःशुल्क शुरू करें',
        popular: false
      },
      {
        name: 'प्रो प्लान',
        description: 'बढ़ती टीमों और व्यवसायों के लिए सर्वोत्तम',
        price: '$19',
        yearlyPrice: '$15',
        features: [
          '50 टीम सदस्यों तक',
          'उन्नत प्रोजेक्ट प्रबंधन',
          'प्राथमिकता समर्थन',
          'कस्टम वर्कफ़्लो',
          'उन्नत एकीकरण',
          'टीम एनालिटिक्स',
          'असीमित परियोजनाएं'
        ],
        cta: 'प्रो ट्रायल शुरू करें',
        popular: true
      },
      {
        name: 'एंटरप्राइज प्लान',
        description: 'उन्नत आवश्यकताओं वाले बड़े संगठनों के लिए',
        price: '$49',
        yearlyPrice: '$39',
        features: [
          'असीमित टीम सदस्य',
          'उन्नत सुरक्षा और अनुपालन',
          'समर्पित खाता प्रबंधक',
          'कस्टम एकीकरण',
          'उन्नत रिपोर्टिंग',
          'SSO और LDAP',
          'प्राथमिकता ऑनबोर्डिंग'
        ],
        cta: 'सेल्स से संपर्क करें',
        popular: false
      }
    ]
  }
}

export default function PricingSection({ locale = 'en' }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isYearly, setIsYearly] = useState(false)
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

    const element = document.getElementById('pricing')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {t.subtitle}
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              {t.monthly}
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-7 bg-gray-200 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              style={{ backgroundColor: isYearly ? '#7c3aed' : '#e5e7eb' }}
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                  isYearly ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <div className="flex items-center space-x-2">
              <span className={`font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
                {t.yearly}
              </span>
              {isYearly && (
                <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-medium">
                  {t.save}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white border-2 rounded-2xl p-8 transition-all duration-500 hover:shadow-xl ${
                plan.popular 
                  ? 'border-primary-500 shadow-lg transform scale-105' 
                  : 'border-gray-200 hover:border-gray-300'
              } ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star size={14} className="fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-gray-900">
                    {isYearly ? plan.yearlyPrice : plan.price}
                    {plan.price !== 'FREE' && plan.price !== 'निःशुल्क' && (
                      <span className="text-lg font-normal text-gray-500">/month</span>
                    )}
                  </div>
                  {isYearly && plan.price !== 'FREE' && plan.price !== 'निःशुल्क' && (
                    <div className="text-sm text-gray-500 mt-1">
                      Billed annually
                    </div>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check size={20} className="text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-primary-500 hover:bg-primary-600 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
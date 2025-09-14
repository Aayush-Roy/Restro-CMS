

"use client";

import { useEffect, useState } from "react";
import { CheckCircle, Clock, Target } from "lucide-react";

const translations = {
  en: {
    title: "Key features to boost your productivity",
    subtitle:
      "Discover powerful tools designed to streamline your workflow and enhance team collaboration.",
    features: [
      {
        icon: CheckCircle,
        title: "To-Do List",
        description:
          "Organize tasks efficiently with smart prioritization and deadline tracking.",
      },
      {
        icon: Clock,
        title: "Team Member Tracking",
        description:
          "Monitor team progress and workload distribution in real-time.",
      },
      {
        icon: Target,
        title: "Project Tracking",
        description:
          "Keep projects on track with milestone management and progress visualization.",
      },
    ],
  },
  hi: {
    title: "आपकी उत्पादकता बढ़ाने की मुख्य विशेषताएं",
    subtitle:
      "शक्तिशाली उपकरणों की खोज करें जो आपके वर्कफ़्लो को सुव्यवस्थित करने और टीम सहयोग को बढ़ाने के लिए डिज़ाइन किए गए हैं।",
    features: [
      {
        icon: CheckCircle,
        title: "कार्य सूची",
        description:
          "स्मार्ट प्राथमिकता और समय सीमा ट्रैकिंग के साथ कार्यों को कुशलता से व्यवस्थित करें।",
      },
      {
        icon: Clock,
        title: "टीम सदस्य ट्रैकिंग",
        description:
          "रियल-टाइम में टीम की प्रगति और कार्यभार वितरण की निगरानी करें।",
      },
      {
        icon: Target,
        title: "प्रोजेक्ट ट्रैकिंग",
        description:
          "मील का पत्थर प्रबंधन और प्रगति दृश्यीकरण के साथ परियोजनाओं को ट्रैक पर रखें।",
      },
    ],
  },
};

export default function KeyFeatures({ locale = "en" }) {
  const [isVisible, setIsVisible] = useState(false);

  const t = translations[locale] || translations.en;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    const element = document.getElementById("key-features");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="key-features" className="py-20 bg-gray-50">
      <div className="container">
        <div
          className={`text-center mb-16 transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="space-y-16">
          {t.features.map((feature, index) => {
            const IconComponent = feature.icon || CheckCircle;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12 transition-all duration-800 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : `opacity-0 ${isEven ? "translate-x-10" : "-translate-x-10"}`
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <IconComponent size={24} className="text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Text Mockup */}
                <div className="flex-1">
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 max-w-md mx-auto">
                    <div className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-xl p-6 h-64 flex items-center justify-center text-center">
                      <div>
                        <h4 className="text-xl font-bold text-primary-600 mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-gray-700">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

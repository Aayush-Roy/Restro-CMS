// 'use client'

// import { useEffect, useState } from 'react'
// import { CheckCircle, Clock, Target, TrendingUp } from 'lucide-react'

// const translations = {
//   en: {
//     title: 'Key features to boost your productivity',
//     subtitle: 'Discover powerful tools designed to streamline your workflow and enhance team collaboration.',
//     features: [
//       {
//         icon: CheckCircle,
//         title: 'To-Do List',
//         description: 'Organize tasks efficiently with smart prioritization and deadline tracking.',
//         image: '/api/placeholder/400/300'
//       },
//       {
//         icon: Clock,
//         title: 'Team Member Tracking',
//         description: 'Monitor team progress and workload distribution in real-time.',
//         image: '/api/placeholder/400/300'
//       },
//       {
//         icon: Target,
//         title: 'Project Tracking',
//         description: 'Keep projects on track with milestone management and progress visualization.',
//         image: '/api/placeholder/400/300'
//       }
//     ]
//   },
//   hi: {
//     title: 'आपकी उत्पादकता बढ़ाने की मुख्य विशेषताएं',
//     subtitle: 'शक्तिशाली उपकरणों की खोज करें जो आपके वर्कफ़्लो को सुव्यवस्थित करने और टीम सहयोग को बढ़ाने के लिए डिज़ाइन किए गए हैं।',
//     features: [
//       {
//         icon: CheckCircle,
//         title: 'कार्य सूची',
//         description: 'स्मार्ट प्राथमिकता और समय सीमा ट्रैकिंग के साथ कार्यों को कुशलता से व्यवस्थित करें।',
//         image: '/api/placeholder/400/300'
//       },
//       {
//         icon: Clock,
//         title: 'टीम सदस्य ट्रैकिंग',
//         description: 'रियल-टाइम में टीम की प्रगति और कार्यभार वितरण की निगरानी करें।',
//         image: '/api/placeholder/400/300'
//       },
//       {
//         icon: Target,
//         title: 'प्रोजेक्ट ट्रैकिंग',
//         description: 'मील का पत्थर प्रबंधन और प्रगति दृश्यीकरण के साथ परियोजनाओं को ट्रैक पर रखें।',
//         image: '/api/placeholder/400/300'
//       }
//     ]
//   }
// }

// export default function KeyFeatures({ locale = 'en' }) {
//   const [isVisible, setIsVisible] = useState(false)
//   const t = translations[locale]

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//         }
//       },
//       { threshold: 0.1 }
//     )

//     const element = document.getElementById('key-features')
//     if (element) observer.observe(element)

//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section id="key-features" className="py-20 bg-gray-50">
//       <div className="container">
//         <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             {t.title}
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             {t.subtitle}
//           </p>
//         </div>

//         <div className="space-y-16">
//           {t.features.map((feature, index) => {
//             const IconComponent = feature.icon
//             const isEven = index % 2 === 0

//             return (
//               <div
//                 key={index}
//                 className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 transition-all duration-800 ${
//                   isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? 'translate-x-10' : '-translate-x-10'}`
//                 }`}
//                 style={{ transitionDelay: `${index * 200}ms` }}
//               >
//                 {/* Content */}
//                 <div className="flex-1 space-y-6">
//                   <div className="flex items-center space-x-4">
//                     <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
//                       <IconComponent size={24} className="text-primary-600" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900">
//                       {feature.title}
//                     </h3>
//                   </div>
//                   <p className="text-lg text-gray-600 leading-relaxed">
//                     {feature.description}
//                   </p>
//                 </div>

//                 {/* Feature Image/Mockup */}
//                 <div className="flex-1">
//                   <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 max-w-md mx-auto">
//                     <div className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-xl p-6 h-64 flex items-center justify-center">
//                       <div className="text-center space-y-4">
//                         <IconComponent size={48} className="text-primary-500 mx-auto" />
//                         <div className="space-y-2">
//                           <div className="h-2 bg-primary-200 rounded w-32 mx-auto"></div>
//                           <div className="h-2 bg-gray-200 rounded w-24 mx-auto"></div>
//                           <div className="h-2 bg-gray-200 rounded w-28 mx-auto"></div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }
// "use client";

// import { useEffect, useState } from "react";
// import { CheckCircle, Clock, Target } from "lucide-react";

// const iconMap = {
//   checkcircle: CheckCircle,
//   clock: Clock,
//   target: Target,
// };

// export default function KeyFeatures({ locale = "en" }) {
//   const [features, setFeatures] = useState([]);
//   const [title, setTitle] = useState("");
//   const [subtitle, setSubtitle] = useState("");
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     async function fetchFeatures() {
//       try {
//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"}/api/features?locale=${locale}`
//         );
//         const data = await res.json();

//         // Assume your CMS returns something like:
//         // { title: "...", subtitle: "...", docs: [{ title, description, icon, image }, ...] }
//         setTitle(data.title || "Key Features");
//         setSubtitle(data.subtitle || "Discover powerful tools for productivity.");
//         setFeatures(data.docs || []);
//       } catch (err) {
//         console.error("Error fetching features:", err);
//         setFeatures([]); // fallback: empty array
//       }
//     }

//     fetchFeatures();
//   }, [locale]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setIsVisible(true);
//       },
//       { threshold: 0.1 }
//     );
//     const element = document.getElementById("key-features");
//     if (element) observer.observe(element);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="key-features" className="py-20 bg-gray-50">
//       <div className="container">
//         <div
//           className={`text-center mb-16 transition-all duration-800 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             {title}
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             {subtitle}
//           </p>
//         </div>

//         <div className="space-y-16">
//           {features.map((feature, index) => {
//             const IconComponent = iconMap[feature.icon?.toLowerCase()] || CheckCircle;
//             const isEven = index % 2 === 0;

//             return (
//               <div
//                 key={feature.id || index}
//                 className={`flex flex-col ${
//                   isEven ? "lg:flex-row" : "lg:flex-row-reverse"
//                 } items-center gap-12 transition-all duration-800 ${
//                   isVisible
//                     ? "opacity-100 translate-x-0"
//                     : `opacity-0 ${isEven ? "translate-x-10" : "-translate-x-10"}`
//                 }`}
//                 style={{ transitionDelay: `${index * 200}ms` }}
//               >
//                 {/* Content */}
//                 <div className="flex-1 space-y-6">
//                   <div className="flex items-center space-x-4">
//                     <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
//                       <IconComponent size={24} className="text-primary-600" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900">
//                       {feature.title}
//                     </h3>
//                   </div>
//                   <p className="text-lg text-gray-600 leading-relaxed">
//                     {feature.description}
//                   </p>
//                 </div>

//                 {/* Image */}
//                 <div className="flex-1">
//                   <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 max-w-md mx-auto">
//                     <div className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-xl p-6 h-64 flex items-center justify-center">
//                       <img
//                         src={
//                           feature.image?.url
//                             ? `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"}${feature.image.url}`
//                             : "/images/default-feature.png"
//                         }
//                         alt={feature.title}
//                         className="w-full h-full object-cover rounded-xl"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
// "use client";

// import { useEffect, useState } from "react";
// import { CheckCircle, Clock, Target } from "lucide-react";

// const translations = {
//   en: {
//     title: "Key features to boost your productivity",
//     subtitle:
//       "Discover powerful tools designed to streamline your workflow and enhance team collaboration.",
//     features: [
//       {
//         icon: CheckCircle,
//         title: "To-Do List",
//         description:
//           "Organize tasks efficiently with smart prioritization and deadline tracking.",
//         image: "/images/default-feature.png",
//       },
//       {
//         icon: Clock,
//         title: "Team Member Tracking",
//         description:
//           "Monitor team progress and workload distribution in real-time.",
//         image: "/images/default-feature.png",
//       },
//       {
//         icon: Target,
//         title: "Project Tracking",
//         description:
//           "Keep projects on track with milestone management and progress visualization.",
//         image: "/images/default-feature.png",
//       },
//     ],
//   },
//   hi: {
//     title: "आपकी उत्पादकता बढ़ाने की मुख्य विशेषताएं",
//     subtitle:
//       "शक्तिशाली उपकरणों की खोज करें जो आपके वर्कफ़्लो को सुव्यवस्थित करने और टीम सहयोग को बढ़ाने के लिए डिज़ाइन किए गए हैं।",
//     features: [
//       {
//         icon: CheckCircle,
//         title: "कार्य सूची",
//         description:
//           "स्मार्ट प्राथमिकता और समय सीमा ट्रैकिंग के साथ कार्यों को कुशलता से व्यवस्थित करें।",
//         image: "/images/default-feature.png",
//       },
//       {
//         icon: Clock,
//         title: "टीम सदस्य ट्रैकिंग",
//         description:
//           "रियल-टाइम में टीम की प्रगति और कार्यभार वितरण की निगरानी करें।",
//         image: "/images/default-feature.png",
//       },
//       {
//         icon: Target,
//         title: "प्रोजेक्ट ट्रैकिंग",
//         description:
//           "मील का पत्थर प्रबंधन और प्रगति दृश्यीकरण के साथ परियोजनाओं को ट्रैक पर रखें।",
//         image: "/images/default-feature.png",
//       },
//     ],
//   },
// };

// export default function KeyFeatures({ locale = "en" }) {
//   const [isVisible, setIsVisible] = useState(false);

//   const t = translations[locale] || translations.en;

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setIsVisible(true);
//       },
//       { threshold: 0.1 }
//     );
//     const element = document.getElementById("key-features");
//     if (element) observer.observe(element);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="key-features" className="py-20 bg-gray-50">
//       <div className="container">
//         <div
//           className={`text-center mb-16 transition-all duration-800 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             {t.title}
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             {t.subtitle}
//           </p>
//         </div>

//         <div className="space-y-16">
//           {t.features.map((feature, index) => {
//             const IconComponent = feature.icon || CheckCircle;
//             const isEven = index % 2 === 0;

//             return (
//               <div
//                 key={index}
//                 className={`flex flex-col ${
//                   isEven ? "lg:flex-row" : "lg:flex-row-reverse"
//                 } items-center gap-12 transition-all duration-800 ${
//                   isVisible
//                     ? "opacity-100 translate-x-0"
//                     : `opacity-0 ${isEven ? "translate-x-10" : "-translate-x-10"}`
//                 }`}
//                 style={{ transitionDelay: `${index * 200}ms` }}
//               >
//                 {/* Content */}
//                 <div className="flex-1 space-y-6">
//                   <div className="flex items-center space-x-4">
//                     <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
//                       <IconComponent size={24} className="text-primary-600" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900">
//                       {feature.title}
//                     </h3>
//                   </div>
//                   <p className="text-lg text-gray-600 leading-relaxed">
//                     {feature.description}
//                   </p>
//                 </div>

//                 {/* Image */}
//                 <div className="flex-1">
//                   <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 max-w-md mx-auto">
//                     <div className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-xl p-6 h-64 flex items-center justify-center">
//                       <img
//                         src={"https://i.pinimg.com/1200x/5c/6a/6d/5c6a6d0301399d4da2920c6875aa4e48.jpg"}
//                         alt={feature.title}
//                         className="w-full h-full object-cover rounded-xl"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

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

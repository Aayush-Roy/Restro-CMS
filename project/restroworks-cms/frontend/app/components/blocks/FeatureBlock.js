
// 'use client'
// import { Calendar, Users, BarChart3 } from "lucide-react";
// import { useEffect, useState } from "react";

// const translations = {
//   en: {
//     title: 'The smart choice for your team',
//     subtitle: 'Everything you need to manage projects, track progress, and collaborate effectively in one powerful platform.',
//     features: [
//       {
//         id: 'hard-f1',
//         icon: Calendar,
//         title: 'Smart Collaboration',
//         description: 'Work together seamlessly with real-time updates...',
//         color: 'text-blue-500',
//         bg: 'bg-blue-50'
//       },
//       {
//         id: 'hard-f2',
//         icon: Users,
//         title: 'Team Solution',
//         description: 'Built for teams of all sizes with role-based permissions...',
//         color: 'text-green-500',
//         bg: 'bg-green-50'
//       },
//       {
//         id: 'hard-f3',
//         icon: BarChart3,
//         title: 'Customizable Workflow',
//         description: 'Adapt to your unique workflow with custom fields...',
//         color: 'text-purple-500',
//         bg: 'bg-purple-50'
//       }
//     ]
//   },
//   hi: {
//     title: 'आपकी टीम के लिए स्मार्ट विकल्प',
//     subtitle: 'एक शक्तिशाली प्लेटफ़ॉर्म में प्रोजेक्ट प्रबंधित करने, प्रगति ट्रैक करने और प्रभावी रूप से सहयोग करने के लिए आवश्यक सब कुछ।',
//     features: [
//       {
//         id: 'hard-f1-hi',
//         icon: Calendar,
//         title: 'स्मार्ट सहयोग',
//         description: 'रियल-टाइम अपडेट, साझा कार्यक्षेत्र और बुद्धिमान कार्य असाइनमेंट के साथ...',
//         color: 'text-blue-500',
//         bg: 'bg-blue-50'
//       },
//       {
//         id: 'hard-f2-hi',
//         icon: Users,
//         title: 'टीम समाधान',
//         description: 'भूमिका-आधारित अनुमतियों, टीम एनालिटिक्स और सहयोगी सुविधाओं के साथ...',
//         color: 'text-green-500',
//         bg: 'bg-green-50'
//       },
//       {
//         id: 'hard-f3-hi',
//         icon: BarChart3,
//         title: 'अनुकूलन योग्य वर्कफ़्लो',
//         description: 'कस्टम फ़ील्ड, स्वचालित प्रक्रियाओं और लचीली परियोजना संरचनाओं के साथ...',
//         color: 'text-purple-500',
//         bg: 'bg-purple-50'
//       }
//     ]
//   }
// };

// export default function FeatureBlock({ locale = 'en' }) {
//   const [features, setFeatures] = useState(translations[locale].features);

//   useEffect(() => {
//     async function fetchFeatures() {
//       try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"}/api/features`);
//         const data = await res.json();

//         const cmsFeatures = (data.docs || []).map(f => ({
//           ...f,
//           icon: mapIcon(f.icon), // CMS icon string → Lucide icon
//         }));

//         // ✅ Merge hardcoded + CMS features
//         setFeatures([...translations[locale].features, ...cmsFeatures]);
//       } catch (err) {
//         console.error(err);
//         setFeatures(translations[locale].features);
//       }
//     }

//     fetchFeatures();
//   }, [locale]);

//   function mapIcon(iconName) {
//     const icons = {
//       calendar: Calendar,
//       users: Users,
//       'bar-chart': BarChart3,
//       // baaki icon mapping add kar sakte ho
//     };
//     return icons[iconName] || Calendar;
//   }

//   return (
//     <div className="grid md:grid-cols-3 gap-6">
//       {features.map((f, i) => {
//         const Icon = f.icon;
//         return (
//           <div key={f.id || i} className="text-center p-6 bg-white rounded-xl shadow">
//             <div className={`w-16 h-16 mx-auto mb-4 ${f.bg} flex items-center justify-center rounded-2xl`}>
//               <Icon size={32} className={f.color} />
//             </div>
//             <h3 className="font-bold text-lg mb-2">{f.title}</h3>
//             <p className="text-gray-600">{f.description}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }


// 'use client'
// import { Calendar, Users, BarChart3 } from "lucide-react";
// import { useEffect, useState } from "react";

// const translations = {
//   en: {
//     title: 'The smart choice for your team',
//     subtitle: 'Everything you need to manage projects, track progress, and collaborate effectively in one powerful platform.',
//     features: [
//       {
//         id: 'hard-f1',
//         icon: Calendar,
//         title: 'Smart Collaboration',
//         description: 'Work together seamlessly with real-time updates and intelligent task assignment.',
//         color: 'text-blue-500',
//         bg: 'bg-blue-50'
//       },
//       {
//         id: 'hard-f2',
//         icon: Users,
//         title: 'Team Solution',
//         description: 'Built for teams of all sizes with role-based permissions and team analytics.',
//         color: 'text-green-500',
//         bg: 'bg-green-50'
//       },
//       {
//         id: 'hard-f3',
//         icon: BarChart3,
//         title: 'Customizable Workflow',
//         description: 'Adapt to your unique workflow with custom fields and automated processes.',
//         color: 'text-purple-500',
//         bg: 'bg-purple-50'
//       }
//     ]
//   },
//   hi: {
//     title: 'आपकी टीम के लिए स्मार्ट विकल्प',
//     subtitle: 'एक शक्तिशाली प्लेटफ़ॉर्म में प्रोजेक्ट प्रबंधित करने, प्रगति ट्रैक करने और प्रभावी रूप से सहयोग करने के लिए आवश्यक सब कुछ।',
//     features: [
//       {
//         id: 'hard-f1-hi',
//         icon: Calendar,
//         title: 'स्मार्ट सहयोग',
//         description: 'रियल-टाइम अपडेट, साझा कार्यक्षेत्र और बुद्धिमान कार्य असाइनमेंट के साथ सहज रूप से काम करें।',
//         color: 'text-blue-500',
//         bg: 'bg-blue-50'
//       },
//       {
//         id: 'hard-f2-hi',
//         icon: Users,
//         title: 'टीम समाधान',
//         description: 'भूमिका-आधारित अनुमतियों, टीम एनालिटिक्स और सहयोगी सुविधाओं के साथ सभी आकार की टीमों के लिए निर्मित।',
//         color: 'text-green-500',
//         bg: 'bg-green-50'
//       },
//       {
//         id: 'hard-f3-hi',
//         icon: BarChart3,
//         title: 'अनुकूलन योग्य वर्कफ़्लो',
//         description: 'कस्टम फ़ील्ड, स्वचालित प्रक्रियाओं और लचीली परियोजना संरचनाओं के साथ अपने अनूठे वर्कफ़्लो के अनुकूल बनाएं।',
//         color: 'text-purple-500',
//         bg: 'bg-purple-50'
//       }
//     ]
//   }
// };

// export default function FeatureBlock({ locale = 'en' }) {
//   const [features, setFeatures] = useState(translations[locale]?.features || translations.en.features);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchFeatures() {
//       setLoading(true);
//       try {
//         // Simulate API call - replace with your actual API endpoint
//         // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"}/api/features`);
//         // const data = await res.json();
        
//         // For demo purposes, using hardcoded data
//         const data = { docs: [] };
        
//         const cmsFeatures = (data.docs || []).map(f => ({
//           ...f,
//           icon: mapIcon(f.icon), // CMS icon string → Lucide icon
//         }));
        
//         // Merge hardcoded + CMS features
//         const currentTranslation = translations[locale] || translations.en;
//         setFeatures([...currentTranslation.features, ...cmsFeatures]);
//       } catch (err) {
//         console.error('Error fetching features:', err);
//         // Fallback to hardcoded features on error
//         const currentTranslation = translations[locale] || translations.en;
//         setFeatures(currentTranslation.features);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchFeatures();
//   }, [locale]);

//   function mapIcon(iconName) {
//     const icons = {
//       calendar: Calendar,
//       users: Users,
//       'bar-chart': BarChart3,
//       'bar-chart-3': BarChart3,
//       // Add more icon mappings as needed
//     };
//     return icons[iconName] || Calendar;
//   }

//   if (loading) {
//     return (
//       <div className="grid md:grid-cols-3 gap-6">
//         {[1, 2, 3].map((i) => (
//           <div key={i} className="text-center p-6 bg-white rounded-xl shadow animate-pulse">
//             <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-2xl"></div>
//             <div className="h-4 bg-gray-200 rounded mb-2"></div>
//             <div className="h-3 bg-gray-200 rounded"></div>
//           </div>
//         ))}
//       </div>
//     );
//   }

//   const currentTranslation = translations[locale] || translations.en;

//   return (
//     <div className="py-12 px-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             {currentTranslation.title}
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             {currentTranslation.subtitle}
//           </p>
//         </div>
        
//         <div className="grid md:grid-cols-3 gap-6">
//           {features.map((f, i) => {
//             const Icon = f.icon;
//             return (
//               <div key={f.id || `feature-${i}`} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
//                 <div className={`w-16 h-16 mx-auto mb-4 ${f.bg || 'bg-gray-50'} flex items-center justify-center rounded-2xl`}>
//                   <Icon size={32} className={f.color || 'text-gray-600'} />
//                 </div>
//                 <h3 className="font-bold text-lg mb-2 text-gray-900">{f.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{f.description}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }
'use client'

import { 
  Calendar, Users, BarChart3, CheckCircle, Clock, Target, Zap, Settings, Shield, Smartphone 
} from "lucide-react";
import { useEffect, useState } from "react";

const translations = {
  en: {
    title: 'The smart choice for your team',
    subtitle: 'Everything you need to manage projects, track progress, and collaborate effectively in one powerful platform.',
    features: [
      {
        id: 'hard-f1',
        icon: Calendar,
        title: 'Smart Collaboration',
        description: 'Work together seamlessly with real-time updates and intelligent task assignment.',
        color: 'text-blue-500',
        bg: 'bg-blue-50'
      },
      {
        id: 'hard-f2',
        icon: Users,
        title: 'Team Solution',
        description: 'Built for teams of all sizes with role-based permissions and team analytics.',
        color: 'text-green-500',
        bg: 'bg-green-50'
      },
      {
        id: 'hard-f3',
        icon: BarChart3,
        title: 'Customizable Workflow',
        description: 'Adapt to your unique workflow with custom fields and automated processes.',
        color: 'text-purple-500',
        bg: 'bg-purple-50'
      }
    ]
  },
  hi: {
    title: 'आपकी टीम के लिए स्मार्ट विकल्प',
    subtitle: 'एक शक्तिशाली प्लेटफ़ॉर्म में प्रोजेक्ट प्रबंधित करने, प्रगति ट्रैक करने और प्रभावी रूप से सहयोग करने के लिए आवश्यक सब कुछ।',
    features: [
      {
        id: 'hard-f1-hi',
        icon: Calendar,
        title: 'स्मार्ट सहयोग',
        description: 'रियल-टाइम अपडेट, साझा कार्यक्षेत्र और बुद्धिमान कार्य असाइनमेंट के साथ सहज रूप से काम करें।',
        color: 'text-blue-500',
        bg: 'bg-blue-50'
      },
      {
        id: 'hard-f2-hi',
        icon: Users,
        title: 'टीम समाधान',
        description: 'भूमिका-आधारित अनुमतियों, टीम एनालिटिक्स और सहयोगी सुविधाओं के साथ सभी आकार की टीमों के लिए निर्मित।',
        color: 'text-green-500',
        bg: 'bg-green-50'
      },
      {
        id: 'hard-f3-hi',
        icon: BarChart3,
        title: 'अनुकूलन योग्य वर्कफ़्लो',
        description: 'कस्टम फ़ील्ड, स्वचालित प्रक्रियाओं और लचीली परियोजना संरचनाओं के साथ अपने अनूठे वर्कफ़्लो के अनुकूल बनाएं।',
        color: 'text-purple-500',
        bg: 'bg-purple-50'
      }
    ]
  }
};

export default function FeatureBlock({ locale = 'en' }) {
  const [features, setFeatures] = useState(translations[locale]?.features || translations.en.features);
  const [loading, setLoading] = useState(true);

  // Map CMS icon string to Lucide icon component
  function mapIcon(iconName) {
    const icons = {
      calendar: Calendar,
      users: Users,
      'bar-chart': BarChart3,
      'bar-chart-3': BarChart3,
      'check-circle': CheckCircle,
      clock: Clock,
      target: Target,
      zap: Zap,
      settings: Settings,
      shield: Shield,
      smartphone: Smartphone,
    };
    return icons[iconName] || Calendar;
  }

  useEffect(() => {
    async function fetchFeatures() {
      setLoading(true);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"}/api/features`);
        const data = await res.json();

        // Convert CMS string icons to React components
        const cmsFeatures = (data.docs || []).map(f => ({
          ...f,
          icon: mapIcon(f.icon),
        }));
        //, ...cmsFeatures
        const currentTranslation = translations[locale] || translations.en;
        setFeatures([...currentTranslation.features]);
      } catch (err) {
        console.error('Error fetching features:', err);
        const currentTranslation = translations[locale] || translations.en;
        setFeatures(currentTranslation.features);
      } finally {
        setLoading(false);
      }
    }

    fetchFeatures();
  }, [locale]);

  if (loading) {
    return (
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="text-center p-6 bg-white rounded-xl shadow animate-pulse">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-2xl"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-3 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  const currentTranslation = translations[locale] || translations.en;

  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{currentTranslation.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{currentTranslation.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={f.id || `feature-${i}`} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`w-16 h-16 mx-auto mb-4 ${f.bg || 'bg-gray-50'} flex items-center justify-center rounded-2xl`}>
                  <Icon size={32} className={f.color || 'text-gray-600'} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

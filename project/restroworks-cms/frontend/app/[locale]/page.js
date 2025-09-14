// import HeroBlock from '../components/blocks/HeroBlock'
// import FeatureBlock from '../components/blocks/FeatureBlock'
// import TestimonialBlock from '../components/blocks/TestimonialBlock'
// import CTABlock from '../components/blocks/CTABlock'
// import CompanyLogos from '../components/CompanyLogos'
// import KeyFeatures from '../components/KeyFeatures'
// import PowerfulFeatures from '../components/PowerfulFeatures'
// import PricingSection from '../components/PricingSection'
// import StatsSection from '../components/StatsSection'

// export async function generateMetadata({ params }) {
//   const { locale } = params
  
//   const titles = {
//     en: 'WorkManage - Effortless Task Management, Anytime',
//     hi: 'WorkManage - सहज कार्य प्रबंधन, कभी भी'
//   }
  
//   const descriptions = {
//     en: 'Transform your productivity with WorkManage - the smart task management platform designed for modern teams.',
//     hi: 'WorkManage के साथ अपनी उत्पादकता को बढ़ाएं - आधुनिक टीमों के लिए डिज़ाइन किया गया स्मार्ट कार्य प्रबंधन प्लेटफॉर्म।'
//   }

//   return {
//     title: titles[locale],
//     description: descriptions[locale],
//     alternates: {
//       canonical: `/${locale}`,
//       languages: {
//         'en': '/en',
//         'hi': '/hi',
//         'bn' : '/bn',
//       },
//     },
//   }
// }

// export default function HomePage({ params }) {
//   const { locale } = params

//   return (
//     <div className="overflow-hidden">
//       <HeroBlock locale={locale} />
//       <CompanyLogos locale={locale} />
//       <FeatureBlock locale={locale} />
//       <KeyFeatures locale={locale} />
//       <PowerfulFeatures locale={locale} />
//       <TestimonialBlock locale={locale} />
//       <StatsSection locale={locale} />
//       <PricingSection locale={locale} />
//       <CTABlock locale={locale} />
//     </div>
//   )
// }
// app/[locale]/page.js - Homepage with CMS data fetching

import HeroBlock from '../components/blocks/HeroBlock'
import FeatureBlock from '../components/blocks/FeatureBlock'
import TestimonialBlock from '../components/blocks/TestimonialBlock'
import CTABlock from '../components/blocks/CTABlock'
import CompanyLogos from '../components/CompanyLogos'
import KeyFeatures from '../components/KeyFeatures'
import PowerfulFeatures from '../components/PowerfulFeatures'
import PricingSection from '../components/PricingSection'
import StatsSection from '../components/StatsSection'

// Component mapping for blocks
const BlockComponents = {
  hero: HeroBlock,
  featureList: FeatureBlock,
  testimonialList: TestimonialBlock,
  cta: CTABlock,
}

// Fetch page data from PayloadCMS
async function getPageData(locale = 'en') {
  const PAYLOAD_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3001'
  
  try {
    // Fetch homepage data with specific slug
    const response = await fetch(
      `${PAYLOAD_URL}/api/pages?where[slug][equals]=home&locale=${locale}&limit=1`,
      {
        next: { revalidate: 60 }, // ISR - revalidate every minute
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    return data.docs?.[0] || null
  } catch (error) {
    console.error('Error fetching page data:', error)
    return null
  }
}

export async function generateMetadata({ params }) {
  const { locale } = params
  
  // Try to get metadata from CMS first
  const pageData = await getPageData(locale)
  
  if (pageData) {
    return {
      title: pageData.metaTitle || pageData.title,
      description: pageData.metaDescription,
      openGraph: {
        title: pageData.metaTitle || pageData.title,
        description: pageData.metaDescription,
        images: pageData.ogImage ? [pageData.ogImage.url] : [],
        locale: locale,
      },
      alternates: {
        canonical: `/${locale}`,
        languages: {
          'en': '/en',
          'hi': '/hi',
          'bn': '/bn',
        },
      },
    }
  }
  
  // Fallback metadata if CMS data not available
  const titles = {
    en: 'WorkManage - Effortless Task Management, Anytime',
    hi: 'WorkManage - सहज कार्य प्रबंधन, कभी भी',
    bn: 'WorkManage - সহজ কাজ পরিচালনা, যেকোনো সময়'
  }
  
  const descriptions = {
    en: 'Transform your productivity with WorkManage - the smart task management platform designed for modern teams.',
    hi: 'WorkManage के साथ अपनी उत्पादकता को बढ़ाएं - आधुनिक टीमों के लिए डिज़ाइन किया गया स्मार्ट कार्य प्रबंधन प्लेटफॉर्म।',
    bn: 'WorkManage দিয়ে আপনার উৎপাদনশীলতা বৃদ্ধি করুন - আধুনিক দলগুলির জন্য ডিজাইন করা স্মার্ট কাজ পরিচালনা প্ল্যাটফর্ম।'
  }

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'hi': '/hi',
        'bn': '/bn',
      },
    },
  }
}

export default async function HomePage({ params }) {
  const { locale } = params
  const pageData = await getPageData(locale)

  // If we have CMS data with layout blocks, use them
  if (pageData && pageData.layout && pageData.layout.length > 0) {
    return (
      <div className="overflow-hidden">
        {pageData.layout.map((block, index) => {
          const BlockComponent = BlockComponents[block.blockType]
          
          if (!BlockComponent) {
            console.warn(`Block type "${block.blockType}" not found`)
            return null
          }

          return (
            <BlockComponent
              key={`${block.blockType}-${index}`}
              blockData={block}
              locale={locale}
            />
          )
        })}
      </div>
    )
  }

  // Fallback to static layout if no CMS data
  return (
    <div className="overflow-hidden">
      <HeroBlock locale={locale} />
      <CompanyLogos locale={locale} />
      <FeatureBlock locale={locale} />
      <KeyFeatures locale={locale} />
      <PowerfulFeatures locale={locale} />
      <TestimonialBlock locale={locale} />
      <StatsSection locale={locale} />
      <PricingSection locale={locale} />
      <CTABlock locale={locale} />
    </div>
  )
}

// Generate static params for supported locales
export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'hi' },
    { locale: 'bn' },
  ]
}
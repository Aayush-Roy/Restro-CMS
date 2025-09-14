import ContactForm from '../../components/ContactForm'

export async function generateMetadata({ params }) {
  const { locale } = params
  
  const titles = {
    en: 'Contact Us - WorkManage',
    hi: 'संपर्क करें - WorkManage'
  }
  
  const descriptions = {
    en: 'Get in touch with our team. We\'re here to help you streamline your workflow.',
    hi: 'हमारी टीम से संपर्क करें। हम आपके वर्कफ़्लो को सुव्यवस्थित करने में आपकी सहायता के लिए यहाँ हैं।'
  }

  return {
    title: titles[locale],
    description: descriptions[locale],
  }
}

export default function ContactPage({ params }) {
  const { locale } = params

  return (
    <div className="py-16">
      <ContactForm locale={locale} />
    </div>
  )
}
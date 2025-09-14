import './globals.css'

export const metadata = {
  title: 'WorkManage - Effortless Task Management',
  description: 'Streamline your workflow with our powerful task management platform. Built for teams of all sizes.',
  keywords: 'task management, productivity, workflow, team collaboration, project management',
  authors: [{ name: 'WorkManage Team' }],
  creator: 'WorkManage',
  publisher: 'WorkManage',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://workmanage.com',
    siteName: 'WorkManage',
    title: 'WorkManage - Effortless Task Management',
    description: 'Streamline your workflow with our powerful task management platform. Built for teams of all sizes.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WorkManage - Task Management Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WorkManage - Effortless Task Management',
    description: 'Streamline your workflow with our powerful task management platform. Built for teams of all sizes.',
    images: ['/og-image.jpg'],
    creator: '@workmanage',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
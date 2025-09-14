export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/_next/'],
    },
    sitemap: 'https://workmanage.com/sitemap.xml',
    host: 'https://workmanage.com',
  }
}
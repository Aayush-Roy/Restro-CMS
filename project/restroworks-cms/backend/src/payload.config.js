const { buildConfig } = require('payload/config')
const { mongooseAdapter } = require('@payloadcms/db-mongodb')
const { webpackBundler } = require('@payloadcms/bundler-webpack')
const { slateEditor } = require('@payloadcms/richtext-slate')

// Collections
const Pages = require('./collections/Pages')
const Media = require('./collections/Media')
const Testimonials = require('./collections/Testimonials')
const Features = require('./collections/Features')
const Contacts = require('./collections/Contacts')
const Users = require('./collections/Users')

// Globals
const Header = require('./globals/Header')
const Footer = require('./globals/Footer')

module.exports = buildConfig({
  admin: {
    user: 'users',
    bundler: webpackBundler(),
    css: 'src/admin.css',
    meta: {
      titleSuffix: '- WorkManage CMS',
      favicon: '/favicon.ico',
      ogImage: '/og-image.jpg',
    },
  },
  editor: slateEditor({}),
  collections: [
    Users,
    Pages,
    Media,
    Testimonials,
    Features,
    Contacts,
  ],
  globals: [
    Header,
    Footer,
  ],
  typescript: {
    outputFile: 'payload-types.ts',
  },
  graphQL: {
    schemaOutputFile: 'schema.graphql',
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI,
  }),
  localization: {
    locales: [
      {
        code: 'en',
        label: 'English',
      },
      {
        code: 'hi',
        label: 'हिंदी',
      },
    ],
    defaultLocale: 'en',
    fallback: true,
  },
  cors: process.env.FRONTEND_URL ? [process.env.FRONTEND_URL] : ['http://localhost:3000'],
  csrf: process.env.FRONTEND_URL ? [process.env.FRONTEND_URL] : ['http://localhost:3000'],
})
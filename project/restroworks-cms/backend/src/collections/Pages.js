// const Hero = require('../blocks/Hero')
// const FeatureList = require('../blocks/FeatureList')
// const TestimonialList = require('../blocks/TestimonialList')
// const CTA = require('../blocks/CTA')

// const Pages = {
//   slug: 'pages',
//   admin: {
//     useAsTitle: 'title',
//     defaultColumns: ['title', 'slug', 'updatedAt'],
//   },
//   versions: {
//     drafts: true,
//   },
//   fields: [
//     {
//       name: 'title',
//       type: 'text',
//       required: true,
//       localized: true,
//     },
//     {
//       name: 'slug',
//       type: 'text',
//       required: true,
//       unique: true,
//       admin: {
//         description: 'URL path for this page (e.g., "about-us")',
//       },
//     },
//     {
//       name: 'metaTitle',
//       type: 'text',
//       localized: true,
//       admin: {
//         description: 'SEO title for this page',
//       },
//     },
//     {
//       name: 'metaDescription',
//       type: 'textarea',
//       localized: true,
//       admin: {
//         description: 'SEO description for this page',
//       },
//     },
//     {
//       name: 'ogImage',
//       type: 'upload',
//       relationTo: 'media',
//       admin: {
//         description: 'Open Graph image for social sharing',
//       },
//     },
//     {
//       name: 'layout',
//       type: 'blocks',
//       blocks: [
//         Hero,
//         FeatureList,
//         TestimonialList,
//         CTA,
//       ],
//       localized: true,
//     },
//     {
//       name: 'status',
//       type: 'select',
//       required: true,
//       defaultValue: 'draft',
//       options: [
//         {
//           label: 'Draft',
//           value: 'draft',
//         },
//         {
//           label: 'Published',
//           value: 'published',
//         },
//       ],
//     },
//   ],
//   hooks: {
//     beforeValidate: [
//       ({ data }) => {
//         if (data.title && !data.slug) {
//           data.slug = data.title
//             .toLowerCase()
//             .replace(/[^a-zA-Z0-9]/g, '-')
//             .replace(/-+/g, '-')
//             .replace(/^-|-$/g, '')
//         }
//       },
//     ],
//   },
// }

// module.exports = Pages
const Hero = require('../blocks/Hero')
const FeatureList = require('../blocks/FeatureList')
const TestimonialList = require('../blocks/TestimonialList')
const CTA = require('../blocks/CTA')

const Pages = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL path for this page (e.g., "about-us")',
      },
    },
    {
      name: 'metaTitle',
      type: 'text',
      localized: true,
      admin: {
        description: 'SEO title for this page',
      },
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      localized: true,
      admin: {
        description: 'SEO description for this page',
      },
    },
    {
      name: 'ogImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Open Graph image for social sharing',
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        Hero,
        FeatureList,
        TestimonialList,
        CTA,
      ],
      localized: true,
      required: false, // Add this to make it optional
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
      ],
    },
  ],
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (data.title && !data.slug) {
          data.slug = data.title
            .toLowerCase()
            .replace(/[^a-zA-Z0-9]/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '')
        }
      },
    ],
  },
}

module.exports = Pages
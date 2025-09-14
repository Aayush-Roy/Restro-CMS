// const Hero = {
//   slug: 'hero',
//   labels: {
//     singular: 'Hero Section',
//     plural: 'Hero Sections',
//   },
//   fields: [
//     {
//       name: 'title',
//       type: 'text',
//       required: true,
//       localized: true,
//     },
//     {
//       name: 'highlightText',
//       type: 'text',
//       localized: true,
//       admin: {
//         description: 'Text to highlight with gradient color',
//       },
//     },
//     {
//       name: 'subtitle',
//       type: 'textarea',
//       required: true,
//       localized: true,
//     },
//     {
//       name: 'primaryCTA',
//       type: 'group',
//       fields: [
//         {
//           name: 'text',
//           type: 'text',
//           required: true,
//           localized: true,
//         },
//         {
//           name: 'link',
//           type: 'text',
//           required: true,
//         },
//       ],
//     },
//     {
//       name: 'secondaryCTA',
//       type: 'group',
//       fields: [
//         {
//           name: 'text',
//           type: 'text',
//           localized: true,
//         },
//         {
//           name: 'link',
//           type: 'text',
//         },
//       ],
//     },
//     {
//       name: 'backgroundImage',
//       type: 'upload',
//       relationTo: 'media',
//     },
//     {
//       name: 'dashboardImage',
//       type: 'upload',
//       relationTo: 'media',
//       admin: {
//         description: 'Dashboard/product screenshot',
//       },
//     },
//     {
//       name: 'socialProof',
//       type: 'group',
//       fields: [
//         {
//           name: 'rating',
//           type: 'text',
//           defaultValue: '4.9/5',
//         },
//         {
//           name: 'reviews',
//           type: 'text',
//           defaultValue: '2,000+',
//         },
//         {
//           name: 'users',
//           type: 'text',
//           defaultValue: '15,000+',
//         },
//       ],
//     },
//   ],
// }

// module.exports = Hero
// const Hero = {
//   slug: 'hero',
//   labels: {
//     singular: 'Hero Section',
//     plural: 'Hero Sections',
//   },
//   access: {
//     // ✅ Anyone can read/fetch hero sections
//     read: () => true,

//     // ✅ Anyone can create hero sections
//     create: () => true,

//     // ✅ Anyone can update hero sections
//     update: () => true,

//     // ✅ Anyone can delete hero sections
//     delete: () => true,
//   },
//   fields: [
//     {
//       name: 'title',
//       type: 'text',
//       required: true,
//       localized: true,
//     },
//     {
//       name: 'highlightText',
//       type: 'text',
//       localized: true,
//       admin: {
//         description: 'Text to highlight with gradient color',
//       },
//     },
//     {
//       name: 'subtitle',
//       type: 'textarea',
//       required: true,
//       localized: true,
//     },
//     {
//       name: 'primaryCTA',
//       type: 'group',
//       fields: [
//         {
//           name: 'text',
//           type: 'text',
//           required: true,
//           localized: true,
//         },
//         {
//           name: 'link',
//           type: 'text',
//           required: true,
//         },
//       ],
//     },
//     {
//       name: 'secondaryCTA',
//       type: 'group',
//       fields: [
//         {
//           name: 'text',
//           type: 'text',
//           localized: true,
//         },
//         {
//           name: 'link',
//           type: 'text',
//         },
//       ],
//     },
//     {
//       name: 'backgroundImage',
//       type: 'upload',
//       relationTo: 'media',
//     },
//     {
//       name: 'dashboardImage',
//       type: 'upload',
//       relationTo: 'media',
//       admin: {
//         description: 'Dashboard/product screenshot',
//       },
//     },
//     {
//       name: 'socialProof',
//       type: 'group',
//       fields: [
//         {
//           name: 'rating',
//           type: 'text',
//           defaultValue: '4.9/5',
//         },
//         {
//           name: 'reviews',
//           type: 'text',
//           defaultValue: '2,000+',
//         },
//         {
//           name: 'users',
//           type: 'text',
//           defaultValue: '15,000+',
//         },
//       ],
//     },
//   ],
// }

// module.exports = Hero;


// blocks/Hero.js
const Hero = {
  slug: 'hero',
  labels: {
    singular: 'Hero Section',
    plural: 'Hero Sections',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      localized: true,
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'ctaText',
      type: 'text',
      localized: true,
    },
    {
      name: 'ctaLink',
      type: 'text',
    },
  ],
}

module.exports = Hero
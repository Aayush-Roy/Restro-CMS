// const Testimonials = {
//   slug: 'testimonials',
//   admin: {
//     useAsTitle: 'customerName',
//     defaultColumns: ['customerName', 'company', 'rating', 'featured'],
//   },
//   fields: [
//     {
//       name: 'content',
//       type: 'textarea',
//       required: true,
//       localized: true,
//       admin: {
//         description: 'The testimonial content/quote',
//       },
//     },
//     {
//       name: 'customerName',
//       type: 'text',
//       required: true,
//       admin: {
//         description: 'Name of the person giving the testimonial',
//       },
//     },
//     {
//       name: 'customerRole',
//       type: 'text',
//       localized: true,
//       admin: {
//         description: 'Job title or role of the customer',
//       },
//     },
//     {
//       name: 'company',
//       type: 'text',
//       required: true,
//       admin: {
//         description: 'Company name',
//       },
//     },
//     {
//       name: 'avatar',
//       type: 'upload',
//       relationTo: 'media',
//       admin: {
//         description: 'Customer profile picture',
//       },
//     },
//     {
//       name: 'rating',
//       type: 'number',
//       min: 1,
//       max: 5,
//       required: true,
//       defaultValue: 5,
//       admin: {
//         description: 'Star rating (1-5)',
//       },
//     },
//     {
//       name: 'featured',
//       type: 'checkbox',
//       defaultValue: false,
//       admin: {
//         description: 'Mark as featured testimonial',
//       },
//     },
//     {
//       name: 'dateGiven',
//       type: 'date',
//       admin: {
//         description: 'When the testimonial was given',
//       },
//     },
//   ],
// }

// module.exports = Testimonials
const Testimonials = {
  slug: 'testimonials',
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'company', 'rating'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'review',
      type: 'textarea',
      required: true,
    },
    {
      name: 'rating',
      type: 'number',
      min: 1,
      max: 5,
      required: true,
    },
    {
      name: 'company',
      type: 'text',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    }
  ]
}

module.exports = Testimonials
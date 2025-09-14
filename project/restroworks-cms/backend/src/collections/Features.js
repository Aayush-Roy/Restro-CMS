// const Features = {
//   slug: 'features',
//   admin: {
//     useAsTitle: 'title',
//     defaultColumns: ['title', 'category', 'featured'],
//   },
//   fields: [
//     {
//       name: 'title',
//       type: 'text',
//       required: true,
//       localized: true,
//     },
//     {
//       name: 'description',
//       type: 'textarea',
//       required: true,
//       localized: true,
//     },
//     {
//       name: 'icon',
//       type: 'select',
//       required: true,
//       options: [
//         { label: 'Calendar', value: 'calendar' },
//         { label: 'Users', value: 'users' },
//         { label: 'Bar Chart', value: 'bar-chart' },
//         { label: 'Check Circle', value: 'check-circle' },
//         { label: 'Clock', value: 'clock' },
//         { label: 'Target', value: 'target' },
//         { label: 'Zap', value: 'zap' },
//         { label: 'Settings', value: 'settings' },
//         { label: 'Shield', value: 'shield' },
//         { label: 'Smartphone', value: 'smartphone' },
//       ],
//       admin: {
//         description: 'Icon to display with this feature',
//       },
//     },
//     {
//       name: 'category',
//       type: 'select',
//       required: true,
//       options: [
//         { label: 'Core Feature', value: 'core' },
//         { label: 'Collaboration', value: 'collaboration' },
//         { label: 'Analytics', value: 'analytics' },
//         { label: 'Integration', value: 'integration' },
//         { label: 'Security', value: 'security' },
//       ],
//     },
//     {
//       name: 'image',
//       type: 'upload',
//       relationTo: 'media',
//       admin: {
//         description: 'Feature illustration or screenshot',
//       },
//     },
//     {
//       name: 'featured',
//       type: 'checkbox',
//       defaultValue: false,
//       admin: {
//         description: 'Mark as featured feature for homepage',
//       },
//     },
//     {
//       name: 'order',
//       type: 'number',
//       admin: {
//         description: 'Display order (lower numbers appear first)',
//       },
//     },
//   ],
// }

// module.exports = Features
// const Features = {
//   slug: 'features',
//   access: {
//     read: () => true, // ✅ Anyone can read (frontend pr fetch hoga)
//     create: ({ req }) => !!req.user, // ✅ Only logged-in admin user can create
//     update: ({ req }) => !!req.user, // ✅ Only logged-in admin user can update
//     delete: ({ req }) => !!req.user, // ✅ Only logged-in admin user can delete
//   },
//   admin: {
//     useAsTitle: 'title',
//     defaultColumns: ['title', 'category', 'featured'],
//   },
//   fields: [
//     {
//       name: 'title',
//       type: 'text',
//       required: true,
//       localized: true,
//     },
//     {
//       name: 'description',
//       type: 'textarea',
//       required: true,
//       localized: true,
//     },
//     {
//       name: 'icon',
//       type: 'select',
//       required: true,
//       options: [
//         { label: 'Calendar', value: 'calendar' },
//         { label: 'Users', value: 'users' },
//         { label: 'Bar Chart', value: 'bar-chart' },
//         { label: 'Check Circle', value: 'check-circle' },
//         { label: 'Clock', value: 'clock' },
//         { label: 'Target', value: 'target' },
//         { label: 'Zap', value: 'zap' },
//         { label: 'Settings', value: 'settings' },
//         { label: 'Shield', value: 'shield' },
//         { label: 'Smartphone', value: 'smartphone' },
//       ],
//       admin: {
//         description: 'Icon to display with this feature',
//       },
//     },
//     {
//       name: 'category',
//       type: 'select',
//       required: true,
//       options: [
//         { label: 'Core Feature', value: 'core' },
//         { label: 'Collaboration', value: 'collaboration' },
//         { label: 'Analytics', value: 'analytics' },
//         { label: 'Integration', value: 'integration' },
//         { label: 'Security', value: 'security' },
//       ],
//     },
//     {
//       name: 'image',
//       type: 'upload',
//       relationTo: 'media',
//       admin: {
//         description: 'Feature illustration or screenshot',
//       },
//     },
//     {
//       name: 'featured',
//       type: 'checkbox',
//       defaultValue: false,
//       admin: {
//         description: 'Mark as featured feature for homepage',
//       },
//     },
//     {
//       name: 'order',
//       type: 'number',
//       admin: {
//         description: 'Display order (lower numbers appear first)',
//       },
//     },
//   ],
// }

// module.exports = Features

const Features = {
  slug: 'features',
  // access: {
  //   read: () => true, // Anyone can read (frontend fetch allowed)
  //   create: ({ req }) => req.user?.role === 'admin', // Only admin can create
  //   update: ({ req }) => req.user?.role === 'admin', // Only admin can update
  //   delete: ({ req }) => req.user?.role === 'admin', // Only admin can delete
  // },
  access: {
  read: () => true,
  create: () => true,
  update: () => true,
  delete: () => true,
},

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'featured'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      localized: true,
    },
    {
      name: 'icon',
      type: 'select',
      required: true,
      options: [
        { label: 'Calendar', value: 'calendar' },
        { label: 'Users', value: 'users' },
        { label: 'Bar Chart', value: 'bar-chart' },
        { label: 'Check Circle', value: 'check-circle' },
        { label: 'Clock', value: 'clock' },
        { label: 'Target', value: 'target' },
        { label: 'Zap', value: 'zap' },
        { label: 'Settings', value: 'settings' },
        { label: 'Shield', value: 'shield' },
        { label: 'Smartphone', value: 'smartphone' },
      ],
      admin: {
        description: 'Icon to display with this feature',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Core Feature', value: 'core' },
        { label: 'Collaboration', value: 'collaboration' },
        { label: 'Analytics', value: 'analytics' },
        { label: 'Integration', value: 'integration' },
        { label: 'Security', value: 'security' },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Feature illustration or screenshot',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Mark as featured feature for homepage',
      },
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        description: 'Display order (lower numbers appear first)',
      },
    },
  ],
}

module.exports = Features

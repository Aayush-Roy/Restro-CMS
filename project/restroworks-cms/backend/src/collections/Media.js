// const Media = {
//   slug: 'media',
//   upload: {
//     staticURL: '/media',
//     staticDir: 'media',
//     adminThumbnail: 'thumbnail',
//     mimeTypes: ['image/*', 'video/*'],
//   },
//   admin: {
//     useAsTitle: 'filename',
//     defaultColumns: ['filename', 'alt', 'mimeType', 'filesize', 'updatedAt'],
//   },
//   fields: [
//     {
//       name: 'alt',
//       type: 'text',
//       required: true,
//       localized: true,
//       admin: {
//         description: 'Alt text for accessibility and SEO',
//       },
//     },
//     {
//       name: 'caption',
//       type: 'text',
//       localized: true,
//     },
//     {
//       name: 'focalPoint',
//       type: 'point',
//       admin: {
//         description: 'Define the focal point for cropping',
//       },
//     },
//   ],
// }

// module.exports = Media
// const Media = {
//   slug: 'media',
//   access: {
//     read: () => true, // ✅ Anyone can read/fetch
//     create: ({ req }) => req.user?.role === 'admin', // ✅ Only admin can upload
//     update: ({ req }) => req.user?.role === 'admin', // ✅ Only admin can update
//     delete: ({ req }) => req.user?.role === 'admin', // ✅ Only admin can delete
//   },
//   upload: {
//     staticURL: '/media',
//     staticDir: 'media',
//     adminThumbnail: 'thumbnail',
//     mimeTypes: ['image/*', 'video/*'],
//   },
//   admin: {
//     useAsTitle: 'filename',
//     defaultColumns: ['filename', 'alt', 'mimeType', 'filesize', 'updatedAt'],
//   },
//   fields: [
//     {
//       name: 'alt',
//       type: 'text',
//       required: true,
//       localized: true,
//       admin: {
//         description: 'Alt text for accessibility and SEO',
//       },
//     },
//     {
//       name: 'caption',
//       type: 'text',
//       localized: true,
//     },
//     {
//       name: 'focalPoint',
//       type: 'point',
//       admin: {
//         description: 'Define the focal point for cropping',
//       },
//     },
//   ],
// }

// module.exports = Media;

const Media = {
  slug: 'media',
  access: {
    // ✅ Anyone can read/fetch media
    read: () => true,

    // ✅ Anyone can create/upload media
    create: () => true,

    // ✅ Anyone can update existing media
    update: () => true,

    // ✅ Anyone can delete media
    delete: () => true,
  },
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*', 'video/*'],
  },
  admin: {
    useAsTitle: 'filename',
    defaultColumns: ['filename', 'alt', 'mimeType', 'filesize', 'updatedAt'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      localized: true,
      admin: {
        description: 'Alt text for accessibility and SEO',
      },
    },
    {
      name: 'caption',
      type: 'text',
      localized: true,
    },
    {
      name: 'focalPoint',
      type: 'point',
      admin: {
        description: 'Define the focal point for cropping',
      },
    },
  ],
}

module.exports = Media;

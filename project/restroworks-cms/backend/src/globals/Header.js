const Header = {
  slug: 'header',
  label: 'Header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      type: 'group',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'alt',
          type: 'text',
          localized: true,
          defaultValue: 'WorkManage Logo',
        },
      ],
    },
    {
      name: 'navigation',
      type: 'array',
      maxRows: 6,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'link',
          type: 'text',
          required: true,
        },
        {
          name: 'newTab',
          type: 'checkbox',
          defaultValue: false,
        },
      ],
    },
    {
      name: 'cta',
      type: 'group',
      fields: [
        {
          name: 'primaryButton',
          type: 'group',
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
              localized: true,
            },
            {
              name: 'link',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'secondaryButton',
          type: 'group',
          fields: [
            {
              name: 'text',
              type: 'text',
              localized: true,
            },
            {
              name: 'link',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}

module.exports = Header
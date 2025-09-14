const CTA = {
  slug: 'cta',
  labels: {
    singular: 'Call to Action',
    plural: 'Call to Actions',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'highlightText',
      type: 'text',
      localized: true,
      admin: {
        description: 'Text to highlight with gradient color',
      },
    },
    {
      name: 'subtitle',
      type: 'textarea',
      required: true,
      localized: true,
    },
    {
      name: 'primaryCTA',
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
      name: 'secondaryCTA',
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
    {
      name: 'backgroundStyle',
      type: 'select',
      defaultValue: 'gradient',
      options: [
        { label: 'Gradient (Purple/Pink)', value: 'gradient' },
        { label: 'Solid Color', value: 'solid' },
        { label: 'Image Background', value: 'image' },
      ],
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (data) => data.backgroundStyle === 'image',
      },
    },
    {
      name: 'features',
      type: 'array',
      maxRows: 3,
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          localized: true,
        },
      ],
      admin: {
        description: 'Small feature highlights (e.g., "30-day free trial")',
      },
    },
  ],
}

module.exports = CTA

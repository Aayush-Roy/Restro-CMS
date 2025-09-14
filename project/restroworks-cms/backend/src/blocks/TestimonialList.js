const TestimonialList = {
  slug: 'testimonialList',
  labels: {
    singular: 'Testimonial List',
    plural: 'Testimonial Lists',
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
      type: 'textarea',
      localized: true,
    },
    {
      name: 'testimonials',
      type: 'relationship',
      relationTo: 'testimonials',
      hasMany: true,
      required: true,
      admin: {
        description: 'Select testimonials to display',
      },
    },
    {
      name: 'layout',
      type: 'select',
      defaultValue: 'grid',
      options: [
        { label: 'Grid (3 columns)', value: 'grid' },
        { label: 'Carousel', value: 'carousel' },
        { label: 'Masonry', value: 'masonry' },
      ],
    },
    {
      name: 'showRatings',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'showAvatars',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}

module.exports = TestimonialList
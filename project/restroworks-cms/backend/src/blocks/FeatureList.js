const FeatureList = {
  slug: 'featureList',
  labels: {
    singular: 'Feature List',
    plural: 'Feature Lists',
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
      name: 'features',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 6,
      fields: [
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
          ],
        },
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
          name: 'color',
          type: 'select',
          defaultValue: 'blue',
          options: [
            { label: 'Blue', value: 'blue' },
            { label: 'Green', value: 'green' },
            { label: 'Purple', value: 'purple' },
            { label: 'Pink', value: 'pink' },
            { label: 'Yellow', value: 'yellow' },
            { label: 'Orange', value: 'orange' },
          ],
        },
      ],
    },
    {
      name: 'layout',
      type: 'select',
      defaultValue: 'grid',
      options: [
        { label: 'Grid (3 columns)', value: 'grid' },
        { label: 'List (vertical)', value: 'list' },
        { label: 'Carousel', value: 'carousel' },
      ],
    },
  ],
}

module.exports = FeatureList
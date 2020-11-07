module.exports = {
  presets: [
    [
      '@vue/app',
      {
        useBuiltIns: 'entry'
      }
    ],
    [
      '@babel/preset-env',
      {
        'modules': false
      }
    ]
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ]
}

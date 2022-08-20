module.exports = {
  globPatterns: ['**/*.{js,css,html,jpg,png,svg,webp,json}'],
  modifyURLPrefix: {'_site/': ''},
  runtimeCaching: [{
    urlPattern: /\//,
    handler: 'NetworkFirst',
  }],
  offlineGoogleAnalytics: true,
  globDirectory: '_site',
  swDest: '_site/sw.js',
};

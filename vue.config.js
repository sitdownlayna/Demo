module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // @默认src
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}

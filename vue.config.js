module.exports ={
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
       //已经配过的：  '@': 'src',
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network', 
        'views': '@/views', 
      }
    }
  }
}
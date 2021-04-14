module.exports = {
  configureWebpack: {
    resolve:{
      alias:{
        //已默认配置@为src的别名
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}

module.exports ={
  pages: {
    index: {
      //入口
      entry: 'src/main.js',
    },
  },
    lintOnSave:false, //关闭语法检查
    //开始代理服务器
    // 方式一
    // devServer: {
    //   proxy: 'http://localhost:5000'
    // }
    // 方式二
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:5000',
          pathRewrite:{'^/api':''}  //将以api开头的替换为''
          // ws: true, //支持websocket
          // changeOrigin: true //用于控制请求头中的host标准
        },
        
        '/demo': {
          target: 'http://localhost:5001',
          pathRewrite:{'^/demo':''}  //将以api开头的替换为''
          // ws: true, //支持websocket
          // changeOrigin: true //用于控制请求头中的host标准
        },
      }
    }
  }
  
const path = require('path');

function resolveSrc(_path) {
  return path.join(__dirname, _path);
}
// vue.config.js
module.exports = {
  devServer: {
    // 프록시 설정
    //proxy : "https://startroad.me/api"
    /*
    proxy : {
      target : "https://startroad.me"
    },
    */
    
    proxy: {
        // 프록시 요청을 보낼 api의 시작 부분
        '/api': {
            // 프록시 요청을 보낼 서버의 주소
            //target: 'https://c2e79960-228b-4a11-8a9c-5f9973cd9f68.mock.pstmn.io',
            target: 'https://startroad.me',
            changeOrigin : true,

        }
    }
    
    
  },
  lintOnSave: true,
  configureWebpack: {
    // Set up all the aliases we use in our app.
    resolve: {
      alias: {
        assets: resolveSrc('src/assets')
      }
    }
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};

const path = require('path')
const debug = process.env.NODE_ENV !== 'production'
module.exports = {
    baseUrl: './', //vueConf.baseUrl, // 根域上下文目录
    outputDir: 'dist', // 构建输出目录
    assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
    lintOnSave: true, // 是否开启eslint保存检测，有效值：ture | false | 'error'
    runtimeCompiler: true, // 运行时版本是否需要编译
    transpileDependencies: [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
    productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
    configureWebpack: (config) => {
        //webpack配置，值位对象时会合并配置，为方法时会改写配置
        if(debug){
            //开发环境配置
        }
    },
    chainWebpack: (config) => {
        //webpack链接API，用于生成和修改webpack配置
        if(debug){
            //本地开发配置
        }else{
            //生产开发配置
        }
},
parallel: require('os').cpus().length > 1,//构建时开启多进程处理babel编译
    pluginOptions:{
        //第三方插件配置
    },
    devServer:{
        open:true,
        host:'localhost',
        port:8080,
        https:false,
        hotOnly:false,
        proxy:{
            //配制跨域
            '/api':{
                target:'http://localhost:5000/api/',
                ws:true,
                changOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        },
        before:app=>{}
    }
};
const path = require('path');
module.exports = {
    mode: 'production', // 配置目前的打包环境是生产还是开发
    entry: './src/index.js', // 入口定义
    output: {
        filename: 'bundle.js', // 出口文件
        path:path.resolve(__dirname,'dist') // 借助node的核心模块path，就可以生成bundle的绝对路径了
    }
}
const path = require('path');
module.exports = {
    mode: 'development', // 配置目前的打包环境是生产还是开发
    entry: './src/index.js', // 入口定义
    module:{
        rules: [
            {
                test: /\.(jpg|png|gif)$/, // 正则匹配文件
                use: {
                    loader: 'url-loader',
                    options:{
                        name: '[name]_[hash:5].[ext]', // 输出原图的名字 + hash值 + 后缀
                        outputPath: 'images/', // 输出图片的单独文件夹路径
                        limit: 2048 // 如果图片的大小小于2kb会生成base64字符串
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'] // npm install sass-loader node-sass -D
            }
        ]
    },
    output: {
        filename: 'bundle.js', // 出口文件
        path:path.resolve(__dirname,'dist') // 借助node的核心模块path，就可以生成bundle的绝对路径了
    }
};
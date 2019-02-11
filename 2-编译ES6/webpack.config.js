module.exports = {
    entry: {
        app: './app.js'
    },

    output: {
        filename: '[name].[hash:8].js'
    },

    module:{
        rules:[
            {
                test: /\.js$/,           // 使用正则匹配的文件名
                use: {
                    loader: 'babel-loader' // 使用的loader
                },
                exclude: '/node_modules/' // 需要排除的文件
            }
        ]
    }
}
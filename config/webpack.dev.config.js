const config = require('../webpack.config')
const webpack = require('webpack')

config.mode = 'development'
config.output.publicPath = '/'
config.devServer = {
    contentBase: './dist',
    port: 8000,
    hot:true
}

config.plugins = [
    ...config.plugins,
    new webpack.HotModuleReplacementPlugin()
]


module.exports = config
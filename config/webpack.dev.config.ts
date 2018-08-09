import * as webpack from 'webpack';
import * as merge from 'webpack-merge';
import BaseConfig from '../webpack.config'

const config = merge(BaseConfig, {
    mode: 'development',
    output: {
        publicPath: '/'
    },
    devServer: {
        contentBase: './dist',
        port: 8000,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
} as webpack.Configuration)

export default config;
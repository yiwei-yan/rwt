const config = require('../webpack.config')
const webpack=require('webpack');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

config.mode = 'production';
config.plugins = [
	...config.plugins,

	new webpack.DefinePlugin({
		"process.env":{
			NODE_ENV:JSON.stringify('production')
		}
	}),
	new CompressionWebpackPlugin({
		asset: '[path].gz[query]',
		algorithm: 'gzip',
		test: /\.(js|css)/,
		threshold: 1024,
        minRatio: 0.8
	})
]

module.exports = config
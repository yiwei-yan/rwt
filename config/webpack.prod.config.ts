import * as webpack from 'webpack';
import * as CompressionWebpackPlugin from 'compression-webpack-plugin';
import * as merge from 'webpack-merge';
import BaseConfig from '../webpack.config';

const config = merge(BaseConfig, {
    mode: 'production',
    plugins: [
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
})

export default config;
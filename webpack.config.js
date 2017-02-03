var _ = require('lodash');
var path = require('path');
var webpack = require('webpack');
var minimist = require('minimist');
var chalk = require('chalk');

module.exports = {
	devtool: 'eval',
	entry: {
		bundle: [
			'react-hot-loader/patch',
			'webpack-dev-server/client?http://localhost:3000',
			'webpack/hot/only-dev-server',
			'./src/entry'
		]
	},
	output: {
		filename: 'widgets.js',
		path: path.join(__dirname, 'dist'),
		publicPath: '/static/'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [{
			// JS/JSX
			test: /\.jsx?$/,
			loaders: ['babel-loader'],
			include: path.join(__dirname, 'src')
		}, {
			// CSS modules
			test: /\.s?css$/,
			loader: 'style-loader!css-loader?modules&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader',			include: path.join(__dirname, 'src'),
		}, {
			// JSON
			test: /\.json$/,
			loader: 'json-loader'
		}]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	postcss: [],
	node: {
		fs: "empty"
	}
};

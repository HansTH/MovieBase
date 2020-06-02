const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'build.js',
		path: path.resolve(__dirname, 'build'),
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(svg|png|jpg)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[contentHash].[ext]',
						outputPath: 'img',
					},
				},
			},
		],
	},
	devServer: {
		historyApiFallback: true,
		port: '3000',
		open: 'Google chrome',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
		}),
	],
};

module.exports = {
    devtool: 'source-map',
	devServer: {
		contentBase: './assets'
	},
	entry: './app/app.js',
	module: {
		loaders: [
			{
                test: /\.css$/,
                loader: "style-loader!css-loader" },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loaders: ['react-hot','babel-loader']
			}
		]
	},
	output: {
		path: __dirname + '/assets',
		filename: 'bundle.js'
	}
};
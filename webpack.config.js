let webpack = require('webpack');
let path = require('path')

module.exports = {
	entry: "./src/main.js",
	output : {
		path: path.resolve(__dirname, "./dist"),
		publicPath: "/dist",
		filename: "bundle.js"
	}
	module: {
	  rules: [
	    {
	      test: /\.styl$/,
	      loader: ['style-loader', 'css-loader', 'stylus-loader']
	    }
	  ]
	}
}


const path = require('path');

module.exports = {
	entry: {
        main: './js/main.js',
    },
	//devtool: false,
	devtool: "source-map",
	output: {
        path: path.resolve(__dirname, './dist'),
    },
	module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
					options: {
						presets: ['@babel/preset-env'],
						plugins: []
					}
                }
            }
        ]
    }
};
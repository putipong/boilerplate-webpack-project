/**
 * Created by mattputipong on 12/10/17.
 */

'use strict';

import webpack from 'webpack';
import Merge from 'webpack-merge';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import CommonConfig from './webpack.base.config';

export default Merge( CommonConfig, {
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		new webpack.LoaderOptionsPlugin( {
			minimize: false,
			debug: false
		} ),
		new webpack.optimize.ModuleConcatenationPlugin(),
		new UglifyJsPlugin()
	]
} );
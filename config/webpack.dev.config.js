/**
 * Created by mattputipong on 12/10/17.
 */

'use strict';

import { resolve } from 'path';
import Merge from 'webpack-merge';
import CommonConfig from './webpack.base.config';

export default Merge( CommonConfig, {
	context: resolve( __dirname, '../src' ),
	devServer: {
		compress: true,
		port: 8080,
		publicPath: '/',
		contentBase: './dist'
	}
} );
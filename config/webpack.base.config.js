/**
 * Created by mattputipong on 12/10/17.
 */

'use strict';

import { resolve } from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const
	extractSass    = new ExtractTextPlugin( './css/main.scss' ),
	extractAssests = new CopyWebpackPlugin( [
		{
			from: './lib/leaflet/images/',
			to: '../dist/images/'
		},
		{
			from: './lib/favicon/',
			to: '../dist/favicon/'
		}
	] ),
	extractHtml    = new HtmlWebpackPlugin( {
		template: 'index.html',
		filename: '../dist/index.html'
	} );

export default {
	context: resolve( __dirname, '../src' ),
	entry: {
		app: [ './js/index.js' ]
	},
	output: {
		path: resolve( __dirname, '../dist/' ),
		filename: 'js/bundle.js',
		publicPath: './'
	},
	module: {
		rules: [
			{
				test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
				use: {
					loader: 'file-loader',
					options: {
						outputPath: 'images/',
						publicPath: './',
						name: '[name].[ext]'
					}
				}
			},
			{
				test: /\.(ttf|woff|woff2|eot)$/,
				use: {
					loader: 'file-loader?publicPath=../&name=/fonts/[name].[ext]'
				}
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' }
				]
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: function() {
								return [
									require( 'precss' ),
									require( 'autoprefixer' )
								];
							}
						}
					},
					{
						loader: 'sass-loader'
					}
				]
			},
			{
				test: /\.js/,
				loader: 'babel-loader',
				options: {
					ignore: resolve( __dirname, 'node_modules/' )
				}
			}
		]
	},
	plugins: [
		extractSass,
		extractAssests,
		extractHtml
	]
};
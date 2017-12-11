/**
 * Created by mattputipong on 12/10/17.
 */

'use strict';

export default function( env ) {
	return require( `./config/webpack.${ env }.config.js` );
}
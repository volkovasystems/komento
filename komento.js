"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "komento",
			"path": "komento/komento.js",
			"file": "komento.js",
			"module": "komento",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/komento.git",
			"test": "komento-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Parses comments inside javascript functions and converts them to string.
	@end-module-documentation

	@include:
		{
			"handlebar": "handlebars",
			"harden": "harden",
			"protype": "protype",
			"realign": "realign",
			"stuffed": "stuffed",
			"truly": "truly"
		}
	@end-include
*/

const handlebar = require( "handlebars" );
const harden = require( "harden" );
const protype = require( "protype" );
const realign = require( "realign" );
const stuffed = require( "stuffed" );
const truly = require( "truly" );

const komento = function komento( comment, option ){
	/*;
		@meta-configuration:
			{
				"comment:required": "function",
				"option": "object"
			}
		@end-meta-configuration
	*/

	if( !protype( comment, FUNCTION ) ){
		throw new Error( "invalid function" );
	}

	comment = ( comment.toString( ).match( komento.MULTIPLE_LINE_COMMENT_PATTERN ) || [ ] )[ 1 ] ||
		( comment.toString( ).match( komento.SINGLE_LINE_COMMENT_PATTERN ) || [ ] )[ 1 ];

	comment = realign( comment );

	if( truly( comment ) && protype( option, OBJECT ) && stuffed( object ) ){
		comment = handlebar.compile( comment )( option );
	}

	return comment;
};

harden
	.bind( komento )( "MULTIPLE_LINE_COMMENT_PATTERN",
		/^function\s*\w*\([^\(\)]*\)\s*\{\s*[\s\S]*\s*\/\*\!?([\s\S]*|.*|[^]*)\*\/\S*\s*\}$/m )
	.harden( "SINGLE_LINE_COMMENT_PATTERN",
		/^function\s*\w*\([^\(\)]*\)\s*\{\s*[\s\S]*\s*\/\*\!?([\s\S]*|.*|[^]*)\*\/\S*\s*\}$/ );

module.exports = komento;

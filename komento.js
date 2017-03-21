"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
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
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/komento.git",
			"test": "komento-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Parses comments inside javascript functions and converts them to string.

		Support strings and functions returning strings.
	@end-module-documentation

	@include:
		{
			"depher": "depher",
			"falzy": "falzy",
			"handlebar": "handlebars",
			"protype": "protype",
			"realign": "realign",
			"stringe": "stringe",
			"stuffed": "stuffed",
			"truly": "truly",
			"wichevr": "wichevr"
		}
	@end-include
*/

const depher = require( "depher" );
const falzy = require( "falzy" );
const handlebar = require( "handlebars" );
const protype = require( "protype" );
const realign = require( "realign" );
const stringe = require( "stringe" );
const stuffed = require( "stuffed" );
const truly = require( "truly" );
const wichevr = require( "wichevr" );

const MULTIPLE_LINE_COMMENT_PATTERN = /^function\s*\w*\([^\(\)]*\)\s*\{\s*[\s\S]*\s*\/\*\!?([\s\S]*|.*|[^]*)\*\/\S*\s*\}$/m;
const SINGLE_LINE_COMMENT_PATTERN = /^function\s*\w*\([^\(\)]*\)\s*\{\s*[\s\S]*\s*\/\*\!?([\s\S]*|.*|[^]*)\*\/\S*\s*\}$/;

const komento = function komento( comment, option ){
	/*;
		@meta-configuration:
			{
				"comment:required": [
					"function",
					"string"
				],
				"option": "object"
			}
		@end-meta-configuration
	*/

	if( falzy( comment ) || !protype( comment, FUNCTION + STRING ) ){
		throw new Error( "invalid comment" );
	}

	let string = "";
	if( protype( comment, STRING ) ){
		string = comment;

	}else if( protype( comment, FUNCTION ) && falzy( comment( ) ) ){
		string = ( stringe( comment ).match( MULTIPLE_LINE_COMMENT_PATTERN ) || [ ] )[ 1 ] ||
			( stringe( comment ).match( SINGLE_LINE_COMMENT_PATTERN ) || [ ] )[ 1 ];

	}else if( protype( comment, FUNCTION ) ){
		string = wichevr( comment( ), string );
	}

	string = string || "";

	string = realign( string );

	option = depher( arguments, OBJECT, { } );

	if( truly( string ) && stuffed( option ) ){
		string = handlebar.compile( string )( option );
	}

	return string;
};

module.exports = komento;

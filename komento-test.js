const assert = require( "assert" );
const komento = require( "./komento.js" );

assert.equal( komento( function procedure( ){
	return "hello world";
} ), "hello world" );

assert.equal( komento( function procedure( ){
	/*!
		hello world yeah
	*/
} ), "hello world yeah" );

assert.equal( komento( "hello {{ world }}", { "world": "yeah" } ), "hello yeah" );
assert.ok( komento( function( ){
	return "hello world";
} ) );

console.log( "ok" );

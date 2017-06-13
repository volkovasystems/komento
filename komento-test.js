const assert = require( "assert" );
const komento = require( "./komento.js" );

assert.equal( komento( function procedure( ){
	return "hello world";
} ), "hello world", "should return 'hello world'" );

assert.equal( komento( function procedure( ){
	/*!
		hello world yeah
	*/
} ), "hello world yeah", "should return 'hello world yeah'" );

assert.equal( komento( "hello {{ world }}", { "world": "yeah" } ), "hello yeah", "should return 'hello yeah'");

assert.ok( komento( function( ){
	return "hello world";
} ) );

console.log( "ok" );

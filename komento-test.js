
const komento = require( "./komento.js" );

console.log( komento( function procedure( ){
	return "hello world";
} ) );

console.log( komento( function procedure( ){
	/*!
		hello world yeah
	*/
} ) );

console.log( komento( "hello {{ world }}", { "world": "yeah" } ) );

console.log( komento( function( ){ } ) );

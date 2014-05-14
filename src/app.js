define([ 'myLib' ], function( myLib ) {
    if ( document.readyState === 'complete' ) {
        myLib();
    } else {
        window.addEventListener( 'load', myLib, false );
    }
});
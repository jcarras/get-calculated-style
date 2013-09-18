( function( window ) {

  'use strict';

  function getCalculatedStyle( el, propName ) {
    return el.currentStyle
      ? el.currentStyle[propName]
      : window.getComputedStyle
      ? document.defaultView.getComputedStyle(el, null).getPropertyValue(propName)
      : null;
  }

  // transport
  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( function() {
      return getCalculatedStyle;
    });
  } else {
    // browser global
    window.getCalculatedStyle = getCalculatedStyle;
  }

})( window );

( function( window ) {

  'use strict';

  /**
   * @getCalculatedStyle function
   * @description Returns calculated style property of a DOM element.
   * @param {element} DOM element to query.
   * @returns {string} calculated style property you are looking for.
   */
  function getCalculatedStyle( el, propName ) {
    var styleVal = el.currentStyle
      ? el.currentStyle[propName]
      : window.getComputedStyle
      ? document.defaultView.getComputedStyle(el, null).getPropertyValue(propName)
      : null;
    if(styleVal){
      return parseFloat(styleVal.replace('px', ''));
    }
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

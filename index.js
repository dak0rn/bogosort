/**
 * Bogosort for JavaScript.
 *
 * Author:	Daniel Koch <daniel@suitsoft.eu>
 * Creation:	22 Nov 2015
 * Updated:	Time-stamp: <2015-11-23 06:35:17 dak0rn>
 * Version:	1.0 - Initial release
 *		2.0 - Complete rewrite
 *
 */

// Universal Module Definition
// see: https://github.com/umdjs/umd/blob/master/templates/returnExports.js
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.returnExports = factory();
    }
}(this, function () {

    /*
     * Helper functions
     */
    //+ sorted :: [Number] -> Boolean
    var sorted = function(array) {
        var i = array.length;
        while( --i )
            if( array[i - 1] > array[i] )
                return false;

        return true;
    };

    //+ random :: Number -> Number
    var random = function(max) {
        return Math.floor( Math.random() * ( max + 1 ) );
    };

    //+ shuffle :: [Number] -> [Number]
    var shuffle = function(array) {
        var dest = array.slice();
        var index = dest.length;
        var targetIndex;
        var delta;

        while( --index ) {
            targetIndex = random(index);

            delta = dest[targetIndex];
            dest[targetIndex] = dest[index];
            dest[index] = delta;
        }

        return dest;
    };


    //+ _bogosort :: [Number] -> Object
    var _bogosort = function(array) {
        var data = {
            result: void 0,
            rounds: 0
        };

        if( ! array )
            return data;

        if( ! array.length ) {
            data.result = [];
            return data;
        }

        data.result = array;
        while( ! sorted( data.result ) ) {
            data.result = shuffle( data.result );
            data.rounds++;
        }

        return data;
    };


    /**
     * Bogosort function that returns a
     * sorted version of the given array.
     *
     */
    var bogosort = function(array) {
        return _bogosort(array).result;
    };

    /**
     * Bogosort function returning an object with the
     * sorted array and some metrics.
     *
     */
    bogosort.measure = _bogosort;


    return bogosort;

}));

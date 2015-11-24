/**
 * Bogosort usage example.
 *
 * Author:	Daniel Koch <daniel@suitsoft.eu>
 * Creation:	23 Nov 2015
 * Updated:	Time-stamp: <2015-11-24 05:50:07 dak0rn>
 * Version:	1.0 - Initial release
 *
 */
var bogosort = require("./bogosort");

//+ random :: Number -> Number
var random = function(e) { return Math.floor( Math.random() * (e+1) ); };

//+ sortArray :: [Number] -> ()
var sortArray = function(array) {
    // Meta data
    var sorted;

    console.log('Going to sort');
    console.log(array);
    
    sorted = bogosort.measure(array);

    console.log('Sorted');
    console.log(sorted.result);
    console.log('Bogosort needed ', sorted.rounds, ' attempts');
    console.log('--------\n\n');
};

var source;
var size;
var index;

for( size = 1; size < 10; size++ ) {

    source = new Array(size);
    
    for( index = 0; index < size; index++ )
        source[index] = random(10);

    sortArray(source);
}

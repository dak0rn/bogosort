# Bogosort

This (stupid) package for node.js implements the well known BogoSort algorithm.

## The algorithm

Bogosort (also known as *Monkeysort* or *Stupidsort*) is a quite simple but stupid
sorting algorithm that is not used in production.

It shuffles a list of values as long as they are not sorted:

    // Input: Array
    while( !sorted(Array) )
        shuffle(Array)

### Sorted

The package comes with a method that checks if an array is sorted.
An array is sorted if the number at `i` is lower than the number at `i+1`
for all numbers in the array (okay, except for the last one).
The implementation is quite easy:

    // Input: Array of length n
    for i from 0 to n - 2
        if Array[i] > Array[i+1]
            return false


### Shuffle

Shuffling is not as easy as many people think. I have chosen the Fisher-Yates-Algorithm
to shuffle the array.

[http://en.wikipedia.org/wiki/Fisher–Yates_shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle)

Pseudo code follows:

    // Input: Array of length n
    for i from n − 1 to 1 do
           j = random from 0 to i
           exchange a[j] and a[i]


## Usage example

    var bogo = require("bogosort")();

    var a = [1,2,3,4,5,6,7,8,9];
    console.log(a.shuffle());
    console.log("Rounds: ", a.bogosort());

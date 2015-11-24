# Bogosort

The well known Bogosort sorting algorithm for JavaScript

## The algorithm


Bogosort, also known as *Monkeysort* or *Stupidsort* is a quite simple sorting
algorithm rarely used in production.

The idea is to shuffle a collection as long as it is not sorted.

```javascript
// Input: Array
while( !sorted(Array) )
    shuffle(Array)
```

### Shuffle

Bogosort uses a modern variant of the [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle), also known as the *Durstenfeld shuffle algorithm*.
It also relies on the [broken Math.random()](https://www.reddit.com/r/javascript/comments/3th8mr/mathrandom_is_broken_in_v8chromenode/).

```javascript
// Input: Array of length n
for i from n − 1 to 1 do
    j = random from 0 to i
    exchange a[j] and a[i]
```

## API

Bogosort is exposed via [Universal Module Definition (UMD)](https://github.com/umdjs/umd). Thus, you can use it
in your browser, in a require.js environment as well as in node or any bundled project. At also comes
with a minified version and a source map.

Bogosort exposes a function `bogosort()` that takes an array of numbers and returns a sorted copy of it. The original array
will not be mutated.

```javascript
var bogosort = require('bogosort');

var sorted = bogosort([6, 3, -1, 19, 33, 12]);
```

The `bogosort()` function also has a function property `bogosort.measure()` that returns an object containing
the sorted collection as well as number of rounds it took to sort it.

```javascript
var bogosort = require('bogosort');

var sorted = bogosort.measure([8, 3, 99, -12, -4, 8, 9, 11, 183, 12, 33]);

console.log('Sorted collection: ', sorted.result);
console.log('Rounds it took: ', sorted.rounds);
```

The [example.js](https://github.com/dak0rn/bogosort/blob/master/example.js) file contains an example of that.

## Building it

To build it yourself just checkout the repository and run `npm install`.
All important commands are run using `npm`.

```shell
# Run tests
npm test

# Run the example
npm start

# Build the minified version
npm run build
```

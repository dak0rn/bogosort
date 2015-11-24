/**
 * Bogosort tests.
 *
 * Author:	Daniel Koch <daniel@suitsoft.eu>
 * Creation:	22 Nov 2015
 * Updated:	Time-stamp: <2015-11-24 05:50:22 dak0rn>
 * Version:	1.0 - Initial release
 *
 */
var expect = require('chai').expect;

var bogosort = require('../bogosort');

/*
 * Utility functions
 */
//+ arrayEquals :: [Number] -> [Number] -> Boolean
var arrayEquals = function(coll1, coll2) {
    if( ! coll1 || ! coll2 )
        return false;

    if( coll1.length !== coll2.length )
        return false;

    var i = coll1.length;

    while( i-- )
        if( coll1[i] !== coll2[i] )
            return false;

    return true;
};

/*
 * Tests
 */
describe('Bogosort', function() {

    it('should be a function', function() {
        expect( bogosort ).to.be.a('function');
    });

    it('should accept one argument', function() {
        expect( bogosort.length ).to.equal(1);
    });

    (function() {

        var tests = [
            { src: [], exp: [] },
            { src: [ 6 ], exp: [ 6 ] },
            { src: [ 8, 5 ], exp: [ 5, 8 ] },
            { src: [ 6, 2, 12 ], exp: [ 2, 6, 12 ] },
            { src: [ -1, 19, 3, 11 ], exp: [ -1, 3, 11, 19 ] }
        ];

        tests.forEach( function(test) {

            it('should sort [' + test.src.join(', ') + '] correctly', function() {
                var e = bogosort(test.src);
                var s = arrayEquals(test.exp, e);
                expect(s).to.be.true;
            });

        });

    })();

    it('should return undefined if given null', function() {
        expect( bogosort(null) ).to.equal(void 0);
    });

    it('should return undefined if given undefined', function() {
        expect( bogosort(void 0) ).to.equal(void 0);
    });

    it('should return undefined if invoked without parameters', function() {
        expect( bogosort() ).to.equal(void 0);
    });

    it('should return an empty array if given an empty array', function() {
        var e = bogosort([]);

        expect( e ).to.be.an.array;
        expect( e.length ).to.equal(0);
    });


    describe('.measure', function() {

        it('should be a function', function() {
            expect( bogosort.measure ).to.be.a('function');
        });

        it('should accept one argument', function() {
            expect( bogosort.measure.length ).to.equal(1);
        });


        it('should return undefined as result if given null', function() {
            var e = bogosort.measure(null);

            expect( e ).to.be.an.object;
            expect( e.rounds ).to.equal(0);
            expect( e.result ).to.equal(void 0);
        });

        it('should return undefined if given undefined', function() {
            var e = bogosort.measure(void 0);

            expect( e ).to.be.an.object;
            expect( e.rounds ).to.equal(0);
            expect( e.result ).to.equal(void 0);
        });

        it('should return undefined if invoked without parameters', function() {
            var e = bogosort.measure();

            expect( e ).to.be.an.object;
            expect( e.rounds ).to.equal(0);
            expect( e.result ).to.equal(void 0);
        });

        it('should return an empty array if given an empty array', function() {
            var e = bogosort.measure([]);

            expect( e ).to.be.an.object;
            expect( e.rounds ).to.equal(0);
            expect( e.result ).to.be.an.array;
            expect( e.result.length ).to.equal(0);
        });

        (function() {

            var tests = [
                { src: [], exp: [] },
                { src: [ 6 ], exp: [ 6 ] },
                { src: [ 8, 5 ], exp: [ 5, 8 ] },
                { src: [ 6, 2, 12 ], exp: [ 2, 6, 12 ] },
                { src: [ -1, 19, 3, 11 ], exp: [ -1, 3, 11, 19 ] }
            ];

            tests.forEach( function(test) {

                it('should sort [' + test.src.join(', ') + '] correctly', function() {
                    var e = bogosort.measure(test.src);

                    expect( e ).to.be.an.object;

                    var s = arrayEquals(test.exp, e.result);
                    expect(s).to.be.true;
                    expect(e.rounds).to.be.above( (test.src.length > 1 ? 0 : -1)  );
                });

            });

        })();



    });
});

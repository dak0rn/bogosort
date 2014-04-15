/**
 * Copyright 2014 Daniel Koch <danielk@foocode.de>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */


function inj(w) {

    function random(min, max){
        return Math.floor(min+(max-min)*Math.random());
    }

    /**
     * Swaps two elements
     * @param {int} f       Index #1
     * @param {int} t       Index #2
     * @returns {object}    `this`
     */
    w.swap = function(f, t){
        var tmp = this[f];
        this[f] = this[t];
        this[t] = tmp;

        return this;
    }

    // Fisher-Yates-Algorithm to shuffle the array
    /**
     * Shuffles in-place
     * @returns {object}    `this`
     */
    w.shuffle = function() {
        for( var i = this.length-1; i > 0; i-- )
            this.swap(i, random(0, i) );

        return this;
    };

    /**
     * Checks if (the array) is sorted
     * @returns {boolean}   `true` if sorted. Self explanatory.
     */
    w.sorted = function(){
        for(var i = 0; i < this.length; i++){
            if(this[i] > this[i+1])
                return false;
        }
        return true;
    }

    /**
     * Yes, the BogoSort algorithm.
     * Tries to sort the array, may take some time
     * @returns {int}    Number of rounds
     */
    w.bogosort = function() {
        var i = 0;
        while( !this.sorted() ) {
            this.shuffle();
            ++i;
        }

        return i;
    }
}

/* Expose our stuff */
exports = module.exports = function() { inj(Array.prototype); };
          module.exports.inject = function(what) { what && inj(what); };


/**
 * Gruntfile for bogosort.
 *
 * Author:	Daniel Koch <daniel@suitsoft.eu>
 * Creation:	21 Nov 2015
 * Updated:	Time-stamp: <2015-11-21 20:56:08 dak0rn>
 * Version:	1.0 - Initial release
 *
 */
module.exports = function(grunt) {

    grunt.initConfig({

        babel: {
            options: {
                sourceMap: false,
                presets: ['es2015']
            },
            dist: {
                files: {
                    'index.js': 'src/index.es6'
                }
            }
        },

        umd: {
            build: {
                src: 'index.js'
            }
        },

        clean: {
            build: {
                src: ['index.js']
            }
        }
        
    });

    [
        'grunt-babel',
        'grunt-umd',
        'grunt-contrib-clean'

    ].forEach(grunt.loadNpmTasks.bind(grunt));

    grunt.registerTask('default', ['babel:dist']);
    
};

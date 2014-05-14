module.exports = function( grunt ) {
    'use strict';

    require( 'matchdep' ).filterDev( 'grunt-!(cli)' ).forEach( grunt.loadNpmTasks );

    grunt.initConfig({
        clean: [ 'dist' ],
        requirejs: {
            options: {
                optimize: 'none',
                mainConfigFile: 'require-config.js',
                logLevel: 2
            },
            lib: {
                options: {
                    baseUrl: 'libSrc',
                    include: [ '../node_modules/almond/almond.js', '../require-config', 'lib' ],
                    stubModules: [ 'text' ],
                    wrap: {
                        startFile: 'libSrc/wrap.start',
                        endFile: 'libSrc/wrap.end'
                    },
                    out: 'dist/lib.js'
                }
            },
            app: {
                options: {
                    baseUrl: 'src',
                    include: [ '../node_modules/almond/almond.js', '../require-config', 'app' ],
                    wrap: {
                        startFile: 'src/wrap.start',
                        endFile: 'src/wrap.end'
                    },
                    out: 'dist/app.js'
                }
            }
        }
    });

    grunt.registerTask( 'default', [ 'clean', 'requirejs:lib', 'requirejs:app' ]);
};

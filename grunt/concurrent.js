module.exports = {

    // Task options
    options: {
        limit: 5
    },

    // Dev tasks
    devFirst: [
        'clean:dev'
    ],
    devSecond: [
        'compass:dev',
        'browserify:dev',
        'uglify:dev'
    ],
    devThird: [
        'extract_sourcemap:new'
    ],

    // Production tasks
    prodFirst: [
        'clean:prod'
    ],
    prodSecond: [
        'compass:prod',
        'browserify:prod',
    ],
    prodThird: [
        'uglify:prod',
        'uglify:new'
    ]
};

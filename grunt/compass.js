module.exports = {

    dev: {                   // Target
        options: {              // Target options
            sassDir: 'css',
            cssDir: 'dist/dev/styles'
        }
    },
    prod: {                    // Another target
        options: {
            sassDir: 'css',
            cssDir: 'dist/prod/styles',
            environment: 'production'
        }
    }
};
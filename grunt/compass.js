module.exports = {

    dev: {                   // Target
        options: {              // Target options
            sassDir: 'css',
            cssDir: 'styles'
        }
    },
    prod: {                    // Another target
        options: {
            sassDir: 'css',
            cssDir: 'styles',
            environment: 'production'
        }
    }
};
module.exports = {
    dev: {
        options:      {
  		  	transform:  [ require('grunt-react').browserify ],
  		  	browserifyOptions: {
         	  	debug: true,
              watch: true
     		  }	
  		},
  		src:        'js/app.js',
  		dest:       'dist/dev/js/bundle.js'
    },
    prod: {
            options:      {
            transform:  [ require('grunt-react').browserify ]	
        },
        src:        'js/app.js',
        dest:       'dist/prod/js/bundle.js'
    }
};

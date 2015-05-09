module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        files: {
          'dist/style.css': 'src/assets/sass/style.scss'
        }
      }
    },

    concat: {
      css: {
        src: [
          'bower_components/bootstrap/dist/css/bootstrap.css',
          'dist/style.css'
        ],
        dest: 'dist/style.css'
      },

      js: {
        src: [
          'bower_components/jquery/dist/jquery.js',
          'bower_components/bootstrap/dist/bootstrap.js',
          'bower_components/angular/angular.js',
          'bower_components/ui-router/release/angular-ui-router.js',
          'src/app/**/*.js'
        ],
        dest: 'dist/app.js'
      }
    },

    cssmin: {
      target: {
        files: {
          'dist/style.min.css': ['dist/style.css']
        }
      }
    },

    uglify: {
      options: {
        sourceMap: true
      },
      js: {
        files: {
          'dist/app.min.js': ['dist/app.js']
        }
      }
    },

    watch: {
      css: {
        files: ['app/**/*.scss'],
        tasks: ['build-css-dev']
      },
      js: {
        files: ['src/app/**/*.js'],
        tasks: ['build-js-dev']
      }
    },

    ngAnnotate: {
      options: {
        singleQuotes: 'true'
      },
      files: ['src/**/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-ng-annotate');

  grunt.registerTask('default',['watch']);
  grunt.registerTask('build-dev', ['sass', 'concat', 'ngAnnotate']);
  grunt.registerTask('build', ['sass', 'concat', 'ngAnnotate', 'cssmin', 'uglify']);
  grunt.registerTask('build-css-dev', ['sass', 'concat:css'])
  grunt.registerTask('build-css-prod', ['sass', 'concat:css', 'cssmin'])
  grunt.registerTask('build-js-dev', ['concat:js']);
  grunt.registerTask('build-js-prod', ['concat:js', 'uglify']);

}
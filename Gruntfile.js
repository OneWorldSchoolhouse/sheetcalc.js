module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    clean: ["dist/**/*.js"],

    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js'], //, 'example/**/*.js']
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'dist/<%= pkg.name %>.js',
        dest: 'dist/<%= pkg.name %>.min.js'
      },
      dist:{
        src: 'dist/<%= pkg.name %>.standalone.js',
        dest: 'dist/<%= pkg.name %>.standalone.min.js'
      }
    },

    concat: {
      options: {
        stripBanners: false,
        separator: ';\n',
      },
      build: {
        src: [
          'src/**/*.js'
        ],
        dest: 'dist/<%= pkg.name %>.js',
      },
      dist: {
        src: [
          'node_modules/formulajs/node_modules/jStat/dist/jstat.min.js',
          'node_modules/formulajs/node_modules/numeral/min/numeral.min.js',
          'node_modules/formulajs/node_modules/numeric/numeric-*.min.js',
          'node_modules/formulajs/node_modules/bessel/bessel.js',
          'node_modules/formulajs/dist/formula.min.js',
          'src/**/*.js'
        ],
        dest: 'dist/<%= pkg.name %>.standalone.js',
      },
    },
    watch: {
      files: ['Gruntfile.js','src/**/*'],
      tasks: ['clean', 'jshint','concat:build', 'uglify:build', 'concat:dist', 'uglify:dist'],
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'jshint','concat:build', 'uglify:build']);
  grunt.registerTask('standalone', ['default', 'concat:dist', 'uglify:dist');
  grunt.registerTask('dev', ['default', 'standalone', 'watch']);

};

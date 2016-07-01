

module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt, {
    pattern: [ "grunt-*" ]
  });

  grunt.initConfig({
    pkg: grunt.file.readJSON("./package.json"),

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: "scss",
          src: [ "*scss" ],
          dest: "css",
          ext: ".css"
        }]
      }
    },

    cssmin: {
      target: {
        files: {
          "style.min.css": [ "css/*.css" ]
        }
      }
    },

    watch: {
      gruntfile: {
        files: "Gruntfile.js",
        tasks: [ "jshint:gruntfile" ],
      },
      src: {
        files: [
          "scss/*.scss"
        ],
        tasks: [ "default" ]
      }
    },

  });

  grunt.registerTask("default", [ "sass", "cssmin" ]);

}

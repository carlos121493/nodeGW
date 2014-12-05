/**
 * Created by guow on 2014/12/6.
 */
module.exports = function(grunt){
    grunt.initConfig({
        lint:{
            files:['hello.js']
        }
    });
    grunt.registerTask('default','lint');
    grunt.registerTask('travis','lint');
}

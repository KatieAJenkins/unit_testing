'use strict';

module.exports = {
  greeting: function(name){
    if(arguments.length > 1){
      return 'Only one argument, fool!';
    }
    if(typeof name != 'string'){
      return 'Pass me a string, please!';
    }
  }
};

'use strict';

module.exports = {
  greeting: function greeting(name){
    if(arguments.length > 1){
      return 'Only one argument, fool!';
    }
    if(typeof name !== 'string'){
      return 'Pass me a string, please!';
    }
    return ('Hello, ' + name);
  },

  reduce: function reduce(array){
    if(Array.isArray !== true ){
      return "Please pass in a array!";
    }
  }
};

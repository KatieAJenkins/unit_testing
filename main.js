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
    //array should be an array only
    if(Array.isArray === true ){
      return 'Please pass in a array!';
    }
    //array contains only numbers
    // for(var i = 0; i < array.length; i++){
    //   if(isNaN(array[i])){
    //     return 'Array must contain numbers only';
    //   }
    // }
    var sum = 0;
    for (var i = 0; i < array.length; i++){
      sum += array[i];
    }
    return sum;
  }
};

'use strict';
var expect = require('chai').expect;
var code = require('../main.js');

// Input: name, string (ex: 'Jennie')
//
// Output: greeting that incorporates string input (ex: 'Hello, Jennie')
//
// Test for:
// accepts only one argument
// input is a string
// output is a string
// output is expected string

//start with describe statement with function name
describe('greeting', function(){

  // accepts only one argument
  it('accepts only one arguement', function () {
    expect(code.greeting('Katie' , 'Brando')).to.equal('Only one argument, fool!');

    expect(code.greeting('Brando')).to.not.equal('Only one argument, fool!');
  });

  // input is a string
  it('input is a string', function () {
    expect(code.greeting(9)).to.equal('Pass me a string, please!');

    expect(code.greeting('Katie')).to.not.equal('Pass me a string, please!');
  });

  // output is a string
  xit('output is a string', function () {
    //write assertions
  });

  //2nd argument is callback function
  xit('2nd argument is callback function', function () {
    //write assertions
  });
})

//each case will be an if block --> copy psuedo code to work on one at a time

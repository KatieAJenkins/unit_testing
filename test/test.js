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
  it('output is a string', function () {
    expect(code.greeting('Katie')).to.be.a('string');
  });

  //output is expected string
  it('output is expected string', function () {
    //write assertions
    expect(code.greeting('Katie')).to.equal('Hello, Katie');
  });
})

//each case will be an if block --> copy psuedo code to work on one at a time

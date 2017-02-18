'use strict';
var expect = require('chai').expect;
var code = require('../main.js');

//FUNCTION: GREETING
// Input: name, string (ex: 'Jennie')
//
// Output: greeting that incorporates string input (ex: 'Hello, Jennie')
//
// Test for:
// accepts only one argument
// input is a string
// output is a string
// output is expected string

describe('greeting', function(){

  // accepts only one argument
  it('accepts only one arguement', function () {
    expect(code.greeting('Katie' , 'Brando')).to.equal('Only one argument, fool!');

    expect(code.greeting('Brando')).to.equal('Hello, Brando');
  });

  // input is a string
  it('input is a string', function () {
    // expect(code.greeting(9)).to.be.a('string');
    expect(code.greeting(9)).to.equal('Pass me a string, please!');

    expect(code.greeting('Katie')).to.equal('Hello, Katie');
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

//FUNCTION: REDUCE

// Input: array of integers (ex: [3, 8, 12, 2])

// Output: integer representing sum of all integers in array (ex: 25)

// Test for:
//
// input is an array
// input array includes only numbers
// output is a number
// output is a sum of all elements

describe ('reduce' , function() {

  // input is an array
  it('input is an array', function(){
    // expect(code.reduce(7)).to.be.an('array');
    //call function, define what you want returned
    expect(code.reduce('Katie')).to.equal('Please pass in a array!');

    expect(code.reduce(5)).to.equal('Please pass in a array!');
  });

  // input array includes only numbers
  xit('input array includes only numbers', function(){

  });

  // output is a number
  xit('output is a number', function () {

  });

  // output is a sum of all elements
  xit('output is a sum of all elements', function () {

  });

});

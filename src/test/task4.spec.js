const { assert } = require('chai');
const { describe, it } = require('mocha');
const { utils } = require('../main/homeworks/homework1/task4');

describe('Task 4 Test Suite', () => {
  it('getRandomString returns string', () => {
    assert.isString(utils.getRandomString(), 'Function should return string');
  });

  it('getRandomString returns random string', () => {
    const firstString = utils.getRandomString();
    const secondString = utils.getRandomString();
    assert.notStrictEqual(firstString, secondString, 'Function should return random strings');
  });

  it('getRandomNumer returns number', () => {
    assert.isNumber(utils.getRundomNumer(), 'Function should return number');
  });

  it('getRundomNumer returns random number', () => {
    const firstNumber = utils.getRandomString();
    const secondNumber = utils.getRandomString();
    assert.notStrictEqual(firstNumber, secondNumber, 'Function should return random numbers');
  });
});

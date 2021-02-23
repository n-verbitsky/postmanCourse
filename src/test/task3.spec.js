const { assert } = require('chai');
const { describe, it } = require('mocha');
const { names1, names2, findInterception } = require('../main/homeworks/homework1/task3');

const expectedNames = ['Alex', 'Galina'];

describe('Task 3 Test Suite', () => {
  it('findInterception returns unique names', () => {
    assert.sameDeepMembers(findInterception(names1, names2), expectedNames, 'Array should contain expected names');
  });
});

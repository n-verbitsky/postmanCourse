const { describe, it } = require('mocha');
const { expect } = require('chai');

const obj1 = {
  a: 2,
  b: 2,
  d: 3,
};

const obj2 = {
  a: 2,
  b: 2,
  c: 4,
};

describe('Test', () => {
  it('test objets', () => {
    expect(obj1).to.deep.include(obj2);
  });
});

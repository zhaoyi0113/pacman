const assert = require('assert');
const fileReader = require('../src/file-reader');
const instruction = require('../src/instruction');

describe('test file reader', () => {
  test('test file reader1', () => {
    fileReader.readFile('tests/test1.txt');
    assert.equal(instruction.REPORT(), '0,1,NORTH');
  });

  test('test file reader2', () => {
    fileReader.readFile('tests/test2.txt');
    assert.equal(instruction.REPORT(), '0,0,WEST');
  });

  test('test file reader3', () => {
    fileReader.readFile('tests/test3.txt');
    assert.equal(instruction.REPORT(), '3,3,NORTH');
  });
});

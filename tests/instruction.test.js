const assert = require("assert");

const instruction = require('../src/instruction');

describe('test instruction', () => {
  test('test invalidate location place', () => {
    instruction.PLACE('0,10,NORTH');
    const report = instruction.REPORT();
    assert.equal(report, null);
  });

  test('test place position', () => {
    instruction.PLACE('0,0,NORTH');
    const report = instruction.REPORT();
    assert.equal(report, '0,0,NORTH');
  });

  test('test move', () => {
    instruction.PLACE('0,0,EAST');
    instruction.MOVE();
    assert.equal(instruction.REPORT(), '1,0,EAST');
    instruction.MOVE();
    instruction.MOVE();
    instruction.MOVE();
    assert.equal(instruction.REPORT(), '4,0,EAST');
    instruction.MOVE();
    assert.equal(instruction.REPORT(), '4,0,EAST');
  });

  test('test move to negative', () => {
    instruction.PLACE('0,0,SOUTH');
    instruction.MOVE();
    assert.equal(instruction.REPORT(), '0,0,SOUTH');
  });

  test('test turn', () => {
    instruction.PLACE('1,1,EAST');
    instruction.LEFT();
    assert.equal(instruction.REPORT(), '1,1,NORTH');
    instruction.RIGHT();
    assert.equal(instruction.REPORT(), '1,1,EAST');
  });
})
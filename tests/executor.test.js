const assert = require('assert');

const executor = require('../src/executor');

describe('test executor', () => {
  test('test parse command', () => {
    const parsed = executor.parseCommand('PLACE 0,0,EAST');
    assert.equal(parsed.cmd, 'PLACE');
    assert.equal(parsed.param, '0,0,EAST');
  });

  test('test execute', () => {
    executor.executeCommand('PLACE 0,0,NORTH');
    executor.executeCommand('MOVE');
    assert.equal(executor.executeCommand('REPORT'), '0,1,NORTH');

    executor.executeCommand('PLACE 0,0,NORTH');
    executor.executeCommand('LEFT');
    assert.equal(executor.executeCommand('REPORT'), '0,0,WEST');

    executor.executeCommand('PLACE 1,2,EAST');
    executor.executeCommand('MOVE');
    executor.executeCommand('MOVE');
    executor.executeCommand('LEFT');
    executor.executeCommand('MOVE');
    assert.equal(executor.executeCommand('REPORT'), '3,3,NORTH');
  });
});

const instruction = require('./instruction');

/**
 * define the command parser
 * @param {*} d  the input line
 * @returns object includes the command and its parameters
 */
const parseCommand = (d) => {
  const m = d.match(/^(PLACE |MOVE|LEFT|RIGHT|REPORT)(.*)/);
  if (!m) {
    return null;
  } else {
    return {
      cmd: m[1].trim(),
      param: m[2]
    };
  }
};

/**
 * execute the command
 * @param {*} cmd   the command need to be executed
 */
const executeCommand = (cmd) => {
  const parsed = parseCommand(cmd);
  if (parsed) {
    return instruction[parsed.cmd](parsed.param);
  } else {
    console.error('invalidate input, try again!');
  }
}

module.exports = {
  executeCommand,
  parseCommand
};

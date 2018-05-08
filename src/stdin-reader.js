const instruction = require('./instruction');
const executor = require('./executor');

/**
 * read command from std input
 */
const readStdin = () => {
  const stdin = process.openStdin();
  stdin.on('data', (d) => {
    const str = d.toString('utf8');
    executor.executeCommand(str);
  });
};

module.exports = {
  readStdin
};

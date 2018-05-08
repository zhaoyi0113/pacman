const fs = require('fs');
const instruction = require('./instruction');
const executor = require('./executor');

const readFile = (file) => {
  const data = fs.readFileSync(file, 'utf8');
  const lines = data.split('\n');
  lines.forEach((d) => {
    if(d) {
      executor.executeCommand(d);
    }
  });
};

module.exports = {
  readFile
};

const instruction = require('./src/instruction');
const fileReader = require('./src/file-reader');
const stdinReader = require('./src/stdin-reader');

if (process.argv.length > 2) {
  const file = process.argv[2];
  fileReader.readFile(file);
} else {
  stdinReader.readStdin();
  
}
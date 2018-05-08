# Pacman Simulator

This task is to answer Pacman Simulator code challenge. The code is written in `nodejs` and managed by `yarn`. Test cases are written in `jest`.

## How to run

- Install `yarn` and `nodejs` on your system. 
- Run `yarn install`
- Run `node index.js` to launch Pacman simulator in command line. 
- Run `node index.js FILE_NAME` to run the commands listed in the file `FILE_NAME`. For example, there are some pre-defined test file so you can run `node index.js tests/test1.txt`


## How to test

Run `yarn test` to launch unit tests.

## Code Structure

- all source code is defined under `src` directory. 
- `file-reader` and `stdin-reader` are two modules for reading commands from file or stdin.
- `executor` is the module to parse the commands and run each of them.
- `instruction` defines the movement logic and save the Pacman position.
- All unit tests are under `tests` directory.

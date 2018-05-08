let position = null; // pcman current position

const MAX_X = 4;
const MAX_Y = 4;

/**
 * validate whether the position is on the grid
 *
 * @param {*} position  the position need to be validated
 */
const validate = (position) => {
  return position.x <= MAX_X && position.y <= MAX_Y && position.x >= 0 && position.y >= 0;
}

const DIRECTION = ['EAST', 'SOUTH', 'WEST', 'NORTH'];

module.exports = {
  PLACE: (input) => {
    // place the pcman position
    const match = input.match(/(\d+),(\d+),(NORTH|EAST|WEST|SOUTH)/);
    if (!match) {
      console.error('invalid input');
      return;
    }
    const newPos = {
      x: parseInt(match[1], 10),
      y: parseInt(match[2], 10),
      face: match[3]
    };
    if (validate(newPos)) {
      position = newPos;
    } else {
      console.error('Dont let your pcman move out of the grid!');
    }
  },
  MOVE: () => {
    // move one step on the current direction
    const newPos = Object.assign({}, position);
    switch (newPos.face) {
      case 'NORTH':
        newPos.y += 1;
        break;
      case 'EAST':
        newPos.x += 1;
        break;
      case 'SOUTH':
        newPos.y -= 1;
        break;
      case 'WEST':
        newPos.x -= 1;
        break;
    }
    if (validate(newPos)) {
      position = newPos;
    } else {
      console.error('Dont let your pcman move out of the grid!');
    }
  },
  LEFT: () => {
    let currentIdx = DIRECTION.indexOf(position.face) - 1;
    if (currentIdx < 0) {
      currentIdx = DIRECTION.length - 1;
    }
    position.face = DIRECTION[currentIdx];
  },
  RIGHT: () => {
    let currentIdx = DIRECTION.indexOf(position.face) + 1;
    if (currentIdx >= DIRECTION.length) {
      currentIdx = 0;
    }
    position.face = DIRECTION[currentIdx];
  },
  // get the position report
  REPORT: () => {
    if (!position) {
      return null;
    }
    const report = `${position.x},${position.y},${position.face}`;
    console.log(`Output: ${report}`);
    return report;
  },
};

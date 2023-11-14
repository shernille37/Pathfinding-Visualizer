const NUM_ROWS = 20;
const NUM_COLS = 60;

const coordinates = {
  START_NODE_ROW: 10,
  START_NODE_COL: 10,
  FINISH_NODE_ROW: 10,
  FINISH_NODE_COL: 50,
};

export const createGrid = () => {
  let temp_nodes = [];
  for (let row = 0; row < NUM_ROWS; row++) {
    let currentRow = [];

    for (let col = 0; col < NUM_COLS; col++) {
      currentRow.push(createNode(row, col));
    }
    temp_nodes.push(currentRow);
  }

  return temp_nodes;
};

const createNode = (row, col) => {
  return {
    col,
    row,
    isStart:
      row == coordinates.START_NODE_ROW && col == coordinates.START_NODE_COL,
    isFinish:
      row == coordinates.FINISH_NODE_ROW && col == coordinates.FINISH_NODE_COL,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
  };
};

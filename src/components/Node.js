import React from 'react';
import '../assets/node.css';

import { useState } from 'react';

const Node = ({
  node: { row, col, isStart, isFinish, isVisited, isWall },
  handleMouseDown,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const extraClasses = isFinish
    ? 'node-finish'
    : isStart
    ? 'node-start'
    : isWall
    ? 'node-wall'
    : isVisited
    ? 'node-isVisited'
    : '';

  return (
    <div
      id={`node-${row}-${col}`}
      className={`node ${extraClasses}`}
      onMouseDown={() => handleMouseDown(row, col)}
      onMouseEnter={() => handleMouseEnter(row, col)}
      onMouseUp={() => handleMouseLeave()}
    ></div>
  );
};

export default Node;

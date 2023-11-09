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
    : '';

  const visitedClass = isVisited ? 'node-isVisited' : '';

  return (
    <div
      className={`node ${extraClasses} ${visitedClass}`}
      onMouseDown={() => handleMouseDown(row, col)}
      onMouseEnter={() => handleMouseEnter(row, col)}
      onMouseUp={() => handleMouseLeave()}
    ></div>
  );
};

export default Node;

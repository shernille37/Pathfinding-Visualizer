import React from 'react';
import '../assets/node.css';

const Node = ({ isStart, isFinish }) => {
  const extraClasses = isFinish ? 'node-finish' : isStart ? 'node-start' : '';

  return <div className={`node ${extraClasses}`}></div>;
};

export default Node;

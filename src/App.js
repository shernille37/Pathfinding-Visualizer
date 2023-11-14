import './App.css';
import Header from './components/Header';
import Node from './components/Node';
import { animateVisitedNodes } from './animations/animations';
import { useState, useEffect } from 'react';
import { createGrid } from './grid/grid';

const App = () => {
  const coordinates = {
    START_NODE_ROW: 10,
    START_NODE_COL: 10,
    FINISH_NODE_ROW: 10,
    FINISH_NODE_COL: 50,
  };

  const [nodes, setNodes] = useState([]);

  const [mousePressed, setMousePressed] = useState(false);

  useEffect(() => {
    if (nodes.length == 0) {
      let grid_nodes = createGrid();
      setNodes(grid_nodes);
    }
  }, [nodes]);

  const handleMouseDown = (row, col) => {
    setNodes(handleWallRender(nodes, row, col));

    setMousePressed(true);
  };
  const handleMouseEnter = (row, col) => {
    if (!mousePressed) return;

    setNodes(handleWallRender(nodes, row, col));
  };

  const handleMouseLeave = () => {
    setMousePressed(false);
  };

  const handleWallRender = (nodes, row, col) => {
    let newNodes = nodes.slice();
    let currentNode = nodes[row][col];

    const newNode = {
      ...currentNode,
      isWall: !currentNode.isWall,
    };

    newNodes[row][col] = newNode;

    return newNodes;
  };

  return (
    <div className='App'>
      <Header
        nodes={nodes}
        coordinates={coordinates}
        animateVisitedNodes={animateVisitedNodes}
      />
      <div className='grid'>
        {nodes.map((row, index1) => {
          return (
            <div key={index1} className='row'>
              {row.map((node, index2) => {
                return (
                  <Node
                    key={index2}
                    nodes={nodes}
                    node={node}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseDown={handleMouseDown}
                    handleMouseLeave={handleMouseLeave}
                  ></Node>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;

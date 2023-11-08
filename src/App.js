import './App.css';
import Node from './components/Node';
import { useState, useEffect } from 'react';

const App = () => {
  const NUM_ROWS = 20;
  const NUM_COLS = 50;

  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    let temp_nodes = [];
    for (let row = 0; row < NUM_ROWS; row++) {
      let currentRow = [];

      for (let col = 0; col < NUM_COLS; col++) {
        currentRow.push({
          row,
          col,
          isStart: row == 10 && col == 5,
          isFinish: row == 10 && col == 45,
        });
      }
      temp_nodes.push(currentRow);
    }

    setNodes(temp_nodes);
  }, []);

  return (
    <div className='App'>
      <div className='grid'>
        {nodes.map((row, index1) => {
          return (
            <div key={index1} className='row'>
              {row.map((node, index2) => {
                const { isStart, isFinish } = node;
                return (
                  <Node
                    key={index2}
                    isStart={isStart}
                    isFinish={isFinish}
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

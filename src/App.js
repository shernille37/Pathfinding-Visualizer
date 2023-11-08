import './App.css';
import Node from './components/Node';
import { useState, useEffect } from 'react';

const App = () => {
  const NUM_ROWS = 20;
  const NUM_COLS = 50;

  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    let temp_nodes = [];
    for (let i = 0; i < NUM_ROWS; i++) {
      let currentRow = [];

      for (let j = 0; j < NUM_COLS; j++) {
        currentRow.push([]);
      }
      temp_nodes.push(currentRow);
    }

    setNodes(temp_nodes);
  }, []);
  console.log(nodes);

  return (
    <div className='App'>
      <div className='grid'>
        {nodes.map((row, index1) => {
          return (
            <div key={index1} className='row'>
              {row.map((node, index2) => (
                <Node key={index2}></Node>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;

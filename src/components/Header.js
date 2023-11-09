import React from 'react';
import '../assets/header.css';
import { dijkstra, getShortestPath } from '../algorithms/dijkstra';

const Header = ({ nodes, coordinates, animateVisitedNodes }) => {
  const handleDijkstra = (nodes) => {
    const { START_NODE_ROW, START_NODE_COL, FINISH_NODE_ROW, FINISH_NODE_COL } =
      coordinates;
    const startNode = nodes[START_NODE_ROW][START_NODE_COL];
    const finishNode = nodes[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder = dijkstra(nodes, startNode, finishNode);
    const shortestPath = getShortestPath(finishNode);
    animateVisitedNodes(visitedNodesInOrder, shortestPath);
  };

  return (
    <div className='header'>
      <h1>Pathfinding Visualizer</h1>

      <div className='start-button'>
        <button onClick={() => handleDijkstra(nodes)}>
          <p>Visualize Dijkstra</p>
        </button>
      </div>
    </div>
  );
};

export default Header;

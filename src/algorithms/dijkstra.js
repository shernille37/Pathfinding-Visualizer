import { MinHeap } from "./minheap";

export const dijkstra = (nodes, startNode, finishNode) => {
  const visitedNodesInOrder = [];
  startNode.distance = 0;
  
  const compareFunction = (a, b) => a.distance - b.distance;
  let min_heap = new MinHeap(compareFunction) 
  min_heap.add(startNode)

  while (!min_heap.isEmpty()) {

    // Extract minimum
    const closestNode = min_heap.get_min()

    if(!closestNode.isVisited)
      closestNode.isVisited = true;
    else
      continue;
    
    // If we encounter a wall
    if (closestNode.isWall) continue;
    
    visitedNodesInOrder.push(closestNode);
    if (closestNode == finishNode) return visitedNodesInOrder;

    updateUnvisitedNeighbors(closestNode, nodes).forEach(node => min_heap.add(node))
  }

  // If we're trapped, no shortest path exists
  return visitedNodesInOrder
};


const updateUnvisitedNeighbors = (currentNode, nodes) => {
  const unvisitedNeighbors = getUnvisitedNeighbors(currentNode, nodes);

  unvisitedNeighbors.forEach((node) => {
    node.distance = currentNode.distance + 1;
    node.previousNode = currentNode;
  });

  return unvisitedNeighbors
};

const getUnvisitedNeighbors = (currentNode, nodes) => {
  let neighbors = [];

  // Get the coordinates of the current node
  const { row, col } = currentNode;

  if (row > 0) neighbors.push(nodes[row - 1][col]);
  if (row < nodes.length - 1) neighbors.push(nodes[row + 1][col]);
  if (col > 0) neighbors.push(nodes[row][col - 1]);
  if (col < nodes[0].length - 1) neighbors.push(nodes[row][col + 1]);

  return neighbors.filter((node) => !node.isVisited);
};

export const getShortestPath = (finishNode) => {
  // Backtrack: currentNode is the last element
  const shortestPath = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    shortestPath.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }

  return shortestPath;
};

const getAllNodes = (nodes) => {
  const res = [];

  for (const row of nodes) {
    for (const col of row) {
      res.push(col);
    }
  }

  return res;
};

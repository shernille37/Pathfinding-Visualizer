export const dijkstra = (nodes, startNode, finishNode) => {
  const visitedNodesInOrder = [];
  startNode.distance = 0;

  // Unvisited Nodes is an array of object nodes that are unvisited
  const unvisitedNodes = getAllNodes(nodes);

  // !!unvistedNodes.length is equal to the expression while(unvisitedNodes.length != 0)
  while (!!unvisitedNodes.length) {
    sortNodesByDistance(unvisitedNodes);
    const closestNode = unvisitedNodes.shift();

    closestNode.isVisited = true;

    visitedNodesInOrder.push(closestNode);
    if (closestNode == finishNode) return visitedNodesInOrder;

    updateUnvisitedNeighbors(closestNode, nodes);
  }
};

const sortNodesByDistance = (nodes) => {
  nodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
};

const updateUnvisitedNeighbors = (currentNode, nodes) => {
  const unvisitedNeighbors = getUnvisitedNeighbors(currentNode, nodes);

  unvisitedNeighbors.forEach((node) => {
    node.distance = currentNode.distance + 1;
    node.previousNode = currentNode;
  });
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

const getAllNodes = (nodes) => {
  const res = [];

  for (const row of nodes) {
    for (const col of row) {
      res.push(col);
    }
  }

  return res;
};

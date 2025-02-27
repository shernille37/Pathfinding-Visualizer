export const animateVisitedNodes = (visitedNodes, shortestPath) => {
  visitedNodes.forEach((node, i) => {
    if (node.isFinish) {
      setTimeout(() => {
        animateShortestPath(shortestPath);
      }, 1 * i);

      return;
    }

    setTimeout(() => {
      document.getElementById(`node-${node.row}-${node.col}`).className =
        'node node-isVisited';
    }, 1 * i);
  });
};

const animateShortestPath = (shortestPath) => {
  shortestPath.forEach((node, i) => {
    setTimeout(() => {
      document.getElementById(`node-${node.row}-${node.col}`).className =
        'node node-shortest-path';
    }, 10 * i);
  });
};

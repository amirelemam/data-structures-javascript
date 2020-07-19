function BreadthFirstSearch(graph, root) {
  const nodesLen = {};

  for (let i = 0; i < graph.length; i++) {
    nodesLen[i] = Infinity;
  }
  nodesLen[root] = 0;

  const queue = [root];

  while (queue.length !== 0) {
    const current = queue.shift();

    const curConnected = graph[current];
    const neighborIdx = [];

    // busca todos os indices vizinhos
    let idx = curConnected.indexOf(1); // no array, 1 significa que tem conexão
    while (idx !== -1) {
      neighborIdx.push(idx);
      idx = curConnected.indexOf(1, idx + 1);
    }

    // calcula distancia
    for (let j = 0; j < neighborIdx.length; j++) {
      if (nodesLen[neighborIdx[j]] === Infinity) {
        nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
        queue.push(neighborIdx[j]);
      }
    }
  }

  return nodesLen;
}

const exBFSGraph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
];

console.log(BreadthFirstSearch(exBFSGraph, 1));

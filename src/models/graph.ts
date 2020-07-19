interface Graph {
  nodes: string[];
  edges: Array<{
    node0: string,
    node1: string,
    port: string
  }>
}

export default Graph;
Graph DSA
     // Depth first uses a stack, breadth first uses a queue

   const depthFirst = ( graph, source ) => {
       const stack = [ source ]

       while (stack.length > 0) {
       const current = stack.pop()

      for (let neighbor in graph[current]) {
        stack.push(neighbor)
        }
      }
  }

 const graph = {
      a: ['c, b'],
      b: ['d'],
      c: ['e'],
      d: ['f'],
      e: [],
      f: []
  }

 depthFirst(graph, 'a') // abdfce

// Recursive depthFirst
//

const depthFirst = ( graph, source ) => {
  for (let neighbor in graph[source]) {
    depthFirst(graph, neighbor)
  }
}

// Breadth first
const breadthFirst = (graph, source) => {
  const queue = [ source ]
  // add to one end, remove from other end
  while (queue.length > 0) {
    const current = queue.shift()
    for (let neighbor of graph[current]) {
      queue.push(neighbor)
    }
  }
}


 const graph = {
      a: ['c, b'],
      b: ['d'],
      c: ['e'],
      d: ['f'],
      e: [],
      f: []
  }

 breadthFirst(graph, 'a') // acbedf

//////////////////////////////////////////////////////////////////////
//
a cycle in a graph means you can end up where you started, acyclic means you can't

has path problem

// DFS solution

// src is current position in traversal
const hasPath = (graph, src, dst) => {
  if (src == dst) return true

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst)) == true {
      return true
    }
  }
  return false
}


const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
}
hasPath(graph, 'f', 'k') // true


// BFS
// cant do recursive bc its a q and not a stack

const hasPath = (graph, src, dst) => {
  const queue = [ src ]

  while (queue.length > 0 ) {
    const current = queue.shift()
    if (current == dst) return true

    for (let neighbor of graph[current]) {
      queue.push(neighbor)
    }
  }
  return false
}

//  When dealing with edgeless graph its best to convert to adjency list
//  edgeless is undirected (can go both ways)
//
edges = [
  [i, j],
  [k, i],
  [m, k],
  [k, l],
  [o, j]
]

// make sure when populate one node and its neighbors you add the inverse too
//
graph = {
  i: [j, k],
  j: [i, o],
  k: [i, m, l],
  m: [k],
  l: [k],
  o: [j],
}
// make sure the graph is no cyclical, if it is you need to check off ones your have visited
//


// helper function to make the adjency object
const buildGraph = (edges) => {
  for (let edge in edges) {
    const [a , b] = edge
    if (!(a in graph)) graph[a] = []
    if (!(b in graph)) graph[b] = []
    graph[a].push(b)
    graph[b].push(a)
  }
}

const edges = [
  [i, j],
  [k, i],
  [m, k],
  [k, l],
  [o, n]
]

undirectedPath(edges, j, m)

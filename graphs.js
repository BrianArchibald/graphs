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
const haspath = (graph, src, dst) => {
  if (src == dst) return true

  for (let neighbor of graph[src]) {
    if (haspath(graph, neighbor, dst)) == true {
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

const undirectedPath(edges, src, dst) => {
  const graph buildGraph(edges)
  return hasPath(graph, src, dst, new Set())

  }

const hasPath = (graph, src, dst, visited) =. {
  if (src == dst) return true
  if (visited.has(src)) return false

  visited.add(src)

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited) == true) return true
  }
  return false
}



// helper function to make the adjency object
const buildGraph = (edges) => {
  const graph = {}

  for (let edge in edges) {
    const [a , b] = edge
    if (!(a in graph)) graph[a] = []
    if (!(b in graph)) graph[b] = []
    graph[a].push(b)
    graph[b].push(a)
  }
  return graph
}

//
//
const edges = [
  [i, j],
  [k, i],
  [m, k],
  [k, l],
  [o, n]
]

undirectedPath(edges, j, m)

//////////////////////////////////////////////////////////////////////////////////////////////
//
How many connected components

const connectedComponentsCount = (graph) => {
  const visited = new Set()
  let count = 0

  for (let node in graph) {
    if (explore(graph, node, visited) == true) {
      count += 1
    }
  }
  return count
}

const explore = (graph, current, visited) => {
  // need String here as js sets store keys and strings then vals are nums
  if (visited.has(String(current))) return false
  visited.add(String(current))

  for (let neighbor of graph[current]) {
    explore(graph, neighbor, visited)
  }

  // when explore is done with all neighbors it returns here
  return true
}

///////////////////////////////////////////////////////////////////////////////////////////////////
//
largest component

const largestComponent(graph) => {
  const visited = new Set()

  let longest = 0

  for (let node in graph) {
    const size = exploreSize(graph, node, visited)
    if (size > longest) longest = size
  }

  return longest
}

const exploreSize(graph, node, visited) => {
  if (visited.has(node)) return 0

  visited.add(node)

  let size = 1

  for (let neighbor of graph[node]) {
    size += exploreSize(graph, neighbor, visited)
  }

  return size
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
  //
shortest path

// breadth first is going to be better than depth first
//

const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges)
  const visited = new Set([ nodeA ])

  const queue = [ [nodeA, 0] ]

  while (queue.length > 0) {
    const [ node, distance ] = queue.shift()

    if (node == nodeB) return distance

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor)
        queue.push([ neighbor, distance + 1])
      }
    }
  }
  return -1
}

const buildGraph = (edges) => {
  const graph = {}

  for (let edge of edges) {
    const [ a, b ] = edge
    if (!(a in graph)) graph[a] = []
    if (!(b in graph)) graph[b] = []
    graph[a].push(b)
    graph[b].push(a)
  }

  return
}

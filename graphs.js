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

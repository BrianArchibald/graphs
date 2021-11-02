Graph DSA
    2 // Depth first uses a stack, breadth first uses a queue
    3
>>  4 const depthFirst = ( graph, source ) => {
>>  5   const stack = [ source ]
    6
    7   while (stack.length > 0) {
>>  8     const current = stack.pop()
    9
>> 10     for (let neighbor in graph[current]) {
>> 11       stack.push(neighbor)
   12     }
   13   }
>> 14 }
   15
>> 16 const graph = {
   17   a: ['c, b'],
   18   b: ['d'],
   19   c: ['e'],
   20   d: ['f'],
   21   e: [],
   22   f: []
>> 23 }
   24
>> 25 depthFirst(graph, 'a') // abdfce


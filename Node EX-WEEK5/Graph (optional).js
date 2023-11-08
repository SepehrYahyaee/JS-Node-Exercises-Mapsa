class Graph{

    constructor(){
        this.plot = {};
    }

    addNode(nodeName){
        if (this.plot.hasOwnProperty(nodeName)){
            throw new Error('this node already exists!');
        } else {
            this.plot[nodeName] = [];
        }
    }

    addEdge(nodeName1, nodeName2){
        if (!this.plot.hasOwnProperty(nodeName1) || !this.plot.hasOwnProperty(nodeName2)){
            throw new Error('one/both of the nodes you are trying to draw an edge from doesnt exist!');
        } else {
            this.plot[nodeName1].push(nodeName2);
            this.plot[nodeName2].push(nodeName1);
        }
    }

    showGraph(){
        return this.plot;
    }

    isConnected(){
        // Google mige ke:
        // Begin at any arbitrary node of the graph, G. Proceed from that node
        // using either depth-first or breadth-first search, counting all nodes
        // reached. Once the graph has been entirely traversed, if the number of
        // nodes counted is equal to the number of nodes of G, the graph is
        // connected; otherwise it is disconnected.
        const startingPoint = Object.keys(this.plot)[0];
        const visited = [];
        const stack = [startingPoint];

        while (stack.length > 0){
            let temp = stack.shift();
            if (!visited.includes(temp)){
                visited.push(temp);
            } else {
                null;
            }
    
            for (let item of this.plot[temp]){
                if (!visited.includes(item))
                    stack.push(item);
            }
        }
        if (visited.length === (Object.keys(this.plot)).length){
            return true;
        } else {
            return false;
        }
    }

    shortestPath(node, node2){ // return the shortest path in [], and return -1 if they're not connected.
        
    }
}

const graph1 = new Graph()
graph1.addNode('a');
graph1.addNode('b');
graph1.addNode('c');
graph1.addNode('d');
graph1.addNode('e');
// graph1.addNode('f');

graph1.addEdge('a', 'b');
graph1.addEdge('a', 'c');
graph1.addEdge('a', 'd');
graph1.addEdge('c', 'd');
graph1.addEdge('c', 'e');

// console.log(graph1.showGraph());

console.log(graph1.isConnected());
var isCyclic=false

function hasCycle(graph){
	var fullPath=[]
	var visitedNodes=[]
	isCyclic=false
	nodeList=Object.keys(graph);
	if (nodeList.length==0)
		return false
	source=nodeList[0]
	for (var i=0; i<Object.keys(graph).length; i++){
		visitedNodes[nodeList[i]]= Infinity
	}
	visitedNodes[source]=0
	detectingCycle(graph, source, fullPath, visitedNodes);
	return isCyclic
}

function detectingCycle(graph, currentNode, fullPath, visitedNodes){
	visitedKeys=Object.keys(visitedNodes)
	nodeList[currentNode]=Object.keys(graph[currentNode]);
        for (var j=0; j < Object.keys(graph[currentNode]).length; j++) {
		if (visitedNodes[nodeList[currentNode][j]]===Infinity)
		{
			fullPath.push(currentNode)
			visitedNodes[nodeList[currentNode][j]]=1
			// This has the same rules as defined for my "augmenting path" assignment. The whole  
			// purpose of this is to keep my current path as updated as possible so that I may  
			// be able to detect any potential loops. For instance, if I encounter a node that  
			// I've already encountered in this current iteration of the path, then I know that  
			// it has to have a cycle.
			returnedValue =  detectingCycle(graph, nodeList[currentNode][j], fullPath, visitedNodes)
			if (JSON.stringify(returnedValue)==JSON.stringify([])){
				fullPath.pop()
			}
			else{
				return fullPath
			}
		}
		else if (fullPath.includes(nodeList[currentNode][j])){
			isCyclic = true;
			return []
		}
		
	}
	if (!Object.values(visitedNodes).includes(Infinity)){
                return []
        }
	return []
}

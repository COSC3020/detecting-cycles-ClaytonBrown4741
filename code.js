function hasCycle(graph) {
	fullPath=[]
	visitedNodes=[]
	keyValues=Object.keys(graph);
	if (keyValues.length==0)
		return true
	source=keyValues[0]
	console.log(source)
	for (var i=0; i<Object.keys(graph).length; i++){
		visitedNodes[keyValues[i]]= Infinity
	}
	visitedNodes[source]=0
	returnedValue=dAlgorithm(graph, source);
	if (returnedValue==0){
		console.log("There is a cycle")
		return fullPath
	}
	else if (returnedValue==1)
		return []
	else if (returnedValue==2)
		return []
	console.log(visitedNodes)
}

function dAlgorithm(graph, currentNode){
	fullPath.push(currentNode)
	visitedKeys=Object.keys(visitedNodes)
	console.log(graph[currentNode])
	keyValues[currentNode]=Object.keys(graph[currentNode]);
        for (var j=0; j < Object.keys(graph[currentNode]).length; j++) {
		if (visitedNodes[keyValues[currentNode][j]]===Infinity)
		{
			visitedNodes[keyValues[currentNode][j]]=1
			returnValue=dAlgorithm(graph, keyValues[currentNode][j])
			if (returnValue==2)
				fullPath.pop()
			else if (returnValue==1)
				return 1
			else if (returnValue==0)
				return 0

		}
		else
		{
			if (fullPath.includes(keyValues[currentNode][j])){
				return 0
			}
			//console.log("can't go")
		}
        allVisited=true;
        for (var i=0; i<visitedKeys.length; i++){
                if (visitedNodes[visitedKeys[i]]===Infinity)
                        allVisited=false;
        }
        if (allVisited==true){
                fullPath=[]
                return 1
        }
	}
	return 2;
}

var fullPath=[]
var visitedNodes=[]


var graph = {};

console.log("Begin")
console.log(hasCycle(graph));
console.log("Done")

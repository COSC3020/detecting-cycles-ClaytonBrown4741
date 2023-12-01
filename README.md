[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12548006&assignment_repo_type=AssignmentRepo)
# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code; you can base yours on test code from other
exercises.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.  

**ANSWER**:  
First off, the time it takes to initialize the array that keeps track of the visited nodes  
would be |V| due to it having to go over every node.  
After that, we need to take into account the loop that searches through the graph. In the end,  
this code will cause us to visit every node and every edge available on the graph. And because  
we're keeping track of the nodes that we've already visited, that means that there won't be any  
edges or nodes that are redundently checked. This means that this portion of the code will end  
up running for |V|+|E| amount of time.  
So all in all, we get a final runtime of $\Theta(|E| + |V| + |V| + |E|)$ which simplifies to  
$\Theta(|V| + |E|)$  
(If anything is wrong with my reasoning, please don't hesitate to let me know. Thank you!)

//want to find the depth of a particular node in the DOM tree.
function getNodeDepth(node) {
  let depth = 0;
  while (node.parentNode) {
    depth++;
    node = node.parentNode;
  }
  return depth - 1; // because document has no parentNode but is counted
}


const element = document.querySelector("#your-element-id");
const depth = getNodeDepth(element);
console.log("Depth:", depth);


//----------------------------------------------------------


//Count Total Nodes in the DOM Tree

function countNodes(node) {
  let count = 1; // count the current node
  
  let child = node.firstElementChild;
  while (child) {
    count += countNodes(child); // add counts of all children
    child = child.nextElementSibling;
  }
  
  return count;
}

// Start counting from <body> (or document.documentElement for full HTML)
const totalNodes = countNodes(document.body);
console.log("Total Nodes:", totalNodes);




//----------------------------------------------------------
///count how many <h1> tags are in the DOM tree

function countH1Tags(node) {
  let count = 0;
  
  if (node.tagName && node.tagName.toLowerCase() === 'h1'){
    count++;
  }

  let child = node.firstElementChild;
  while (child) {
    count += countH1Tags(child);
    child = child.nextElementSibling;
  }
  
  return count;
}

// Start from body or document.documentElement
const totalH1 = countH1Tags(document.body);
console.log("Total <h1> tags:", totalH1);



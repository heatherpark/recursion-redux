// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node){

  node = node || document.body;
  //container for all matching elements
    var results = [];

  //find if the element has the classname
    if (node.classList && node.classList.contains(className) > 0 ) {
      //if it matches push the result to the array
      results.push(node);
    }
    //look to see if node has childNodes
    if (node.childNodes.length > 0) {
      //loop through childNodes and put through getElements Function
      for (var i = 0; i < node.childNodes.length; i++) {
        //invoke recursion function on the current childNode
        var childResults = getElementsByClassName(className, node.childNodes[i]);
        results = results.concat(childResults);
      }
    }
    return results;
};


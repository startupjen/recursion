// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

let getElementsByClassName = (className) => {
  let result = []
  addElementsByClassName(className)
  return result
  
  function addElementsByClassName(className, element = document.documentElement) {
    if (element.className.includes(className)) { result.push(element) }

    if ( element.childElementCount > 0 ) {
      for (let i = 0; i < element.childElementCount; i++) {
        addElementsByClassName(className, element.children[i])
      }
    }
  }
}
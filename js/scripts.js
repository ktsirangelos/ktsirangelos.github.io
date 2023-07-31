"use strict";

// Imports
import {header, about, projects, stackOne, stackTwo, footer } from "./data.js";

// objectToTree is a recursive function that receives an object and creates a visual tree-like representation of it
const objectToTree = function(object, prefix = '', isRoot = true) {

  // initialize the variable 'tree'
  let tree= '';

  // retrieve the keys of the (input) object
  const currentKeys = Object.keys(object);

  // iterate through the currentKeys array and
  currentKeys.forEach((key, index) => {

    // check if the current key is the last element (leaf)
    const isLast = index === currentKeys.length - 1;

    // append the current key to the treeString, adding leaf or branch symbols as needed
    tree+= `${prefix}${isRoot ? '' : (isLast ? '└── ' : '├── ')}${key}\n`;

    // if the value associated with the key is not null (and therefore a nested object), process it recursively 
    if (object[key] !== null) {

      // determine the prefix for child elements, depending on the parent element being the last at its depth or not
      let childPrefix = isRoot ? prefix : prefix  + (isLast ? '    ' : '│   ');

      // call objectToTree to represent nested objects, and append the result to the tree
      tree+= objectToTree(object[key], childPrefix, false);
    }
  });

  return tree;
}

const changeText = function() {
  document.getElementById("this").textContent =
    document.getElementById("this").textContent === "this website"
      ? "already here"
      : "this website";
}

// Init
document.querySelector('header').innerHTML = `${header}`;
document.querySelector('.about').innerHTML = `<p>${about}</p>`;
document.querySelector('.projects').innerHTML = `<pre>${objectToTree(projects)}</pre>`;
document.querySelector('.stack-1').innerHTML = `<pre>${objectToTree(stackOne)}</pre>`;
document.querySelector('.stack-2').innerHTML = `<pre>${objectToTree(stackTwo)}</pre>`;
document.querySelector('footer').innerHTML = `<pre>${footer}</pre>`;
document.querySelector('#this').addEventListener('click', changeText);

// For development
//
// const example = {
//   "a": {
//     "b": {
//       "c": null,
//       "d": null,
//       "e": null
//     },
//     "f": null,
//     "g": null,
//     "h": null
//   }
// }
//
// console.log(objectToTree(example))
// console.log('prefix', prefix,'isRoot:',isRoot, 'isLast:',isLast, 'key:',key)
// console.log(tree)
// console.log(object[key])
// console.log('childPrefix:', childPrefix)


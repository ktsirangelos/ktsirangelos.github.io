"use strict";

// Imports
import {header, about, projects, stackOne, stackTwo, footer } from "./data.js";

// Functions
const objectToTree = function(object, prefix = '', isRoot = true) {

  // Initialize the variable 'tree'
  let tree= '';

  // Retrieve the keys of the (input) object
  const currentKeys = Object.keys(object);

  // Iterate through the currentKeys array and
  currentKeys.forEach((key, index) => {

    // Check if the current key is the last element (leaf)
    const isLast = index === currentKeys.length - 1;

    // Append the current key to the treeString, adding leaf or branch symbols as needed
    tree+= `${prefix}${isRoot ? '' : (isLast ? '└── ' : '├── ')}${key}\n`;

    // If the value associated with the key is not null (and therefore a nested object), process it recursively 
    if (object[key] !== null) {

      // Determine the prefix for child elements, depending on the parent element being the last at its depth or not
      let childPrefix = isRoot ? prefix : prefix  + (isLast ? '    ' : '│   ');

      // Call objectToTree to represent nested objects, and append the result to the tree
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

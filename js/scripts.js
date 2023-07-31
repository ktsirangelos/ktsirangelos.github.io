"use strict";

// Imports
import {header, about, projects, stackOne, stackTwo, footer } from "./data.js";

// objectToTree 
const objectToTree = function(obj, indent = '', isRoot = true) { 

  let tree = ''; 
  const keys = Object.keys(obj); 

  // Iterates over each key in the object using forEach loop.
  keys.forEach((key, index) => {
    // Checks if the current key is the last in the keys array.
    const isLast = index === keys.length - 1;

    // Adds to the tree string based on whether the node is root and/or the last child.
    tree += `${indent}${isRoot ? '' : (isLast ? '└── ' : '├── ')}${key}\n`;

    // Checks if the value of the current key is an object and not null.
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      // Sets the childPrefix based on whether the current key is the last in the array.
      let childPrefix = isLast ? '    ' : '│   ';

      // Constructs the indentation for the next level, taking into account whether it is the root.
      let newIndent = isRoot ? indent : indent + childPrefix;

      // Recursively calls the objectToTree function to process the children of the current key, adding the result to the tree string.
      tree += objectToTree(obj[key], newIndent, false);
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

"use strict";

// Imports
import {header, about, projects, stackOne, stackTwo, footer } from "./data.js";

// Functions
const makeTree = function(obj, indent = '', isRoot = true) {
  let tree = '';
  const keys = Object.keys(obj);
  keys.forEach((key, index) => {
    const isLast = index === keys.length - 1;
    tree += `${indent}${isRoot ? '' : (isLast ? '└── ' : '├── ')}${key}\n`;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      let childPrefix = isLast ? '    ' : '│   ';
      let newIndent = isRoot ? indent : indent + childPrefix;
      tree += makeTree(obj[key], newIndent, false);
    }
  });
  return tree;
}

const changeText = function() {
  document.getElementById("this").textContent =
    document.getElementById("this").textContent === "this website →"
      ? "already here ↩"
      : "this website →";
}

// Init
document.querySelector('header').innerHTML = `${header}`;
document.querySelector('.about').innerHTML = `<p>${about}</p>`;
document.querySelector('.projects').innerHTML = `<pre>${makeTree(projects)}</pre>`;
document.querySelector('.stack-1').innerHTML = `<pre>${makeTree(stackOne)}</pre>`;
document.querySelector('.stack-2').innerHTML = `<pre>${makeTree(stackTwo)}</pre>`;
document.querySelector('footer').innerHTML = `<pre>${footer}</pre>`;
document.querySelector('#this').addEventListener('click', changeText);

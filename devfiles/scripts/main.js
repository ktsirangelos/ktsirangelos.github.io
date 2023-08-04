"use strict";

// Imports
import { header, about, projects, stackOne, stackTwo, footer } from "./data.js";
import { objectToTree } from "./objectToTree.js";
import { changeText } from "./changeText.js";

// Init
document.querySelector('header').innerHTML = `${header}`;
document.querySelector('.about').innerHTML = `<p>${about}</p>`;
document.querySelector('.projects').innerHTML = `<pre>${objectToTree(projects)}</pre>`;
document.querySelector('.stack-1').innerHTML = `<pre>${objectToTree(stackOne)}</pre>`;
document.querySelector('.stack-2').innerHTML = `<pre>${objectToTree(stackTwo)}</pre>`;
document.querySelector('footer').innerHTML = `<pre>${footer}</pre>`;
document.querySelector('#this').addEventListener('click', changeText);

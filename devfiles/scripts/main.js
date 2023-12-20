"use strict";

import {
  header,
  about,
  stackOne,
  stackTwo,
  stackThree,
  footer,
} from "./data.js";
import { objectToTree } from "./objectToTree.js";

const moonSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="ionicon" viewBox="0 0 512 512"><path d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>';
const sunSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"/><circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/></svg>';

document.querySelector("header").innerHTML = `${header}`;
document.querySelector(".about").innerHTML = `<p>${about}</p>`;
document.querySelector(".stack-1").innerHTML = `<pre>${objectToTree(
  stackOne,
)}</pre>`;
document.querySelector(".stack-2").innerHTML = `<pre>${objectToTree(
  stackTwo,
)}</pre>`;
document.querySelector(".stack-3").innerHTML = `<pre>${objectToTree(
  stackThree,
)}</pre>`;
document.querySelector("footer").innerHTML = `<pre>${objectToTree(
  footer,
)}</pre>`;

function toggleTheme() {
  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");

  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    themeToggle.innerHTML = sunSvg;
  } else {
    body.classList.add("dark-mode");
    themeToggle.innerHTML = moonSvg;
  }
}

document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");

  if (!body.classList.contains("dark-mode")) {
    body.classList.add("dark-mode");
    themeToggle.innerHTML = moonSvg;
  }
});

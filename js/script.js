"use strict";

// Functions

const changeText = function() {
  document.getElementById("this").textContent =
    document.getElementById("this").textContent === "this website →"
      ? "already here ↩"
      : "this website →";
}

const getCurrentYear = function () {
  document.getElementById("currentYear").textContent = new Date().getFullYear();
};

// Init

getCurrentYear();

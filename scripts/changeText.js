export const changeText = function() {
  document.getElementById("this").textContent =
    document.getElementById("this").textContent === "this website"
      ? "already here"
      : "this website";
}

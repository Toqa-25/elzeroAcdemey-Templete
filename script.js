let otherParent = document.getElementById("parent-other-links");
let otherChild = document.getElementById("child-other-links");
otherParent.onclick = function () {
  otherChild.classList.toggle("other");
};

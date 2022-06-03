let otherParent = document.getElementById("parent-other-links");
let otherChild = document.getElementById("child-other-links");
otherParent.onclick = function () {
  otherChild.classList.toggle("other");
};



window.addEventListener("load" ,function (e){
  document.querySelector(".load-page").style.display="none";
  console.log("loaded");
  document.querySelector("body").style.cssText="overflow-y: auto;";
 
    } )
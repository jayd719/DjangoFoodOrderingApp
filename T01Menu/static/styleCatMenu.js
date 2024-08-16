let menuContainer = document.getElementById("menuContainer");

const ELEMENT = 1;

menuContainer.className = "flex bg-white p-2 rounded-lg shadow-xl border m-3";
menuContainer.childNodes[ELEMENT].className =
  "flex justifiy-center gap-3 mx-auto";

menuContainer.childNodes[ELEMENT].childNodes.forEach((item) => {
  if (item.nodeName == "LI") {
    item.className = "text-lg text-center flex rounded items-center p-1  hover:cursor-pointer";
    item.childNodes[0].className = "w-12 mx-auto ";
  }
});

// window.setTimeout(function () {
//   window.location.reload();
// }, 3000);

let menuContainer = document.getElementById("menuContainer");

const ELEMENT = 1;

menuContainer.className = "flex justify-center";
menuContainer.childNodes[ELEMENT].className =
  "grid justify-items-stretch grid-cols-3  lg:grid-cols-6 gap-1";

menuContainer.childNodes[ELEMENT].childNodes.forEach((item) => {
  if (item.nodeName == "LI") {
    item.className =
      "flex border items-center justify-center px-10 h-36 text-xl flex-col";
    item.childNodes[0].className = "w-20 mx-auto ";
  }
});

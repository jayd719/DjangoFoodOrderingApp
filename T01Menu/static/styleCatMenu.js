let menuContainer = document.getElementById("menuContainer");

const ELEMENT = 1;

menuContainer.className = "flex bg-white p-2 rounded-lg scale-75 hover:scale-100  transition duration-500 shadow-xl border";
menuContainer.childNodes[ELEMENT].className =
  "flex justifiy-center gap-3 mx-auto";

menuContainer.childNodes[ELEMENT].childNodes.forEach((item) => {
  if (item.nodeName == "LI") {
    item.className = "text-lg text-center flex  border rounded items-center p-1 hover:scale-[1.15] transition duration-200 shadow-xl cursor-pointer";
    item.childNodes[0].className = "w-12 mx-auto ";
  }
});

// window.setTimeout(function () {
//   window.location.reload();
// }, 3000);

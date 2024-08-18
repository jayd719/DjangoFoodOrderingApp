let menuContainer = document.getElementById("menuContainer");

const ELEMENT = 1;

let categoriesIcons = [];

menuContainer.className = "flex justify-center";
menuContainer.childNodes[ELEMENT].className =
  "grid justify-items-stretch grid-cols-3  lg:grid-cols-6 gap-1 px-10 py-10";

menuContainer.childNodes[ELEMENT].childNodes.forEach((item) => {
  if (item.nodeName == "LI") {
    item.className =
      "flex items-center justify-center  text-xl flex-col group hover:text-red-600 p-4 hover:font-bold hover:cursor-pointer";
    item.childNodes[0].className = "mx-auto rounded-full group-hover:shadow-xl group-hover:shawdow-zinc-900 group-hover:translate-y-[-5px] mb-2 transition duration";
    addEventListerToCategoryIcon(item.firstChild);
  }
});

function addEventListerToCategoryIcon(icon) {
  icon.id = "up";
  icon.addEventListener("mouseenter", () => {
    
  });

  icon.addEventListener("mouseleave", () => {
    console.log("dd");
  });
}

let menuContainer = document.getElementById("menuContainer");

const ELEMENT = 1;


menuContainer.className = "mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12";
menuContainer.childNodes.forEach((item) => {
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

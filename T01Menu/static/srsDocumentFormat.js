
HEADER.remove()
secondRow.className="bg-red-600 fixed w-full text-white text-sm flex justify-end px-10"
secondRow.innerHTML="<a class='text-sm' href='/'>Main</a>"
IconHeader.className="fixed my-5 bg-zinc-800 p-4 w-full" 


let documentMenu = document.createElement("div")
IconHeader.appendChild(documentMenu)

let menu = document.getElementById('menu')
documentMenu.className="h-2 container mx-auto text-white flex justify-end"
documentMenu.appendChild(menu)





document.querySelectorAll("#srs").forEach((container) => {
  container.className = "container p-5 mx-auto";

  container.childNodes.forEach((element) => {
    if (element.nodeName === "H1") {
      element.className = "text-7xl mt-10 mb-4 font-bold";
    } else if (element.nodeName === "H2") {
      element.className = "text-xl mt-10 mb-0 font-bold";
    } else if (element.nodeName === "H3") {
      element.className = "text-md";
    } else if (element.nodeName === "P") {
      element.className = "mx-auto text-justify mb-2 text-sm";
    } else if (element.nodeName === "UL") {
      element.className = "ml-8";
    } else if (element.nodeName === "HR") {
      element.className = "mb-10 mt-4";
    } else if (element.nodeName === "IMG") {
      element.className = "w-[400px]  rounded-lg shadow-xl border";
    }
    // console.log(element)
  });
});

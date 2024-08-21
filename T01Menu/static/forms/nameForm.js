const FORM = document.querySelector("form");
FORM.childNodes.forEach((element) => {
  if (element.nodeName === "DIV") {
    element.className = "p-2";
    element.childNodes[1].className = "";
    element.childNodes[3].className = "input input-bordered w-full";
  }
});
FORM.className = "w-full md:w-3/4 lg:w-1/2 md:mx-auto";
FORM.classList.add("border-0", "my-10", "p-5");

document.querySelector(".submit").className = `
btn w-full mt-10 bg-red-600 text-white
`;

/**
 * Generates the HTML for a cart button with an icon.
 * @returns {string} - A string containing the HTML for a cart button with an icon.
 */
function cartButton() {
  return `<li class=""><label onclick="cart.displayCart()" for="cart-drawer"><div id="cart_items_label" class="absolute top-0 right-0 bg-red-500 rounded-full px-2 text-[10px]"></div> <img class="w-6 invert" src="https://www.svgrepo.com/show/512843/shopping-bag-1143.svg"></label></li>`;
}

/**
 * Generates the HTML for an icon.
 * @returns {string} - A string containing the HTML for an icon.
 */
function ICON() {
  return `<img class="" src="https://www.svgrepo.com/show/490311/restaurant-waiter.svg">`;
}

/**
 * Array of promotional text strings to be displayed in the header.
 */
const OFFERS_TEXT = [
  "Sign Up Now and Get 20% Off On Your First Order",
  "Skip the Line, Receive A Text When Your Food Is Ready",
  "Watch The Game, Skip Standing In Line",
];

/**
 * Creates the main header container, appends it to the body, and sets up its styling.
 */
let HEADER = document.createElement("div");
document.body.appendChild(HEADER);
HEADER.className = "fixed z-[400] w-full";

/**
 * Creates the top row of the header for displaying promotional text, appends it to the header, and sets up its styling.
 */
let topRow = document.createElement("div");
HEADER.appendChild(topRow);
topRow.className = "bg-red-600 p-1";

let offerText = document.createElement("h1");
offerText.className = "text-[12px] md:text-md text-center text-white";
offerText.textContent = OFFERS_TEXT[1];
topRow.appendChild(offerText);

/**
 * Updates the promotional text displayed in the top row at regular intervals.
 */
setInterval(() => {
  let randomNumber = Math.floor(Math.random() * OFFERS_TEXT.length);
  offerText.textContent = OFFERS_TEXT[randomNumber];
}, 2000);

/**
 * Creates the menu bar with a cart button, appends it to the header, and sets up its styling.
 */
let menuBar = document.createElement("div");
HEADER.appendChild(menuBar);
menuBar.innerHTML = `
<div class="bg-zinc-800 flex justify-end shadow-xl">
  <ul class="menu menu-horizontal text-white font-bold gap-3 items-center text-md">
    <li class="hidden md:flex"><a href="/srs/">Call Restaurant</a><li>
    <li class="hidden md:flex">Menu<li>
    <li class="hidden md:flex">Offers<li>
    ${cartButton()}
  <ul>
</div>
`;

/**
 * Creates a second row under the header, appends it to the body, and sets up its styling.
 */
let secondRow = document.createElement("div");
document.body.appendChild(secondRow);
secondRow.className = "h-20 bg-red-600";

/**
 * Creates a container for the icon header, appends it to the body, and sets up its styling.
 * The icon header contains an icon and associated text.
 */
let IconHeader = document.createElement("div");
document.body.appendChild(IconHeader);
IconHeader.className = "bg-zinc-800 p-4";
IconHeader.innerHTML = `
<div class="container mx-auto">
  <div class="flex items-center gap-2">
     <div class="w-10 md:w-14 invert">${ICON()}</div>
      <div class="text-white">
          <p class="font-bold font-title">Skip The Line</p>
          <p class="text-[10px]">Order Online</p>
      </div>
  </div>
</div>`;

/**
 * creates and add side bar for cart items
 *
 */

let cartBar = document.createElement("div");
document.body.appendChild(cartBar);
cartBar.innerHTML = `
<div class="drawer z-[500]">
  <input id="cart-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <!-- Page content here -->
  </div>
  <div class="drawer-side ">
    <label for="cart-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
    <div class="bg-base-200 min-h-full">
      <h2 class="text-4xl font-bold font-black font-title z-[100] p-3 mb-4 text-red-600">Shopping cart</h2>
      <ul class="menu text-base-content  p-4 w-96 divide-y divide-gray-200" id="cart_list">
      </ul>

     

    </div>  
   </div>
</div>
`;



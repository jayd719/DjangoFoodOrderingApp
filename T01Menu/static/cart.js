function bottomCheckout(Subtotal) {
  let div = document.createElement("div");
  div.innerHTML = `<div class="border-t border-gray-200 px-4 py-6 sm:px-6 mt-10">
  <div class="flex justify-between text-base font-medium text-gray-900">
    <p>Subtotal</p>
    <p>$${(Subtotal).toFixed(2)}</p>
  </div>
  <p class="mt-0.5 text-sm text-gray-500">
    Shipping and taxes calculated at checkout.
  </p>
  <div class="mt-6">
    <a
      href="#"
      class="flex items-center justify-center rounded-md border border-transparent bg-red-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-300 hover:text-black"
      >Checkout</a
    >
  </div>
  <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
    <p>
      or
      <button
        type="button"
        class="font-medium text-black hover:text-red-600"
      >
        Continue Shopping
        <span aria-hidden="true"> &rarr;</span>
      </button>
    </p>
  </div>
</div
`;

  return div;
}
/**
 * -------------------------------------------------------
 * Represents an item in the shopping cart.
 * -------------------------------------------------------
 * Constructor Parameters:
 *     itemID    - The unique identifier for the item (String).
 *     itemName  - The name of the item (String).
 *     qty       - The quantity of the item (Number).
 *     price     - The price of a single unit of the item (Number).
 *     imageLink - The URL link to the item's image (String).
 * -------------------------------------------------------
 * Properties:
 *     itemID    - The unique identifier for the item.
 *     itemName  - The name of the item.
 *     qty       - The quantity of the item.
 *     price     - The price of a single unit of the item.
 *     image     - The URL link to the item's image.
 * -------------------------------------------------------
 */
class CartItem {
  constructor(itemID, itemName, qty, price, imageLink) {
    this.itemID = itemID;
    this.itemName = itemName;
    this.qty = qty;
    this.price = price;
    this.image = imageLink;
  }
}

/**
 * -------------------------------------------------------
 * Represents the shopping cart containing multiple CartItem objects.
 * -------------------------------------------------------
 * Properties:
 *     items      - An array of CartItem objects currently in the cart.
 *     itemsCount - The total number of items in the cart (Number).
 *     total      - The total cost of all items in the cart (Number).
 * -------------------------------------------------------
 */
class Cart {
  constructor() {
    this.items = [];
    this.itemsCount = 0;
    this.total = 0;

    this.#checkForCart();
    this.#updateCount();

    console.log(this.items);
  }

  /**
   * -------------------------------------------------------
   * Checks if there is an existing cart saved as a cookie and loads it.
   * -------------------------------------------------------
   * Parameters:
   *     None
   * -------------------------------------------------------
   * Returns:
   *     None
   * -------------------------------------------------------
   */
  #checkForCart() {
    let existCookie = this.#getCookie("cart");
    if (existCookie != "") {
      JSON.parse(existCookie).forEach((element) => {
        this.items.push(
          new CartItem(
            element["itemID"],
            element["itemName"],
            element["qty"],
            element["price"],
            element["image"]
          )
        );
        this.#changeToRemoveButton(
          document.getElementById(element["itemID"]).childNodes[3].childNodes[5]
            .childNodes[3]
        );

        document.getElementById(
          element["itemID"]
        ).childNodes[3].childNodes[5].childNodes[1].value = element["qty"];
      });
    }
  }

  /**
   * -------------------------------------------------------
   * Adds a new item to the cart and updates the cart cookie and item count.
   * -------------------------------------------------------
   * Parameters:
   *     itemID - The unique identifier for the item to be added (String).
   * -------------------------------------------------------
   * Returns:
   *     None
   * -------------------------------------------------------
   */
  addToCart(itemID) {
    let itemData = document.getElementById(itemID).childNodes[3];

    this.items.push(
      new CartItem(
        itemData.parentNode.id,
        itemData.childNodes[1].textContent,
        itemData.childNodes[5].childNodes[1].value,
        itemData.childNodes[3].textContent,
        itemData.parentElement.childNodes[1].childNodes[1].src
      )
    );
    this.#changeToRemoveButton(itemData.childNodes[5].childNodes[3]);
    this.#setCookie("cart", JSON.stringify(this.items), 10);
    this.#updateCount();
  }

  /**
   * -------------------------------------------------------
   * Changes the "Add to Cart" button to a "Remove From Cart" button.
   * -------------------------------------------------------
   * Parameters:
   *     button - The button element to be updated (HTMLButtonElement).
   * -------------------------------------------------------
   * Returns:
   *     None
   * -------------------------------------------------------
   */
  #changeToRemoveButton(button) {
    button.textContent = "Remove From Cart";
    button.onclick = `cart.removeFromCart(itemData.parentNode.id)`;
  }

  /**
   * -------------------------------------------------------
   * Updates the total number of items and total price in the cart.
   * -------------------------------------------------------
   * Parameters:
   *     None
   * -------------------------------------------------------
   * Returns:
   *     None
   * -------------------------------------------------------
   */
  #updateCount() {
    this.itemsCount = 0;
    this.total = 0;

    this.items.forEach((cartItem) => {
      this.itemsCount += parseInt(cartItem.qty);
      this.total += parseFloat(cartItem.price) * parseInt(cartItem.qty);
    });
    this.#updateCartItemsLabel();
  }

  /**
   * -------------------------------------------------------
   * Updates the cart items label in the UI to reflect the current item count.
   * -------------------------------------------------------
   * Parameters:
   *     None
   * -------------------------------------------------------
   * Returns:
   *     None
   * -------------------------------------------------------
   */
  #updateCartItemsLabel() {
    const cartLabel = document.getElementById("cart_items_label");
    cartLabel.innerText = this.itemsCount > 0 ? this.itemsCount : "";
  }

  /**
   * -------------------------------------------------------
   * Displays the contents of the cart in the UI.
   * -------------------------------------------------------
   * Parameters:
   *     None
   * -------------------------------------------------------
   * Returns:
   *     None
   * -------------------------------------------------------
   */
  displayCart() {
    let cartList = document.getElementById("cart_list");
    cartList.innerHTML = "";
    this.items.forEach((element) => {
      let card = document.createElement("li");
      card.innerHTML = `
      <div class="">
          <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
            <img src="${element.image}" alt="${element.itemName}" class="h-full w-full object-cover object-center">
          </div>

          <div class="ml-4 flex flex-1 flex-col">
            <div>
              <div class="flex justify-between text-base font-medium text-gray-900">
                <h3>${element.itemName}</h3>
                <p class="ml-4"> $${(element.price * element.qty).toFixed(2)}</p>
              </div>
            </div>
            <div class="flex flex-1 items-end justify-between text-sm">
              <p class="text-gray-500 mt-3">Qty ${element.qty}</p>

              <div class="flex">
                <button type="button" class="font-medium text-red-600 hover:text-red-400">Remove</button>
              </div>
            </div>
          </div>        
      </div>`;

      cartList.appendChild(card);
    });
    cartList.appendChild(bottomCheckout(this.total))
  }

  /**
   * -------------------------------------------------------
   * Removes an item from the cart based on its ID.
   * -------------------------------------------------------
   * Parameters:
   *     itemID - The unique identifier of the item to be removed (String).
   * -------------------------------------------------------
   * Returns:
   *     None
   * -------------------------------------------------------
   */
  removeFromCart(itemID) {
    alert(document.getElementById(itemID));
  }

  /**
   * -------------------------------------------------------
   * Sets a cookie with a specified name, value, and expiration date.
   * Use: setCookie('cookieName', 'cookieValue', 7)
   * -------------------------------------------------------
   * Parameters:
   *     cname  - The name of the cookie to set (String).
   *     cvalue - The value to assign to the cookie (String).
   *     exdays - The number of days until the cookie expires (Number).
   * -------------------------------------------------------
   * Returns:
   *     None
   * -------------------------------------------------------
   */
  #setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  /**
   * -------------------------------------------------------
   * Retrieves the value of a specified cookie.
   * Use: let cookieValue = getCookie('cookieName')
   * -------------------------------------------------------
   * Parameters:
   *     cname - The name of the cookie whose value is to be retrieved (String).
   * -------------------------------------------------------
   * Returns:
   *     The value of the specified cookie if it exists (String).
   *     An empty string if the cookie does not exist.
   * -------------------------------------------------------
   */
  #getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
}

// Initialize the cart
let cart = new Cart();

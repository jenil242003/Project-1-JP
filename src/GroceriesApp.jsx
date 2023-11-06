import React, { useState } from "react";
import "./App.css"; // Import your CSS styles
import InventoryCards from "./InventoryCards";
import CartList from "./CartList";
import { products } from "./products";

function App() {
  // store the items in the cart
  const [cart, setCart] = useState([]);

  // Function to add a product in the cart
  const addItemsInCart = (product) => {
  // Create a new cart that includes the choosen product
  const updatedCart = [...cart, product];
  // Update the cart with the new cart
  setCart(updatedCart);
};


  // Function to remove a product from the cart
  const removeItemsfromCart = (product) => {
    // Create a copy of the cart
    const updatedCart = [...cart];
  
    // Iterate through the cart to find and remove the specified product
    for (let i = 0; i < updatedCart.length; i++) {
      if (updatedCart[i].id === product.id && updatedCart[i].quantity === product.quantity) {
        // If a matching item is found, remove it and exit the loop
        updatedCart.splice(i, 1);
        break;
      }
    }
  
    // Update the cart state with the modified cart
    setCart(updatedCart);
  };

 // Function to empty the shopping cart
const emptyCart = () => {
  // Set the shopping cart to an empty array, effectively removing all products
  setCart([]);
};


  // Function to calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    // Calculate the total price by summing the prices of all items in the cart
    return cart
      .reduce((total, item) => total + parseFloat(item.price.slice(1)), 0)
      .toFixed(2);
  };

 // Function to count the number of items in the cart
  const countItemsInCart = () => {
  // Initialize a variable to store the item count
  let itemCount = 0;

  // Loop through the cart to count the items
  for (const item of cart) {
    itemCount += 1;
  }

  // Return the total item count
  return itemCount;
};


  return (
    <div id="root">
      <h1>The Grocery App</h1>
      <div className="GroceriesApp-Container">
        <div className="Inventory-Container">
           {/* Render the inventory of products and pass functions to add items to the cart */}
          <InventoryCards products={products} addItemsInCart={addItemsInCart} />
        </div>
        <div className="CartList-Container">
          {/* Render the cart with the ability to remove items, empty the cart, and calculate the total price */}
          <CartList
            cart={cart}
            removeItemsfromCart={removeItemsfromCart}
            emptyCart={emptyCart}
            calculateTotalPrice={calculateTotalPrice}
            countItemsInCart={countItemsInCart}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

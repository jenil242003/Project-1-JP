import React from "react";

function CartList({ cart, removeItemsfromCart, calculateTotalPrice, emptyCart, buy, countItemsInCart }) {
  return (
    <div className="CartList-Container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        // If the cart is empty then display the message
        <p>Oops..The Cart is Empty!</p>
      ) : (
        <div>
          {/* Display the number of items in the cart */}
          <p>No. of items in the cart: {countItemsInCart()} </p>
          {/* Iterate through each item added in the cart */}
          {cart.map((item) => (
            <div className="CartList-Card" key={item.id}>
              <h3>{item.productName}</h3>
              <p>{item.price}</p>
              <div className="CartList-Card-Info">
                {/* Button to remove the current item from the cart */}
                <button className="Remove-Button" onClick={() => removeItemsfromCart(item)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          {/* Buttons at the bottom of the cart list */}
          <div className="CartList-Buttons">
            {/* Button to empty the entire cart */}
            <button className="Remove-Button" onClick={emptyCart}>
              Empty Cart
            </button>
            {/* Button to buy the cart-items and display the total price */}
            <button id="Buy-Button" onClick={buy}>
              Buy - Total: ${calculateTotalPrice()}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartList;

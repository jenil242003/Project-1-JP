import React from "react";

function InventoryCards({ products, addItemsInCart }) {
  return (
    <div className="Inventory-Container">
      {products.map((product) => (
        <div className="Inventory-Card" key={product.id}>
          {/* Display the product image */}
          <img src={product.image} alt={product.productName} />
          {/* Display the product name */}
          <h3>{product.productName}</h3>
          {/* Display the product's brand */}
          <p>{product.brand}</p>
          {/* Display the product quantity */}
          <p>{product.quantity}</p>
          {/* Display the product's price */}
          <p>{product.price}</p>
          {/* Button to add the product in the cart */}
          <button onClick={() => addItemsInCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default InventoryCards;

import { useState } from "react";
import CartDetails from "./CartDetails.jsx";
import AddButton from "./AddButton.jsx";

const ShoppingCart = () => {
    // Initialize the state for the shopping cart with some default items
    const [carts, setCarts] = useState([
        {"name": "Banana", quantity: 2, price: 0.99},
        {"name": "Apple", quantity: 1, price: 1.49},
        {"name": "Mango", quantity: 3, price: 1.99},
        {"name": "Orange", quantity: 1, price: 0.79}
    ]);
  
    //Get the total number of items in the cart
    const totalItems = carts.reduce((total, item) => total + item.quantity, 0);
    
    //get the price of each item by mulitilplying the quantity and price
    const getItemPrice = (item) => {
        return item.price * item.quantity;
    }
    //get the total price of all the items
    const getTotalPrice = () => {
        return carts.reduce((total, item) => total + getItemPrice(item), 0);
    }
    // Add new items to the cart
   const handleAddToCart = (itemName) => {
        const updatedCarts = carts.map((item) => {
            if (item.name === itemName) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCarts(updatedCarts);
    };

    return (
        <div>

            <h1 style={{ textAlign: "center" }}>Shopping Cart</h1>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
                <AddButton color="blue" item="Banana" onClick={() => handleAddToCart("Banana")} />
                <AddButton color="green" item="Apple" onClick={() => handleAddToCart("Apple")} />
                <AddButton color="black" item="Mango" onClick={() => handleAddToCart("Mango")} />
                <AddButton color="coral" item="Orange" onClick={() => handleAddToCart("Orange")} />
            </div>
            <CartDetails carts={carts} totalItems={totalItems} getItemPrice={getItemPrice} getTotalPrice={getTotalPrice} />

        </div>
    );

}
export default ShoppingCart; 
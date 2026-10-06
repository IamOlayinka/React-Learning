const CartDetails = ({carts, totalItems, getItemPrice, getTotalPrice}) => {
    return (
        <div style={{ border: "1px solid black", padding: "20px", width: "300px", margin: "0 auto" }}>
            <h2 style={{ textAlign: "center" }}>Cart Details</h2>
            
             {carts.map((item, index) => (
                <ul style={{ marginBottom: "20px" }}>
                    <li key={index} style={{ listStyleType: "none" , textAlign: "left"}}> 
                        
                         ({item.quantity}) {item.name} - ${item.price.toFixed(2)} = ${getItemPrice(item).toFixed(2)}
                    </li> 
                </ul>
                
             ))}
            
            <h5 style={{ marginLeft: "40px"}}>Total Items: {totalItems}</h5>
            
            <h4 style={{ textAlign: "center" }}>Total: ${getTotalPrice().toFixed(2)}</h4>

            <button style={{backgroundColor:"green", color:"white", padding:"5px", borderRadius:"5px"}}>Checkout</button>
        </div>
    );
};

export default CartDetails;
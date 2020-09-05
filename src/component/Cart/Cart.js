import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
   // const total = cart.reduce( (total, prd) => total + prd.price , 0)
   let total = 0;
   for ( let i = 0; i< cart.length; i++){
       const product = cart[i];
       total = total + product.price;
   }
   let shipping = 12.99;
   if(total > 35){
       shipping = 0;
   }
   else if(total > 15){
       shipping = 4.99;
   }
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Ordered: {cart.length}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p>Total Price: {total}</p>
        </div>
    );
};

export default Cart;
import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart=props.cart;
    const totalPrice=cart.reduce((total,cu) => total+cu.price,0);
    let shipping=0;
    if(totalPrice > 500){
        shipping = 0;
    }else if(totalPrice > 300){
        shipping = 9.9;
    }else if(totalPrice > 0){
        shipping = 15.5;
    }
    const Tax =(totalPrice / 10).toFixed(2);
    const grandTotalNumber =(totalPrice+shipping+Number(Tax)).toFixed(2);
    return (
        <div className="order">
            <h2>Course Order</h2>
            <h5>Order course :{cart.length}</h5>
            <p><small>Shipping Cost : ${shipping}</small></p>
            <p><small>Tax : ${Tax}</small></p>
            <h6>Total Course Price : ${grandTotalNumber}</h6>
        </div>
    );
};

export default Cart;
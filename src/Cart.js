import React from "react";
import CartItem from './CartItem';

const Cart = (props)=> {
    console.log('running',props)
    const {products} = props;
    return(
        <div className="cart">
        
         {products.map((product)=>{
          return( 
            <CartItem 
             product={product}
             key={product.id}
             onIncreaseQty={props.onIncreaseQty} 
             onDecreaseQty={props.onDecreaseQty} onDeleteComp={props.onDeleteComp}
            />
          )
         })}
        </div> 
    );
}
export default Cart;
import  React from 'react';
import Cart from './Cart'; 
import Navbar from './Navbar';

class App extends React.Component{
  constructor()
  {
    super();
    this.state=
    {
      products:[
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=367&q=80',
          id: 1
        },
        {
          price: 999,
          title: 'Watch',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=394&q=80',
          id: 2
        },
        {
          price: 999,
          title: 'Graphic Card',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1555618254-84e2cf498b01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
          id: 3
       }
      ]
    }
  }
  handleIncreaseQuantity = (product) =>{
    console.log('Heyy please inc the qty of ',product);
    const {products} = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
        products: products
    })

}
handleDecreaseQty = (product)=>{
    console.log('handling decrease working properly',product);
    const {products} = this.state;
    const index = products.indexOf(product);

    if(products[index].qty === 0)
    return;

    products[index].qty -= 1;

    this.setState({
        products:products
    })

}
handleDeleteComp=(id)=>{
    console.log('handling decrease working properly',id);
 const {products} = this.state;
 const items = products.filter((item) =>item.id !== id); //[{}]
 this.setState({
    products: items
 })
}
getCartCount= ()=>{
  const {products} = this.state;

  let count = 0;

  products.forEach((product)=>{
    count += product.qty;

  })
  return count;

}
getCartTotal=()=>{
  const {products} = this.state;
  let cartTotal = 0;
  products.map((product)=>{
    cartTotal = cartTotal + product.qty * product.price;
    
  })
  return cartTotal;
}
  render(){
    const {products} = this.state;
    return(
     
     <div className="App">
      <Navbar count={this.getCartCount()}/> 
      <Cart 
       products = {products}
       onIncreaseQuantity={this.handleIncreaseQuantity} onDecreaseQty={this.handleDecreaseQty} onDeleteComp={this.handleDeleteComp}
     />
     <div style={{fontSize: 20,padding: 10}}>TOTAL: {this.getCartTotal()}</div> 
    </div>
  );
  }
}

export default App;

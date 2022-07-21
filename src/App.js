import  React from 'react';
import Cart from './Cart'; 
import Navbar from './Navbar';
import {db} from '../src/index';
import {where,query,doc,setDoc,updateDoc,collection,getDocs,increment,deleteDoc} from 'firebase/firestore';


class App extends React.Component{
  constructor()
  {
    super();
    this.state=
    {
      products:[],
      loading: true
    }
    
  }
  
  componentDidMount(){
  this.getData();
  }
  async getData(){
     
    console.log('called');
    const collectionRef = query(collection(db,'products'),where("qty", ">=",4));
    const dataSnapshot = await getDocs(collectionRef);
    // console.log("daa" ,data);
    dataSnapshot.docs.map((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.data());
   });

   const products = dataSnapshot.docs.map((doc) =>{
    const data = doc.data();

    data['id'] = doc.id;
    return data;
   })
   this.setState({
    products: products,
    loading: false
   })

  }
  handleIncreaseQty = async(product) =>{
    console.log('Heyy please inc the qty of ',product);
    const {products} = this.state;
    const index = products.indexOf(product);

    //  products[index].qty += 1;

    // this.setState({
    //     products: products
    // })

    // const docRef = db.collection('products').doc(product[index].id);
     console.log(product.id);
    // older Method to increase a quantity in firestore
    const updateRef = doc(db, "products", product.id);

    // Atomically increment the population of the city by 50.
     await updateDoc(updateRef, {
        qty: increment(1)
    });
    this.getData();
    
}
handleDecreaseQty = async(product)=>{
    console.log('handling decrease working properly',product);
    const {products} = this.state;
    const index = products.indexOf(product);

    if(products[index].qty === 0)
    return;

    // products[index].qty -= 1;

    // this.setState({
    //     products:products
        
    // })
    const updateRef = doc(db, "products", product.id);

    // Atomically increment the population of the city by 50.
     await updateDoc(updateRef, {
        qty: products[index].qty - 1
    });
    this.getData();

}
handleDeleteComp=async(id)=>{
    console.log('handling decrease working properly',id);
    const {products} = this.state;
//  const items = products.filter((item) =>item.id !== id); //[{}]
//  this.setState({
//     products: items
//  })
 await deleteDoc(doc(db, "products", id));
 this.getData();
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
    if(product.qty > 0){
      cartTotal = cartTotal + product.qty * product.price;

    }
     return '';  
  })
  return cartTotal;
}
addProduct = async() =>{
  // db
  // .collection('products')
  // .add({
  //   img: '',
  //   price: 100,
  //   qty: 3,
  //   title: 'Washing Machine'  
  // })
  // .then((docRef)=>{
  //    console.log('product has been added',docRef)
  // })
  // .catch((error)=>{
  //   console.log(error)
  // })
  // Newer Version
  
  // Add a new document in collection "cities"
  console.log('wtf');
await setDoc(doc(db, "products","new_id"), {
  img: " ",
  price: 100,
  qty: 3,
  title: 'Washing Machine'
});
   

}
  render(){
    const {products,loading} = this.state;
    //this.getData();
    return(
     
     <div className="App">
      <Navbar count={this.getCartCount()}/> 
      {/* <button onClick={this.addProduct} style={{padding: 20,fontSize: 20}}>Add A Producy</button> */}
      <Cart 
       products = {products}
       onIncreaseQty={this.handleIncreaseQty} onDecreaseQty={this.handleDecreaseQty} onDeleteComp={this.handleDeleteComp}
     />
      {loading && <h1>Loading Products ...</h1>}
     <div style={{fontSize: 20,padding: 10}}>TOTAL: {this.getCartTotal()}</div> 
    </div>
  );
  }
}

export default App;

import React from "react";

class CartItem extends React.Component {
    
    
    // testing(){
    //     const promise = new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             resolve('done');

    //         },5000);
    //     })
    //     promise.then(()=>{
            
    //         this.setState({qty: 10});


            
    //     })
    //     promise.then(()=>{
    //         console.log('State is :' , this.state)
    //     })
    // }
   

    decreaseQuantity= () =>{
        const {qty} = this.state;

        if(qty === 0){
            return;
        }
        // setState Form 2 - if prevState required use this 
        this.setState( (prevState)=>{
            return {
                qty: prevState.qty - 1
            }
        })
    }
    
    increaseQuantity= ()=>{
      // this.state.qty += 1;
      // setState Form 1
      // this.setState({
      //  qty: this.state.qty + 1
      //   });
      // setState Form 2 - if prevState required use this
      this.setState( (prevState)=>{
        return{
            qty: prevState.qty + 1
        }
     },()=>{
        console.log('this state',this.state);
    })  
      //console.log('this.state',this.state);
    }
    render(){
        console.log('this is props: ',this.props);
        const { price,title,qty} = this.props.product;
        return (
            <div className = "cart-item">
              <div className="left-block">
                <img  style={styles.image} alt=""  />  
              </div>
              <div className="right-block">
                 <div style={{fontSize: 25}}>{title}</div>
                 <div style={{color: '#777'}}>Rs:{price}</div>
                 <div style={{color: '#777'}}>Qty:{qty}</div>
                 <div className="cart-item-actions">
                    {/* Buttons */}
                    <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992651.png" onClick={this.increaseQuantity}/>
                    <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png" onClick={this.decreaseQuantity} />
                    <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1/1570.png"/>
                  </div>

              </div>
             

        

            </div>
        )
    }
}
const styles= {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        backgroundColor: '#eee',
        
    }
}
export default CartItem;
import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Component/StoreContext/StoreContext'

const Cart = ({id}) => {

const{all_products,removeCount,countitem} = useContext(StoreContext)


  return (
<div className='cart-main'>
      <div className='cart-items'>
        <div className='cart-list'>
<li>Item</li>
<li>Title</li>
<li>Price</li>
<li>Quantity</li>
<li>Total</li>
<li>Remove</li>
        </div>

        <hr />

        {all_products.map((item ,index)=>{
          

if(countitem[item.id]>0){ 
  return (

  <div className='items-lists'>
 <img src={item.img} alt="" />
 <p>{item.name}</p>
 <p>{item.price}</p>
 <p>{countitem[item.id]}</p>
 <p>{item.price*countitem[item.id]}</p>
 <h4 onClick={(()=>removeCount(item.id))}>x</h4>
  </div>
)



}  


        }) }

      </div>
  
<hr />

    </div>










  )
}

export default Cart

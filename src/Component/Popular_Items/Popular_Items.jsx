import React from 'react'
import { Exclusive } from '../Images/Exclusive' 
import Item from '../Item/Item'
import './Popular_Items.css'


const Popular_Items = () => {
  return (
    <div className='popular-main'>
      <h1>Popular Category</h1>
      <div className='popular-list'>
{Exclusive.map((item,index)=>(
<Item key={index} id={item.id} img={item.img} name={item.name} des={item.des} price={item.price} rating={item.rating}/>
    
))}
      </div>
    </div>
  )
}

export default Popular_Items

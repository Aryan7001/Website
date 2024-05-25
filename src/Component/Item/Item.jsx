import React, { useContext } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import { StoreContext } from '../StoreContext/StoreContext';

const Item = ({ id, img, name, des, price, rating}) => {
  console.log('Image path:', img); // Add this to check the path

  const{addCount,removeCount,countitem} = useContext(StoreContext)

  return  (
    
    <div className='items-main'>
      <div className='items-img'>
    <Link to={`/Product/${id}`}  > 
      <img src={img} alt=''/>
      </Link>
      </div>
      
      <div className='items-details'>
        <h3>{name}</h3>
        <p>{des}</p>
      </div>
      <div className='items-rating'>
        <p>{price}</p>
        <p>{rating}</p>
      </div>
{!countitem[id] ?  <span onClick={()=>(addCount(id))} class="material-symbols-outlined shopping">shopping_cart</span> :


<div className='main-items'>
<span onClick={()=>(addCount(id))}>+</span>

<p>{countitem[id]}</p>

<span onClick={()=>(removeCount(id))}>-</span>
</div>



}


    </div>
  );
}

export default Item;
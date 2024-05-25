import React, { useContext } from 'react'
import { StoreContext } from '../../Component/StoreContext/StoreContext'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../../Component/ProductDisplay/ProductDisplay'



const Product = () => {

    const{all_products, addCount,countitem ,id, removeCount }= useContext(StoreContext);

    const{Productid} = useParams();
  
const products = all_products.find((item)=>item.id === Number(Productid)); 
console.log('productid',Productid);
  return (
    <div>
    <ProductDisplay products={products} addCount={addCount} countitem={countitem} id={id} removeCount={removeCount} />  
    </div>
    
  )
}

export default Product

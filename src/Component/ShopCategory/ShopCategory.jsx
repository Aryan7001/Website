import React, { useContext } from 'react';
import { StoreContext } from '../StoreContext/StoreContext';
import './ShopCategory.css';
import Item from '../Item/Item'; // Ensure the correct import path

const ShopCategory = (props) => {
  const { all_products } = useContext(StoreContext);

  const filteredProducts = all_products.filter(item => item.category === props.category); //item(product) of each item and we replace it as a product
  console.log('Filtered Products:', filteredProducts);

  return (
    <div className='main-shop'>
      <img src={props.banner} alt="" />
      <hr />
      <div className='product-main'>
        {filteredProducts.map((item, index) => ( //this product is single item that is being pass we can call it anything
          <Item
          key={index} id={item.id} img={item.img} name={item.name} des={item.des} price={item.price} rating={item.rating}
          />
        ))}
      </div>
    
    </div>
  );
}

export default ShopCategory;

import React from 'react'
import './ProductDisplay.css'

const ProductDisplay = ({products, addCount, id}) => {


  return (
    <div className='main-display'>
        <div className='left'>

<div className='main-left-img'>
<img src={products.img} alt="" />
</div>

<div className='left-img'>
<img src={products.img} alt="" />
<img src={products.img} alt="" />
<img src={products.img} alt="" />
<img src={products.img} alt="" />
</div>

</div>


<div className='right-contain'>

<div className='name-right'>
<h1>{products.name}</h1>
</div>
<div className='right-rating'>
<p>{products.rating}</p>
</div>
<div className='right-price'>
<p>Rs{products.price}</p>
</div>


<div className='Product-size'>
<h2>Select-Sizes</h2>
<div className='size-list'>
<select>
<option  disabled selected>Select Size</option>
<option value="S">S</option>
<option value="L">L</option>
<option value="XL">XL</option>
<option value="M">M</option>

</select >
<button onClick={()=>addCount(id)}> Add to cart</button>
</div>

</div>

<div className='desc-right'>
  <h4>Product Details</h4>
<p>{products.des}</p>
</div>



</div>



</div>
  )
}

export default ProductDisplay

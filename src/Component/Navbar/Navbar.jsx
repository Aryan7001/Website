import React from 'react'
import './Navbar.css'
import { icons } from '../Images/all_products'
import {Link} from 'react-router-dom'
import Search_bar from '../Search_bar/Search_bar'

const Navbar = ({setLoggedIn}) => {

  return (
    <div className='nav-main'>
<div className='nav-items'>
<Link to = './' ><img src={icons.logo} alt="" /></Link>
    <Search_bar/>

    <div className='nav-login'>
     <span onClick={()=>setLoggedIn(true)} class="material-symbols-outlined">face</span>
    
<div className='nav-icons'>
 <span class="material-symbols-outlined">favorite</span>
<Link to = '/cart'><span class="material-symbols-outlined">shopping_cart</span> </Link>

</div>

    </div>

</div>
    </div>
  

  )
}

export default Navbar

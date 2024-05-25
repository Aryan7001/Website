import React, { useState } from 'react'
import Home from './Pages/Home/Home'
import {Routes, Route} from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar';
import Navbar_list from './Component/Navbar_list/Navbar_list'
import ShopCategory from './Component/ShopCategory/ShopCategory';
import Orginal_Cream from './Component/Images/Orginal_Cream.png'
import Orginal_lashes from './Component/Images/Orginal_lashes.png'
import Orginal_lips from './Component/Images/Orginal_lips.png'
import Orginal_perfume from './Component/Images/Orginal_perfume.png'
import Cart from './Pages/Cart/Cart';
import Product from './Pages/Product/Product';
import Login from './Pages/Login/Login';
import Footer from './Component/Footer/Footer';




const App = () => {

const[loggedin, setLoggedIn] = useState(false)

  return (
    <>
    <div className='main-app'>
      {loggedin?<Login setLoggedIn={setLoggedIn}/>:null}
<Navbar setLoggedIn={setLoggedIn}/>
  <Navbar_list/>

<Routes>
  <Route path='/' element={<Home/>} />
  <Route  path='/Eye' element={<ShopCategory  banner={Orginal_lashes}  category='Eye' />} />
  <Route  path='/Lipstick' element={<ShopCategory  banner={Orginal_lips} category='Lipstick' />} />
  <Route  path='/Face' element={<ShopCategory   category='Face'  banner={Orginal_Cream} />} />
  <Route  path='/Foundation' element={<ShopCategory   category='Foundation' banner={Orginal_Cream} />} />
  <Route  path='/Perfume' element={<ShopCategory   category='Perfume' banner={Orginal_perfume} />} />
  <Route path='/Cart' element={<Cart/>}/>
  <Route path='/Product' element={<Product/>}>
<Route path=':Productid' element={<Product/>}/>
  </Route>

</Routes>
<Footer/>
     
    </div>
    </>
  )
}

export default App

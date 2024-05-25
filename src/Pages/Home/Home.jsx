import React from 'react'
import Banner from '../../Component/Banner/Banner'
import Popular_Items from '../../Component/Popular_Items/Popular_Items'
import ShopCategory from '../../Component/ShopCategory/ShopCategory'




const Home = () => {
  return (
    <div className='main-home'>
        <Banner/>
         <Popular_Items /> 
        <ShopCategory/>


    </div>
  )
}

export default Home

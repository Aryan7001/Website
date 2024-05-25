import React from 'react'
import './Search_bar.css'



const Search_bar = () => {


  return (
      <div className='nav-search'>
        <input className='input-text' type="text" placeholder='search here....' />
    <span class="material-symbols-outlined search_icon">search</span> 
    </div>
  )



}

export default Search_bar;

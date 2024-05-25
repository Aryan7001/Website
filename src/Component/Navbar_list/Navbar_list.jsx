import React, { useState } from 'react'
import './Navbar_list.css'
import {Link} from 'react-router-dom'


const Navbar_list = () => {

const[bar, setBar] = useState('Eye')

  return (
    <div className='nav-mains'>
      <div className='nav-list'>
<ul className='nav-names'>
<Link to = '/Eye'><li onClick={() => setBar('Eye')} className={bar === 'Eye' ? 'active' : ''}>Eye</li></Link>
<Link to = '/Lipstick'><li onClick={()=>setBar('Lipstick')} className={bar==='Lipstick'?'active':''}>Lipstick</li></Link>
<Link to = '/Face'><li onClick={()=>setBar('Face')} className={bar==='Face'?'active':''}>Face</li></Link>
<Link to = '/Foundation'><li onClick={()=>setBar('Foundation')} className={bar==='Foundation'?'active':''}>Foundation</li></Link>
<Link to = '/Perfume'><li onClick={()=>setBar('Perfume')} className={bar==='Perfume'?'active':''}>Perfume</li></Link>
<Link to = '/About'><li onClick={()=>setBar('About')} className={bar==='About'?'active':''}>About</li></Link>
<Link to = '/Contact'><li onClick={()=>setBar('Contact')} className={bar==='Contact'?'active':''}>Contact</li></Link>

</ul>
      </div>
    </div>
  )
}

export default Navbar_list

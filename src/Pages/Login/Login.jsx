import React, { useState } from 'react'

const Login = ({setLoggedIn}) => {

const[currentstate,setCurrentState] = useState('SignIn')

  return (
    <div className='main-login'>

<form className='form-main'>
   <p>{currentstate}</p>
<button onClick={()=>setLoggedIn(false)}>x</button>

<div className='login-list' >
<input type="text" placeholder='username' />
{currentstate==='SignIn' ? <input type=" Email" placeholder='Enter your EmailID' /> : null }
<input type="password" placeholder='password' />
</div>

<button>{currentstate}</button>

<div className='login-details'>
<input type="checkbox"  />
<p>Don't have anaccount? <span onClick={(currentstate)=>setCurrentState('SignIn')}>SignIn</span></p>
<p>Already have an account? <span onClick={(currentstate)=>setCurrentState('Login')}>Login</span></p>

</div>

</form>
</div>
      
  )
}

export default Login

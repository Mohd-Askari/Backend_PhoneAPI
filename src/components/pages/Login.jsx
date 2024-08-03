import React from 'react'
import '../Navbar/Log.css'
import { Link, Route } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = ({ setAuth })=> {
 
  const [username , setUserName] = useState('');
  const [password , setPassword] = useState('');
  const navigate = useNavigate();
  
   const handleSubmit = (e) =>{
    e.preventDefault();
    if(username === 'admin' && password === '12345678'){
      setAuth(true);
      navigate('/home');
    } else{
      alert('Invalid Username or Password')
    }
   };


  return (
    <>

<div className="containers vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#EBEBEB' }}>
  <div className="row w-100">
     <div className='loginFormSection align-items-center' >
       
       <div>
        <img
                  src="https://10.9.31.125/sipxconfig/skin/logo.png"
                  className="Limg-adjust  "
                  alt="Core IP Logo" 
        />
        </div>

        <div className='login-title'>
            Welcome to CoreIP Techonology
        </div>
        <div className='login-form'>
            <p style={{ fontSize: '14px', fontWeight: '300' }}>Please enter your username and password</p>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            id="username"
            value={username}
            // onChange={handleChange}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
           />
        </div>
        <div className="d-flex justify-content-center fs-6">
                <button type="submit" className="btn btn-secondary btn-lg">Login</button>
              </div>
      </form>

        </div>

      </div>
    </div>
</div>
  
    </>
  )
}

export default Login

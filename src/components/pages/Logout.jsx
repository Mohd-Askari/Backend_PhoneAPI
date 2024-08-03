import React from 'react'
import { useState } from 'react';
import '../Navbar/Log.css'

function Logout() {

            const [formData , setFormData] = useState({
              username: '',
              password: ''
          });
          const handleChange = (e) =>{
          const {name , value} = e.target;
          setFormData({
              ...formData,
              [name]:value
          });
          };

          // for string data inside new array to remove the value 
          const [ records , setRecords] = useState([]) 

          const handleSubmit =(e) =>{
          e.preventDefault();
          
          // console.log('Login form data:', formData);
          const newData = {...formData}

          setRecords([...records, newData]);
          console.log(records);

          setFormData({username:"",password:""});


          // handle form Submition logic here 
          }

 

  return (
    <>
       <div className="containers vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#EBEBEB' }}>
  <div className="row w-100">
     <div className='loginFormSection align-items-center' >
       
       <div>
        <img
                  src="https://10.9.31.125/sipxconfig/skin/logo.png"
                  className="img-adjust  "
                  alt="Core IP Logo" 
        />
        </div>

        <div className='login-title'>
            Welcome to CoreIP Techonology
        </div>
        <div className='login-form'>
            <p style={{ fontSize: '14px', fontWeight: '300' }}>Please enter your username and password</p>
        <form onClick={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            id="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            value={formData.password}
            onChange={handleChange}
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

export default Logout

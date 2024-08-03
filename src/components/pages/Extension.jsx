import React, { useState } from 'react';
import  '../Navbar/MStyle.css'

const Extension = () => {
  const [formData, setFormData] = useState({
    extension: '',
    username: '',
    password: '',
    date :''
     
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Add form submission logic here
    
  };

  return (
    <div className="container-fluid" >

      <div className="row">
       <div className="conten-container">
        <div className="sectionTitle">
          Add Extension
        </div>
       </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-sm-4 bg-light  py-2 my-3">
          {/* <h5 className="text-center">Add Extension</h5> */}
          
          <form onSubmit={handleSubmit}>
          
          <div className="form-group mb-3">
              <label htmlFor="extension" className="form-label">Extension:</label>
                 
                 <select
                  id="extension"
                  name="extension"
                  className="form-select"
                  value={formData.extension}
                  onChange={handleChange}
                  >
                  <option value="">Select Extension</option>
                  <option value="account">Account</option>
                  <option value="parameter">Parameter</option>
                  <option value="firmware">Firmware</option>
                </select>
                
            
            </div>

            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username:</label>
              <input
                type="text"
                name="username"
                className="form-control"
                id="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </div>

            <div className="mb-3 date-input-container">
              <label htmlFor="date" className="form-label">Schedule Time :</label>
              <input
                type="date"
                id="date"
                name="date"
                className="form-control"
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            

            <div className="mb-3 text-center">
              <button type="submit" className="btn btn-success">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Extension;

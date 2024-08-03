import React, { useState } from 'react';
import  '../Navbar/MStyle.css'
import axios from 'axios'

const FormData = () => {

  const [formData , setFormData] = useState({
    ip: '',
   display: '',
    line: '',
    password: '',
    gateway: '',
    sipline:''
  });
  // for storing data inside an array  make a new state 
const [records , setRecords] = useState([]);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name] : value
    });
  }; 

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    // Add form submission logic here
     const newData = {...formData } 
    

    setRecords([...records, newData])
     console.log(records);

     setFormData({ip:" ",display:" ",line:" ",password:" ",gateway:" ",sipline:" "})
  };
return(
    <>
     <div className="container-fluid">
      <div className="row">
       <div className="conten-container">
        <div className="sectionTitle">
          Form Data
        </div>
       </div>
      </div>

      <div className="row justify-content-center">
  <div className="col-sm-3 bg-light py-1 my-3">
    {/* <h5 className="text-center">Form Data</h5> */}
    <form onSubmit={handleSubmit}>
      <div className="mb-0">
        <label htmlFor="ip" className="form-label">IP:</label>
        <input
          type="text"
          name="ip"
          className="form-control form-control-sm"
          id="ip"
          value={formData.ip}
          onChange={handleChange}
          placeholder=""
        />
      </div>
      <div className="mb-0">
        <label htmlFor="display" className="form-label">Display :</label>
        <input
          type="text"
          name="display"
          className="form-control form-control-sm"
          id="display"
          value={formData.display}
          onChange={handleChange}
          placeholder=""
        />
      </div>
      <div className="mb-0">
        <label htmlFor="line" className="form-label">Line :</label>
        <input
          type="text"
          name="line"
          className="form-control form-control-sm"
          id="line"
          value={formData.line}
          onChange={handleChange}
          placeholder=""
        />
      </div>
      <div className="mb-0">
        <label htmlFor="password" className="form-label">Password:</label>
        <input
          type="password"
          name="password"
          className="form-control form-control-sm"
          id="password"
          value={formData.password}
          onChange={handleChange}
          placeholder=""
        />
      </div>
      <div className="mb-0">
        <label htmlFor="gateway" className="form-label">Gateway :</label>
        <input
          type="number"
          name="gateway"
          className="form-control form-control-sm"
          id="gateway"
          value={formData.gateway}
          onChange={handleChange}
          placeholder=""
        />
      </div>
      <div className="mb-0">
        <label htmlFor="sipline" className="form-label">Sipline:</label>
        <input
          type="number"
          name="sipline"
          className="form-control form-control-sm"
          id="sipline"
          value={formData.sipline}
          onChange={handleChange}
          placeholder=""
        />
      </div>
      <div className="mb-1 text-center">
        <button type="submit" className="btn btn-success btn-sm">Submit</button>
      </div>
    </form>
  </div>
</div>

    </div>

    
    </>
);
};
export default FormData
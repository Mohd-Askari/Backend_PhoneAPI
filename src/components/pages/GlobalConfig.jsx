// src/GlobalConfig.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const GlobalConfig = () => {
  const [formData, setFormData] = useState({
    sip_server: '',
    tftp: '',
    primary_dns: '',
    secondary_dns: ''
  });
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    axios
      .post('http://localhost:3000/users/global', formData)
      .then((response) => {
        console.log('Full API Response:', response);
        if (response.data) {
          setResponseData(response.data);
        } else {
          console.error('Unexpected data format:', response.data);
          setError('Unexpected data format');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      });
  };

  return (
    <div>
      <div className="row">
        <div className="conten-container">
          <div className="sectionTitle">
            SETTING
          </div>
        </div>
      </div>
      <div className="containers vh-50 d-flex justify-content-center">
        <div className="row w-50 my-3">
          <div className="col-md-6 offset-md-3 px-2">
            <div className="card p-4 bg-light">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="sip_server" className="form-label">SIP Server:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="sip_server"
                    name="sip_server"
                    value={formData.sip_server}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tftp" className="form-label">TFTP Server:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="tftp"
                    name="tftp"
                    value={formData.tftp}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="primary_dns" className="form-label">Primary DNS:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="primary_dns"
                    name="primary_dns"
                    value={formData.primary_dns}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="secondary_dns" className="form-label">Secondary DNS:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="secondary_dns"
                    name="secondary_dns"
                    value={formData.secondary_dns}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-success">Submit</button>
                </div>
              </form>
              {error && <div className="alert alert-danger mt-3">{error}</div>}
              {responseData && <div className="alert alert-success mt-3">Data submitted successfully!</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalConfig;

import React, { useState } from 'react';
import '../CSS/AddUser.css';
import '../Navbar/MStyle.css';
import axios from 'axios';

const AddNewUser = () => {
  const [formData, setFormData] = useState({
    port: '',
    line: '',
    username: '',
    password: '',
    voicemailPin: '',
    phone_model:'',
    firmware_v:'',
    network:'',
    mac_address: '',
    
    ip: '',
    sip_line: '',
    schedule: '',
    date: '',
    time: ''
  });

  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3000/users/', formData)
      .then((response) => {
        console.log('Full API Response:', response);
        if (response.data) {
          setResponseData(response.data);
          setError(null); // Clear any previous error
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

    <div className="containers">
      <div className="row">
        <div className="conten-container">
          <div className="sectionTitle">
            Users
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <form onSubmit={handleSubmit} className="form-data ">
            <div className="row g-3">
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="port"
                    id="port"
                    checked={formData.port}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">
                    Enable
                  </label>
                </div>
              </div>

              <div className="col-md-6">
                <label className="form-label">User ID:</label>
                <input
                  type="text"
                  className="form-control"
                  name="line"
                  id="line"
                  value={formData.line}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Username:</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">VoiceMail PIN:</label>
                <input
                  type="text"
                  className="form-control"
                  name="voicemailPin"
                  id="voicemailPin"
                  value={formData.voicemailPin}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label fs-small">Phone Model:</label>
                <input
                  type="text"
                  className="form-control input-small"
                  name="firmware_v"
                  // value={firmware_v}
                  readOnly
                />
              </div>

               <div className="col-md-6">
                <label className="form-label fs-small">Firmware Version:</label>
                <input
                  type="text"
                  className="form-control input-small"
                  name="firmware_v"
                  // value={firmware_v}
                  readOnly
                />
              </div>

                <div className="col-md-6">
                <label className="form-label fs-small">Network:</label>
                <input
                  type="text"
                  className="form-control input-small"
                  name="network"
                  value={formData.network}
                  onChange={handleChange}
                  required
                />
              </div>          

              <div className="col-md-6">
                <label className="form-label">Network:</label>
                <input
                  type="text"
                  className="form-control"
                  name="ip"
                  id="ip"
                  value={formData.ip}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Phone-Line:</label>
                <input
                  type="text"
                  className="form-control"
                  name="sip_line"
                  id="sip_line"
                  value={formData.sip_line}
                  onChange={handleChange}
                  required
                />
              </div>
              

              <div className="col-md-2">
                <label htmlFor="schedule" className="form-label">Schedule:</label>
                <select
                  className="form-select"
                  name="schedule"
                  id="schedule"
                  value={formData.schedule}
                  onChange={handleChange}
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              {formData.schedule === 'yes' && (
                <div className="col-md-6">
                  <label className="form-label">Select Date:</label>
                  <input
                    type=""
                    className="form-control"
                    name="date"
                    id="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                  <label className="form-label mt-2">Select Time:</label>
                  <input
                    type="time"
                    className="form-control"
                    name="time"
                    id="time"
                    value={formData.time}
                    onChange={handleChange}
                  />
                </div>
              )}

              <div className="col-12 text-center">
                <button type="submit" className="btn btn-success">Submit</button>
              </div>
            </div>
          </form>
          {error && <div className="alert alert-danger mt-3">{error}</div>}
          {responseData && <div className="alert alert-success mt-3">User added successfully!</div>}
        </div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  );
};

export default AddNewUser;

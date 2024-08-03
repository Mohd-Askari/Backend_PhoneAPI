
import React, { useState } from 'react';
import  '../Navbar/MStyle.css'

const TaskScheduler = () => {
  const [formData, setFormData] = useState({
    taskName: '',
    taskType: '',
    description: '',
    file: null,
    fileType: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    
  };

  return (
    <div class="container-fluid">
      <div className="row">
       <div className="conten-container">
        <div className="sectionTitle">
          Firmware Sheduler
        </div>
       </div>
      </div>
      <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4 bg-light my-3">
          {/* <h5 class="text-center">Firmware Scheduler</h5> */}
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label htmlFor="taskName" class="form-label">Task Name :</label>
              <input
                type="text"
                name="taskName"
                class="form-control"
                id="taskName"
                placeholder="IPPHONE"
                value={formData.taskName}
                onChange={handleChange}
              />
            </div>

            <div class="mb-3">
              <label htmlFor="taskType" class="form-label">Task Type :</label>
              {/* <input
                type="text"
                name="taskType"
                class="form-control"
                placeholder="Firmware Upgrade"
                value={formData.taskType}
                onChange={handleChange}
              /> */}
              <select
                  id="extension"
                  name="extension"
                  className="form-select"
                  value={formData.fileType}
                  onChange={handleChange}
                   >
                  <option value="">Select Extension</option>
                  <option value="account">Account</option>
                   </select>
                
            </div>

            <div class="mb-3">
              <label htmlFor="description" class="form-label">Description:</label>
              <textarea
                id="description"
                name="description"
                rows="4"
                class="form-control"
                placeholder="I want to make a schedule to Upgrade Firmware..."
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>

            <div class="mb-3">
              <div class="row">
                <label htmlFor="file" class="form-label">Firmware File :</label>
                <div class="col-sm-8">
                  <div class="custom-file-upload">
                    <input
                      type="file"
                      id="file"
                      name="file"
                      class="form-control"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="col-sm-4">
                  <select
                    id="fileType"
                    name="fileType"
                    class="form-control"
                    value={formData.fileType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Account</option>
                    <option value="parameter">Parameter</option>
                    <option value="firmware">Firmware</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="mb-3 date-input-container">
              <label htmlFor="date" class="form-label">Schedule Time :</label>
              <input
                type="date"
                id="date"
                name="date"
                class="form-control"
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            <div class="mb-3 text-center">
              <button type="submit" class="btn btn-success">Add Task</button>
            </div>
          </form>
        </div>
        <div class="col-sm-4"></div>
      </div>
    </div>
  );
};

export default TaskScheduler;

import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import '../CSS/AddUser.css'
import { useNavigate } from 'react-router-dom';
import { da } from 'date-fns/locale';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default function UserList() {
  const navigate=useNavigate();

  const [data,setData]=useState([]);
  const[err,errdata]=useState([]);

  useState(()=>{
    axios.get("http://localhost:3000/users/data").then((response)=>{
      console.log("Response Api:",response.data);
      if(response.data){
        setData(response.data.users);
      }
      else{
        console.log("user are not fetching data");
      }
    }).catch((err)=>{
      console.log(err);
    })
  })

  const columns = [
  // {
  //   name: 'Enable',
  //   selector: row => row.line,
  //   sortable: true,
  // },
  {
    name: 'UserID',
    selector: row => row.username,
    sortable: true,
  },
  {
    name: 'Username',
    selector: row => row.password,
    sortable: true,
  },
  {
    name: 'Schedule',
    selector: row => row.date,
    sortable: true,
  },
  {
    name: 'Registered IP',
    selector: row => row.ip,
    sortable: true,
  },

  // {
  //   name: 'phoneModel',
  //   selector: row => row.phone_model,
  //   sortable: true,
  // },
  {
    name: 'mac_address',
    selector: row => row.mac_address,
    sortable: true,
  },
  {
    name:"Status",
    selector:row=>"Ok",
  },
  // {
  //   name: 'network',
  //   selector: row => row.ip,
  //   sortable: true,
  // },
  // {
  //   name: 'firmwareVersion',
  //   selector: row => row.tftp,
  //   sortable: true,
  // },
  // {
  //   name: 'schedule',
  //   selector: row => row.tftp,
  //   sortable: true,
  // },
 
];


  const customStyles = {
    rows: {
      style: {
        minHeight: '10px', 
      },
    },
    headCells: {
      style: {
        padding: '2px', 
      },
    },
    cells: {
      style: {
        padding: '4px', 
      },
    },
  };

  

  return (
     
    <div className="container-fluid" >
      <div className="row">
      <div className="conten-container">
        <div className="sectionTitle">
          Users List
        </div>
       </div>
      </div>
      <div className="row "  style={{ boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.24)' }}>
        <div className="col-sm-3"> </div>
        <div className="col-sm-6 my-4"style={{ border: '2px solid black', padding: '10px' }}>
        <div className="row " id="table-row" style={{ borderBottom: '1px solid black', marginBottom: '10px' }}>
      <div className="d-flex justify-content-between mb-3 w-100">
      <div className="d-flex " >
            <h5 className="me-2"style={{ fontSize: '14px'}}>Total Users: 100 </h5>
            <h5 className="me-3"style={{ fontSize: '14px' }}>Registered Users:57</h5>
            <h5 style={{ fontSize: '14px' }}>Unregistered Users: 43</h5>
          </div>
        <button className="btn btn-success" onClick={()  => navigate('/add-new-user')}>Add New User</button>
      </div>
    </div>
      
       <div className="row " >
        <DataTable 
      
        columns={columns} 
        data={data}
        pagination
        highlightOnHover
        striped
        customStyles={customStyles}
        />
       </div>
       
        </div>
        <div className="col-sm-3"> </div>
      </div>
    
  </div>

  );
}
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// // import './TableComponent.css'; // Optional: for custom styles

//export default function BasicTable() {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);
  

//   useEffect(() => {
//     axios
//       .get('http://localhost:3000/users/data')
//       .then((response) => {
//         console.log('Full API Response:', response);

//         // Access the 'users' array within the response data
//         if (response.data && Array.isArray(response.data.users)) {
//           setData(response.data.users);
//         } else {
//           console.error('Unexpected data format:', response.data);
//           setError('Unexpected data format');
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data');
//       });
//   }, []);

//   return (
    
//     <div class="containers">
//     <div className="row">
//     <div className="conten-container">
//       <div className="sectionTitle">Schedule List</div>
//     </div>
//   </div>
//   <div className="row my-4">
//   <div className='col-sm-2'></div>
//   <div className='col-sm-8'>
//   {error && <div className="error">{error}</div>}
//     <table className="table  table-striped border">
//       <thead className='table'>
//         <tr>
       
//           <th scope="col">ip_address</th>
//           <th scope="col">line</th>
//           <th scope="col">port</th>
//           <th scope="col">username</th>
//           <th scope="col">password</th>
//           <th scope="col">date</th>
//           <th scope="col">time</th>
//           <th scope="col">sipline</th>

//         </tr>
//       </thead>
//       <tbody>
//         {data.length > 0 ? (
//           data.map((item, index) => (
//             <tr key={index}>
//               <td scope="row" href='/'>{item.ip}</td>
//               <td href='/'>{item.line}</td>
//               <td>{item.port}</td>
//               <td>{item.username}</td>
//               <td>{item.password}</td>
//               <td>{item.date}</td>
//               <td>{item.time}</td>
//               <td>{item.sipline}</td>
//             </tr>
//           ))
//         ) : (
//           <tr>
//             <td colSpan="4">No data available</td>
//           </tr>
//         )}
//       </tbody>
//     </table>
//   </div>
//     <div>
//   </div>
//   <div className='col-sm-2'></div>
  
   
//   </div>
//   </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

export default function BasicTable() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3000/users/data')
      .then((response) => {
        console.log('Full API Response:', response);
        if (response.data && Array.isArray(response.data.users)) {
          setData(response.data.users);
        } else {
          console.error('Unexpected data format:', response.data);
          setError('Unexpected data format');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      });
  }, []);

  // const columns = [
  //   { name: 'IP Address', selector: row => row.ip, sortable: true },
  //   { name: 'Line', selector: row => row.line, sortable: true },
  //   { name: 'Port', selector: row => row.port, sortable: true },
  //   { name: 'Username', selector: row => row.username, sortable: true },
  //   { name: 'Password', selector: row => row.password, sortable: true },
  //   { name: 'Date', selector: row => row.date, sortable: true },
  //   { name: 'Time', selector: row => row.time, sortable: true },
  //   { name: 'SIP Line', selector: row => row.sipline, sortable: true },
  // ];

  return (
    <div className="containers">
      <div className="row">
        <div className="conten-container">
          <div className="sectionTitle">Schedule List</div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          {error && <div className="error">{error}</div>}
          <DataTable
            columns={columns}
            data={data}
            pagination
            highlightOnHover
            striped
          />
        </div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  );
}

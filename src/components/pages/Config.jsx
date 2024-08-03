import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

export default function Config() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3000/users/globallist')
      .then((response) => {
        console.log('Full API Response:', response);
        if (response.data && Array(response.data.users)) {
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


//  check Static data

// const data = [
//     { id: 1, ip: '192.168.1.1', line: 'Line1', status: "ok", username: '201', password: 'pass1', date: '2024-07-31', sipline: 'SIP1' },
//     { id: 2, ip: '192.168.1.2', line: 'Line2', status: "ok", username: '202', password: 'pass2', date: '2024-07-31', sipline: 'SIP2' },
//     { id: 1, ip: '192.168.1.1', line: 'Line1', status: "", username: '203', password: 'pass1', date: '2024-07-31', sipline: 'SIP1' },
//     { id: 2, ip: '192.168.1.2', line: 'Line2', status: "pending", username: '204', password: 'pass2', date: '2024-07-31', sipline: 'SIP2' },
//     { id: 1, ip: '192.168.1.1', line: 'Line1', status: "ok", username: '201', password: 'pass1', date: '2024-07-31', sipline: 'SIP1' },
//     { id: 2, ip: '192.168.1.2', line: 'Line2', status: "ok", username: '202', password: 'pass2', date: '2024-07-31', sipline: 'SIP2' },
//     { id: 1, ip: '192.168.1.1', line: 'Line1', status: "", username: '203', password: 'pass1', date: '2024-07-31', sipline: 'SIP1' },
//     { id: 2, ip: '192.168.1.2', line: 'Line2', status: "pending", username: '204', password: 'pass2', date: '2024-07-31', sipline: 'SIP2' },
//     { id: 1, ip: '192.168.1.1', line: 'Line1', status: "ok", username: '201', password: 'pass1', date: '2024-07-31', sipline: 'SIP1' },
//     { id: 2, ip: '192.168.1.2', line: 'Line2', status: "ok", username: '202', password: 'pass2', date: '2024-07-31', sipline: 'SIP2' },
//     { id: 1, ip: '192.168.1.1', line: 'Line1', status: "", username: '203', password: 'pass1', date: '2024-07-31', sipline: 'SIP1' },
//     { id: 2, ip: '192.168.1.2', line: 'Line2', status: "pending", username: '204', password: 'pass2', date: '2024-07-31', sipline: 'SIP2' },
   
//     // Add more static data objects as needed
//   ];

//   // Define columns
  // const columns = [
  //   { name: 'SIP Server', selector: row =>row.ip,sortable: true },
  //   { name: 'TFTP Server', selector: row => row.line, sortable: true },
  //   { name: 'Primary DNS', selector: row => row.status, sortable: true },
  //   { name: 'Secondary DNS', selector: row => row.secondaryDNS, sortable: true },
  // ];

//   const customStyles = {
//     rows: {
//       style: {
//         minHeight: '10px', 
//       },
//     },
//     headCells: {
//       style: {
//         padding: '2px', 
//       },
//     },
//     cells: {
//       style: {
//         padding: '4px', 
//       },
//     },
//   };


const columns = [
  {
    name: 'SIP Server',
    selector: row => row.sip_server,
    sortable: true,
  },
  {
    name: 'Primary DNS',
    selector: row => row.primary_dns,
    sortable: true,
  },
  {
    name: 'Secondary DNS',
    selector: row => row.secondary_dns,
    sortable: true,
  },
  {
    name: 'TFTP',
    selector: row => row.tftp,
    sortable: true,
  },
 
];

return (
  <div className="row my-2">
    {error ? (
      <div>Error: {error}</div>
    ) : (
      <DataTable
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        striped
      />
    )}
  </div>
);

}

//   return (
    
//     <div>
//       <div className="row">
//         <div className="content-container">
//           <div className="sectionTitle">
//             Server List
//           </div>
//         </div>
//       </div>
//       <div className="container">
//         <div className="row">
//           <div id="">
        
//               <div className="row my-2">
//                 <DataTable
//                   columns={columns}
//                   data={data}
//                   pagination
//                   highlightOnHover
//                   striped
                
//                 />
//               </div>
         
        
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






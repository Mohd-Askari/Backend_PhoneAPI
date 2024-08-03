import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ExtTable() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = 'b71d0808cd1154f2f87ea1fac1ace83a';
    axios
      .get(`https://10.9.31.203/API/ext_query?token=${token}`)
      .then((response) => {
        console.log('Full API Response:', response);

        // Access the 'extinfo' array within the response data
        if (response.data && Array.isArray(response.data.extinfo)) {
          setData(response.data.extinfo);
        } else {
          console.error('Unexpected data format:', response.data);
        //   setError('Unexpected data format');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      });
  }, []);

  return (
    <div className="containers">
      <div className="row">
        <div className="conten-container">
          <div className="sectionTitle">Extension List</div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <div>
            {error && <div className="error">{error}</div>}
            <table className="table  table-striped border">
            <thead className='table- $blue-100'>
                <tr>
                  <th scope="col">Extension</th>
                  <th scope="col">Name</th>
                  <th scope="col">Outbound Restriction</th>
                  <th scope="col">Type</th>
                  <th scope="col">Call Group</th>
                  <th scope="col">DND</th>
                  <th scope="col">Enabled</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 ? (
                  data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.extension}</td>
                      <td>{item.username}</td>
                      <td>{item.outbound_restriction}</td>
                      <td>{item.extension_type}</td>
                      <td>{item.call_group}</td>
                      <td>{item.do_not_disturb}</td>
                      <td>{item.enabled}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7">No data available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

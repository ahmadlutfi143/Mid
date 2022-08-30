import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css"

const URL = "https://prodev-api.ilcs.co.id/ibis_api_external_dev_v2/index.php/SingleBilling/getVessel?keyword=S&port=IDJKT-T009D";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(URL);
    console.log(response.data.data);
    setData(response.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Call Sign</th>
              <th scope="col">Vessel Name</th>
              <th scope="col">Voyage</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val, id) => (
              <tr key={id}>
                <td>{id + 1}</td>
                <td>{val.call_sign}</td>
                <td>{val.vessel_name}</td>
                <td>{val.voyage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App;
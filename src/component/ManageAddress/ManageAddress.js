import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ManageAddress() {
  const [addressList, setAddressList] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;
  const port = process.env.REACT_APP_API_PORT;

  const fetchAddressList = async () => {
    try {
      const response = await axios.get(`${apiUrl}:${port}/address`);
      setAddressList(response.data);
    } catch (error) {
      console.log(error.error);
    }
  };
  useEffect(() => {
    fetchAddressList();
  }, []);

  if (!addressList) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <h1>Deliver to...</h1>
      <Link to={"/add-address"}>
        <p>New address</p>
      </Link>
      <Link>
        <p>Current location</p>
      </Link>
      <ul>
        {addressList.map((address) => {
          return (
            <li>
              <img></img>
              <div>
                <p>
                  {address.apartment_number}
                  {` ${address.streetname}`}
                </p>
                <p>{address.city}</p>
                <p>{address.postcode}</p>
              </div>
            </li>
          );
        })}
        <li></li>
      </ul>
    </main>
  );
}

export default ManageAddress;

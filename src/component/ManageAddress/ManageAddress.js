import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ManageAddress.scss";
import location from "../../assets/icons/location-marker.svg";

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
    <main className="manage-addresses">
      <h1 className="manage-addresses__title">Deliver to...</h1>
      <Link to={"/add-address"} className="manage-addresses__link">
        <p>New address</p>
      </Link>
      <Link to={"#"} className="manage-addresses__link">
        <p>Current location</p>
      </Link>
      <ul className="manage-addresses__list">
        {addressList.map((address) => {
          return (
            <li onClick={null} className="manage-addresses__list-item">
              <img src={location}></img>
              <div>
                <p className="manage-addresses__list-text">
                  {address.apartment_number}
                  {` ${address.streetname}`}
                </p>
                <p className="manage-addresses__list-text">{address.city}</p>
                <p className="manage-addresses__list-text">
                  {address.postcode}
                </p>
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

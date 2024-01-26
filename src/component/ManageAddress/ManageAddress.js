import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ManageAddress.scss";
import location from "../../assets/icons/location-marker.svg";
import currentLocation from "../../assets/icons/location.svg";
import plus from "../../assets/icons/plus.svg";

function ManageAddress({
  handleClickAddress,
  handleAddressClicl,
  setNewAddress,
}) {
  const [addressList, setAddressList] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;
  const port = process.env.REACT_APP_API_PORT;

  console.log(apiUrl);

  const fetchAddressList = async () => {
    try {
      console.log(`http://localhost:8080/address`);
      const response = await axios.get(`http://localhost:8080/address`);
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
      <div className="manage-addresses-header">
        <h1 className="manage-addresses__title">Deliver to...</h1>
        <a
          onClick={() => {
            setNewAddress(true);
          }}
          className="manage-addresses__link"
        >
          <img className="manage-addresses__current-location" src={plus} />
          <p className="manage-addresses__link-content">New address</p>
        </a>
        <Link to={"#"} className="manage-addresses__link--current">
          <img
            className="manage-addresses__current-location"
            src={currentLocation}
          />
          <p className="manage-addresses__link-content">Current location</p>
        </Link>
      </div>

      <ul className="manage-addresses__list">
        {addressList.map((address) => {
          return (
            <li
              onClick={() => {
                handleClickAddress(address);
              }}
              className="manage-addresses__list-item"
            >
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

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./AddAddress.scss";

function AddAddress() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const port = process.env.REACT_APP_API_PORT;
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newAddress = {
      name: event.target.name.value,
      apartment_number: event.target.apartment_number.value,
      streetname: event.target.streetname.value,
      city: event.target.city.value,
      postcode: event.target.postcode.value,
      phone: event.target.phone.value,
    };
    setTimeout(() => {
      navigate("/checkout");
    }, 500);
    try {
      await axios.post(`${apiUrl}:${port}/address`, newAddress);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="add-address">
      <header className="add-address__header">
        <h1 className="add-address__title">Confirm the deliveree’s address</h1>
        <p className="add-address__subtitle">
          This is where we’ll deliver your orders – take a moment to make sure
          it’s accurate
        </p>
      </header>

      <form onSubmit={handleSubmit} className="add-address__form">
        <div className="add-address__inputs">
          <div className="add-address__input-container">
            <label className="add-address__input-title">
              Name of deliveree
            </label>
            <input name="name" className="add-address__input"></input>
          </div>
          <label className="add-address__input-title">
            Apartment (optional)
          </label>
          <input name="apartment_number" className="add-address__input"></input>
          <label className="add-address__input-title">Street address</label>
          <input name="streetname" className="add-address__input"></input>
          <label className="add-address__input-title">City/town</label>
          <input name="city" className="add-address__input"></input>
          <label className="add-address__input-title">Postcode</label>
          <input name="postcode" className="add-address__input"></input>
          <div className="add-address__input-container">
            <label className="add-address__input-title">Phone number </label>
            <input name="phone" className="add-address__input"></input>
          </div>
        </div>
        <button className="add-address__button" type="submit">
          Confirm New Address
        </button>
      </form>
    </main>
  );
}

export default AddAddress;

import "./Checkout.scss";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import backArrow from "../../assets/icons/arrow-left.svg";
import map from "../../assets/images/checkout_map.png";

function Checkout() {
  const [state, setState] = useState({
    gift_message: "",
  });

  const handleChanges = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <>
      <section className="checkout">
        <div className="checkout__delivery-details">
          <NavLink to="/">
            <img
              src={backArrow}
              alt=""
              className="checkout__delivery-details--backarrow"
            />
          </NavLink>
          <div className="checkout__delivery-details--heading">
            <h4 className="checkout__delivery-details--title">Deliver to</h4>
            <p className="checkout__delivery-details--edit-address">
              Edit address
            </p>
          </div>
          <p className="checkout__delivery-details--address">Samantha</p>
          <p className="checkout__delivery-details--address">
            55-57 Rivington Street
          </p>
          <p className="checkout__delivery-details--address">EC2A 3QA</p>
        </div>
        <div className="checkout__gift">
          <div className="checkout__gift-text">
            <p className="checkout__gift-title">This is a gift</p>
            <p className="checkout__gift-subtitle">
              Transform the order experience for the deliveree
            </p>
          </div>
          <div className="checkout__gift-checkbox--container">
            <input
              type="checkbox"
              id="gift"
              name="gift"
              className="checkout__gift-checkbox"
            />
          </div>
        </div>
        <form className="gift">
          {/* Add submitHandler after you make the backend */}
          <div className="gift-message--container">
            <p className="gift-message--title">Add a personalised note</p>
            <input
              name="gift_message"
              className="gift-message"
              value={state.gift_message}
              onChange={handleChanges}
            />
          </div>
          <div className="gift__secret-container">
            <div className="gift__secret-text">
              <p className="gift__secret-title">Keep the gift a surprise?</p>
              <p className="gift__secret-subtitle">
                When unticked the deliveree would see the details of the item(s)
              </p>
            </div>
            <div className="gift__secret-checkbox--container">
              <input
                type="checkbox"
                id="gift"
                name="gift"
                className="gift__secret-checkbox"
              />
            </div>
          </div>
          <div className="checkout__map">
            <img src={map} alt="" className="checkout__map-img" />
          </div>
          <div className="order">
            <div className="order__details">
              <p className="order">Order</p>
              <p className="order__price">£64.99</p>
            </div>
            <div className="order__button-container">
              <a href="/" className="order__button">
                Apple Pay
              </a>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Checkout;

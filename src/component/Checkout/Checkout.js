import "./Checkout.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import backArrow from "../../assets/icons/arrow-left.svg";

function Checkout() {
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
          <h4 className="checkout__delivery-details--title">Deliver to</h4>
          <p className="checkout__delivery-details--address">Samantha</p>
          <p className="checkout__delivery-details--address">
            55-57 Rivington Street
          </p>
          <p className="checkout__delivery-details--address">EC2A 3QA</p>
        </div>
        <div className="checkout__gift">
          <p className="checkout__gift-title">This is a gift</p>
        </div>
      </section>
    </>
  );
}

export default Checkout;

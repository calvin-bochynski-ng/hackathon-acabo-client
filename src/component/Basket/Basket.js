import React from "react";
import "./Basket.scss";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import backArrow from "../../assets/icons/arrow-left.svg";
import deliverySettings from "../../assets/images/delivery-settings.jpg";
import unavailableItems from "../../assets/images/if-items-are-unavailable.jpg";

const Basket = ({ selectedItems }) => {
  let sum = 0;
  let array = selectedItems.map((item) => item.price);

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return (
    <>
      <section className="basket">
        <div className="basket__header">
          <NavLink to="/">
            <img src={backArrow} alt="" className="basket__header-backarrow" />
          </NavLink>
          <div className="basket__header-text--container">
            <p className="basket__header-title">Basket</p>
            <p className="basket__header-subtitle">
              Whole Foods Market · Stoke Newington
            </p>
          </div>
        </div>
        <div className="delivery">
          <img src={deliverySettings} alt="" className="delivery__img" />
          <img src={unavailableItems} alt="" className="delivery__img" />
        </div>
        <div className="items">
          <p className="items__title">Gift Items</p>
          {selectedItems.map((item) => {
            return (
              <ul className="item__list-container" key={item.id}>
                <li className="item__list">
                  <p className="item__title">{item.name}</p>
                  <p className="item__price">£{item.price}</p>
                </li>
              </ul>
            );
          })}
        </div>

        <div className="total">
          <p className="total__text">Total:</p>
          <p className="total__price">£{sum}</p>
        </div>

        <Link to="/checkout" className="button-container-box">
          <div className="button-container">
            <button className="button">Checkout</button>
          </div>
        </Link>
      </section>
    </>
  );
};

export default Basket;

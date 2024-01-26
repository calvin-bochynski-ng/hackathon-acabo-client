import React from "react";
import "./Basket.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import backArrow from "../../assets/icons/arrow-left.svg";
import deliverySettings from "../../assets/images/delivery-settings.jpg";
import unavailableItems from "../../assets/images/if-items-are-unavailable.jpg";

const Basket = ({ selectedItems }) => {
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
              <ul className="item__list-container">
                <li className="item__list" key={item.id}>
                  <p className="item__title">{item.name}</p>
                  <p className="item__price">£{item.price}</p>
                </li>
              </ul>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Basket;

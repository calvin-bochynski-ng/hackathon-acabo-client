import React from "react";
import "./Basket.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import backArrow from "../../assets/icons/arrow-left.svg";

function Basket() {
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
      </section>
    </>
  );
}

export default Basket;

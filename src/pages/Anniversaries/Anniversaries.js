import "./Anniversaries.scss";
import backArrow from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import { Link } from "react-router-dom";
import celebration from "../../assets/images/anniversaries-champagne.png";
import shopList from "../../data/shopList.json";
import Footer from "../../component/Footer/Footer";
import { useState } from "react";
import waitrose from "../../assets/images/waitrose-gifts.jpg";
import ModalAddress from "../../component/ModalAddress/ModalAddress";

const Anniversaries = () => {
  const [selectedItems, setSelectedItems] = useState("");
  const [isAddressClick, setIsAddressClick] = useState(false);

  const handleClick = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  const handleAddressClicl = () => {
    setIsAddressClick(true);
  };

  return (
    <>
      {!isAddressClick ? "" : <ModalAddress />}
      <header className="gifts">
        <Link to="/gifts">
          <img src={backArrow} alt="" className="gifts__img" />
        </Link>
        <h1 className="gifts__title">Anniversaries</h1>
        <h3 className="gifts__description">
          Get something special for a special someone
        </h3>
        <img src={celebration} alt="" className="anniversaries__background" />
      </header>
      <section className="manage-address">
        <p className="manage-address__description">Sending to someone else?</p>
        <button className="manage-address__button" onClick={handleAddressClicl}>
          Manage gift addresses
        </button>
      </section>
      <main className="anniversary">
        <article className="shop">
          <div className="shop__container">
            <div className="shop__img-container">
              <img
                src="https://images.unsplash.com/photo-1532079563951-0c8a7dacddb3?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="shop__img"
              />
              <div className="shop_text-container">
                <h3 className="shop__title">Whole Foods Market</h3>
                <p className="shop__description">
                  5-15 min &#183; Free delivery
                </p>
              </div>
            </div>
            <img src={arrowRight} alt="" className="gifts__img" />
          </div>
          <section className="shopList">
            {shopList.map((item) => {
              return (
                <div className="item" key={item.id}>
                  <img src={item.image} alt={item.name} className="item__img" />
                  <p className="item__title">{item.name}</p>
                  <p className="item__price">£{item.price}</p>
                  <button
                    className="item__button"
                    onClick={() => {
                      handleClick(item);
                    }}
                  >
                    +
                  </button>
                </div>
              );
            })}
          </section>
        </article>
        <img src={waitrose} alt="" className="filler" />
      </main>

      {!selectedItems ? "" : <Footer selectedItems={selectedItems} />}
    </>
  );
};
export default Anniversaries;

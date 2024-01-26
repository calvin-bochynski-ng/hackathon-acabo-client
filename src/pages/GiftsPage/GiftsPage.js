import "./GiftsPage.scss";
import backArrow from "../../assets/icons/arrow-left.svg";
import { Link } from "react-router-dom";
import occasionJSON from "../../data/occasion.json";
import giftBox from "../../assets/images/giftbox.png";
import florists from "../../assets/images/florists near you.jpg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import ModalAddress from "../../component/ModalAddress/ModalAddress";

const GiftsPage = ({
  handleAddressClicl,
  isAddressClick,
  handleClickAddress,
  address,
}) => {
  return (
    <>
      {!isAddressClick ? (
        ""
      ) : (
        <ModalAddress handleClickAddress={handleClickAddress} />
      )}
      <header className="gifts">
        <Link to="/">
          <img src={backArrow} alt="" className="gifts__img" />
        </Link>
        <h1 className="gifts__title">Gifts</h1>
        <h3 className="gifts__description">
          Explore gifts to shop now, or send straight to someone’s door
        </h3>
        <img src={giftBox} alt="" className="gifts__background" />
      </header>
      <section className="manage-address">
        <p className="manage-address__description">
          {!address ? "Sending to someone else?" : `Sending to ${address.name}`}
        </p>
        <button className="manage-address__button" onClick={handleAddressClicl}>
          {!address ? "Manage gift addresses" : `Change`}
        </button>
      </section>
      <main className="main">
        <h4 className="main__title">Celebrate, treat or care for a friend!</h4>
        <section className="occasion">
          {occasionJSON.map((occasion) => {
            return (
              <Link
                to={`/${occasion.occasion}`}
                className="occasion__container"
                key={occasion.id}
              >
                <img
                  src={occasion.image}
                  alt={occasion.occasion}
                  className="occasion__img"
                />
                <p className="occasion__title">{occasion.occasion}</p>
              </Link>
            );
          })}
        </section>
        <div className="shop__container">
          <div className="shop__img-container">
            <img
              src="https://images.unsplash.com/photo-1532079563951-0c8a7dacddb3?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="shop__img"
            />
            <div className="shop_text-container">
              <h3 className="shop__title">Whole Foods Market</h3>
              <p className="shop__description">5-15 min &#183; Free delivery</p>
            </div>
          </div>
          <img src={arrowRight} alt="" className="gifts__img" />
        </div>
        <img src={florists} alt="" className="main__img" />
      </main>
    </>
  );
};
export default GiftsPage;

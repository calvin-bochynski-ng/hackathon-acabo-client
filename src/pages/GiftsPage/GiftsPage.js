import "./GiftsPage.scss";
import backArrow from "../../assets/icons/arrow-left.svg";
import { Link } from "react-router-dom";
import occasionJSON from "../../data/occasion.json";

const GiftsPage = () => {
  return (
    <>
      <header className="gifts">
        <Link to="/">
          <img src={backArrow} alt="" className="gifts__img" />
        </Link>
        <h1 className="gifts__title">Gifts</h1>
        <h3 className="gifts__description">
          Explore gifts to shop now, or send straight to someone’s door
        </h3>
      </header>
      <section className="manage-address">
        <p className="manage-address__description">Sending to someone else?</p>
        <button className="manage-address__button">
          Manage gift addresses
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
      </main>
    </>
  );
};
export default GiftsPage;

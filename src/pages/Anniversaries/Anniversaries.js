import "./Anniversaries.scss";
import backArrow from "../../assets/icons/arrow-left.svg";
import { Link } from "react-router-dom";
const Anniversaries = () => {
  return (
    <>
      <header className="gifts">
        <Link to="/gifts">
          <img src={backArrow} alt="" className="gifts__img" />
        </Link>
        <h1 className="gifts__title">Anniversaries</h1>
        <h3 className="gifts__description">
          Get something special for a special someone
        </h3>
      </header>
      <section className="manage-address">
        <p className="manage-address__description">Sending to someone else?</p>
        <button className="manage-address__button">
          Manage gift addresses
        </button>
      </section>
      <main className="anniversary">
        <article>
          <div>
            <img src="" alt="" />
            <div>
              <h3 className="shop__title">Whole Foods Market</h3>
              <p className="shop__description">5-15 min &#183; Free delivery</p>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};
export default Anniversaries;

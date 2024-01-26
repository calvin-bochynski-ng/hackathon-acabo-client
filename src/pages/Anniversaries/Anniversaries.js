import "./Anniversaries.scss";
import backArrow from "../../assets/icons/arrow-left.svg";
const Anniversaries = () => {
  return (
    <>
      <header className="gifts">
        <img src={backArrow} alt="" className="gifts__img" />
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
    </>
  );
};
export default Anniversaries;

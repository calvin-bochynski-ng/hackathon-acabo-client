import "./GiftRecieveModal.scss";
import { Link } from "react-router-dom";
import close from "../../assets/icons/close-24px.svg";
import champagne from "../../assets/images/anniversaries-champagne.png";
import { useWindowSize } from "@uidotdev/usehooks";
import Confetti from "react-confetti";

const GiftRecieveModal = ({ handleClose }) => {
  const { width, height } = useWindowSize();
  return (
    <section className="gift-modal__container">
      <Confetti width={width} height={height} />
      <div className="gift-modal">
        <div className="gift-modal__header">
          <img
            src={close}
            alt=""
            className="gift-modal__img"
            onClick={handleClose}
          />
          <img src={champagne} alt="" className="gift-modal__background" />
        </div>
        <div className="gift-modal__text-container">
          <div className="gift-modal__terms">
            <h1 className="gift-modal__title">Enjoy Your Gift!</h1>
            <p className="gift-modal__description">
              Personalised mesaages goes here! hello, enjoy your gift!
            </p>
            <p className="gift-modal__description">
              Get 15% off your first gift and later receive £5.00 credit for
              when your friend re-gifts you!
            </p>
            <p className="gift-modal__description gift-modal__description--minor">
              T&Cs apply
            </p>
          </div>

          <div className="gift-modal__button-container">
            <Link
              to="/gifts"
              className="gift-modal__button"
              onClick={handleClose}
            >
              <button className="gift-modal__button">Start Gifting!</button>
            </Link>
            <button className="gift-modal__cancel" onClick={handleClose}>
              Not now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GiftRecieveModal;

import "./Modal.scss";
import { Link } from "react-router-dom";
import close from "../../assets/icons/close-24px.svg";

const Modal = ({ handleClose }) => {
  return (
    <section className="modal__container">
      <div className="modal">
        <div className="modal__header">
          <img
            src={close}
            alt=""
            className="modal__img"
            onClick={handleClose}
          />
        </div>
        <div className="modal__text-container">
          <div className="modal__terms">
            <h1 className="modal__title">Treat Your Friend!</h1>
            <p className="modal__description">
              Get 15% off your first gift and later receive £5.00 credit for
              when your friend re-gifts you!
            </p>
            <p className="modal__description modal__description--minor">
              T&Cs apply
            </p>
          </div>

          <div className="modal__button-container">
            <Link to="/gift" className="modal__button" onClick={handleClose}>
              <button className="modal__button">Start Gifting!</button>
            </Link>
            <button className="modal__cancel" onClick={handleClose}>
              Not now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Modal;

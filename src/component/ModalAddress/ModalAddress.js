import "./ModalAddress.scss";
import { Link } from "react-router-dom";
import close from "../../assets/icons/close-24px.svg";
import ManageAddress from "../ManageAddress/ManageAddress";

const ModalAddress = ({ handleClose }) => {
  return (
    <section className="modal__container">
      <div className="modal">
        <ManageAddress />
      </div>
    </section>
  );
};
export default ModalAddress;

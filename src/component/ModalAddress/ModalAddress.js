import "./ModalAddress.scss";
import { Link } from "react-router-dom";
import close from "../../assets/icons/close-24px.svg";
import ManageAddress from "../ManageAddress/ManageAddress";

const ModalAddress = ({ handleClose, handleClickAddress }) => {
  return (
    <section className="modal-address__container">
      <div className="modal-address">
        <ManageAddress handleClickAddress={handleClickAddress} />
      </div>
    </section>
  );
};
export default ModalAddress;

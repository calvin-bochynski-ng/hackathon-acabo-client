import "./ModalAddress.scss";
import { Link } from "react-router-dom";
import ManageAddress from "../ManageAddress/ManageAddress";
import AddAddress from "../AddAddress/AddAddress";
import { useState } from "react";

const ModalAddress = ({
  handleClose,
  handleClickAddress,
  setAddress,
  handleAddressClicl,
  setIsAddressClick,
}) => {
  const [newAddress, setNewAddress] = useState(false);

  return (
    <section className="modal-address__container">
      <div className="modal-address">
        {!newAddress ? (
          <ManageAddress
            handleClickAddress={handleClickAddress}
            setNewAddress={setNewAddress}
          />
        ) : (
          <AddAddress
            setAddress={setAddress}
            handleAddressClicl={handleAddressClicl}
            setIsAddressClick={setIsAddressClick}
          />
        )}
      </div>
    </section>
  );
};
export default ModalAddress;

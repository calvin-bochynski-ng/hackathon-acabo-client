import "./ConfirmedOrder.scss";
import orderImg from "../../assets/images/ConfirmedOrder.svg";
import { useNavigate } from "react-router-dom";

function ConfirmedOrder() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/giftmodal");
  }, 10000);
  return (
    <div>
      <img className="filler" src={orderImg}></img>
    </div>
  );
}

export default ConfirmedOrder;

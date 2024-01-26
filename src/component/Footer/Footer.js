import { Link } from "react-router-dom";
import "./Footer.scss";
const Footer = ({ selectedItems }) => {
  let sum = 0;
  let array = selectedItems.map((item) => item.price);
  //   console.log(selectedItems);

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return (
    <Link to="/basket" className="footer">
      <div className="footer__item">{selectedItems.length}</div>
      <h3 className="footer__title">View Basket</h3>
      <p className="footer__price">£{sum}</p>
    </Link>
  );
};
export default Footer;

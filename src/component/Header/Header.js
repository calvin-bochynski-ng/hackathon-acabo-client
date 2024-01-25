import "./Header.scss";
import location from "../../assets/icons/location.svg";
import search from "../../assets/icons/search.svg";
import heart from "../../assets/icons/heart.svg";
import user from "../../assets/icons/user.svg";
import chevronDown from "../../assets/icons/chevron-down.svg";
import sliders from "../../assets/icons/sliders.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div>
          <p className="header__now">Now</p>
          <div className="header__title-container">
            <img src={location} alt="" className="header__img" />
            <h1 className="header__title">Rivington St</h1>
            <img src={chevronDown} alt="" className="header__img" />
          </div>
        </div>
        <div className="header__img-container">
          <div className="header__img-background">
            <img src={heart} alt="" className="header__img--alt" />
          </div>
          <div className="header__img-background">
            <img src={user} alt="" className="header__img--alt" />
          </div>
        </div>
      </div>
      <div className="header__search-container">
        <input
          type="text"
          className="header__search"
          placeholder="Restaurants, groceries, dishes"
        />
        <img src={search} alt="" className="header__img-search" />
        <img src={sliders} alt="" className="header__img--alt" />
      </div>

      <nav className="nav">
        <NavLink to="/" className={"nav__links"}>
          Home
        </NavLink>
        <NavLink to="/restaurants" className={"nav__links"}>
          Restaurants
        </NavLink>
        <NavLink to="/groceries" className={"nav__links"}>
          Groceries
        </NavLink>
        <NavLink to="/gifts" className={"nav__links"}>
          Gifts
        </NavLink>
        <NavLink to="/shopping" className={"nav__links"}>
          Shopping
        </NavLink>
        <NavLink to="/offer" className={"nav__links"}>
          Offer
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;

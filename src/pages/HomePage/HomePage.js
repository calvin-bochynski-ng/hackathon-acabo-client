import "./HomePage.scss";
import Header from "../../component/Header/Header";
import { useState } from "react";
import Modal from "../../component/Modal/Modal";
import homeFiller from "../../assets/images/Home-filler-v2.png";

const HomePage = () => {
  const [isClose, setIsClose] = useState(false);

  const handleClose = () => {
    setIsClose(true);
  };
  return (
    <div>
      {" "}
      {!isClose ? <Modal handleClose={handleClose} /> : ""}
      <Header />
      <img src={homeFiller} alt="" className="filler" />
    </div>
  );
};
export default HomePage;

import "./HomePage.scss";
import Header from "../../component/Header/Header";
import { useState } from "react";
import Modal from "../../component/Modal/Modal";

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
    </div>
  );
};
export default HomePage;

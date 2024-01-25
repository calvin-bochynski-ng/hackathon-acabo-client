import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import { useState } from "react";
import Modal from "./component/Modal/Modal";

function App() {
  const [isClose, setIsClose] = useState(false);

  const handleClose = () => {
    setIsClose(true);
  };

  return (
    <BrowserRouter>
      {!isClose ? <Modal handleClose={handleClose} /> : ""}
      <Header />
      <Routes>
        <Route path="/" element={<p>Home Page</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

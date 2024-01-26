import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import GiftsPage from "./pages/GiftsPage/GiftsPage";
import HomePage from "./pages/HomePage/HomePage";
import Anniversaries from "./pages/Anniversaries/Anniversaries";
import GiftRecieveModal from "./component/GiftRecieveModal/GiftRecieveModal";
import Checkout from "./component/Checkout/Checkout";
import ManageAddress from "./component/ManageAddress/ManageAddress";
import AddAddress from "./component/AddAddress/AddAddress";

function App() {
  const [selectedItems, setSelectedItems] = useState("");
  const [isAddressClick, setIsAddressClick] = useState(false);
  const [address, setAddress] = useState("");

  const handleClick = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  const handleAddressClicl = () => {
    setIsAddressClick(true);
  };

  const handleClickAddress = (address) => {
    console.log(address);
    setAddress(address);
    setIsAddressClick(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/giftmodal" element={<GiftRecieveModal />} />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/gifts"
          element={
            <GiftsPage
              handleAddressClicl={handleAddressClicl}
              address={address}
              isAddressClick={isAddressClick}
              handleClickAddress={handleClickAddress}
            />
          }
        />
        <Route
          path="/anniversaries"
          element={
            <Anniversaries
              handleClick={handleClick}
              handleAddressClicl={handleAddressClicl}
              isAddressClick={isAddressClick}
              selectedItems={selectedItems}
              handleClickAddress={handleClickAddress}
              address={address}
            />
          }
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/manage-address" element={<ManageAddress />} />
        <Route path="/add-address" element={<AddAddress />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

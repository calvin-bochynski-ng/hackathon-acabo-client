import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GiftsPage from "./pages/GiftsPage/GiftsPage";
import HomePage from "./pages/HomePage/HomePage";
import Anniversaries from "./pages/Anniversaries/Anniversaries";
import GiftRecieveModal from "./component/GiftRecieveModal/GiftRecieveModal";
import Checkout from "./component/Checkout/Checkout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/giftmodal" element={<GiftRecieveModal />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/gifts" element={<GiftsPage />} />
        <Route path="/anniversaries" element={<Anniversaries />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

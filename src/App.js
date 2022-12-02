import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductDetails from "./pages/ProductDetails";
import SearchProductList from "./pages/SearchProductList";
import Filter from "./pages/Filter";
import MyCart from "./components/MyCart";
import SellerRegistration from "./components/SellerRegistration";
import WishList from "./components/WishList";
import Checkout from "./pages/Checkout";
import ChangePassword from "./components/ChangePassword";
import MyProfile from "./components/MyProfile";
import EditProfile from "./components/EditProfile";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/product-listing-page/:id"
            element={<SearchProductList />}
          />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/category/:slug/:id" element={<Filter />} />
          <Route path="/my-cart" element={<MyCart />} />
          <Route path="/sellerRegistration" element={<SellerRegistration />} />
          <Route path="/WishList" element={<WishList />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="/profile/change-password" element={<ChangePassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

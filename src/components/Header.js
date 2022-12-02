import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assests/images/bazar-new-png.png";
import LoginForm from "./Auth/LoginForm";
import SignUpForm from "./Auth/SignUpForm";
import AutoSuggestion from "./AutoSuggestion";
import HeaderMenu from "./HeaderMenu";
import { myProfileActions } from "../store/actions/action";
import { useDispatch, useSelector } from "react-redux";
import { addToCartActions } from "../store/actions/action";
import { getcartAction } from "../store/actions/action";
import { getwishlistAction } from "../store/actions/action";

const Header = () => {
  const dispatch = useDispatch();
  const logoutTimerIdRef = useRef(null);
  const [showmodel, setShowmodel] = useState(false);
  const [modelshow, setmodelShow] = useState(false);
  const getcartdata = useSelector(
    (state) => state.getcartReducers?.getcartdata
  );
  const addtocartrefreshdata = useSelector(
    (state) => state.addtocartrefreshReducers.addtocartrefreshdata
  );
  const getwishlistData = useSelector(
    (state) => state.getwishlistReducers?.getwishlistData
  );
  // console.log("getwishlistData", getwishlistData);
  let addToCartData = useSelector(
    (state) => state.addtocartReducers?.addToCartData
  );

  // wishlist data show //

  let wishlistlength =
    getwishlistData && getwishlistData.data.length > 0
      ? getwishlistData.data.length
      : null;

  const logOutForm = () => {
    localStorage.removeItem("loginData");
    window.location.reload();
  };

  if (localStorage.getItem("cart")) {
    getcartdata = JSON.parse(localStorage.getItem("cart"));
  }
  // console.log(getcartdata);
  let cartlength = getcartdata.length > 0 ? getcartdata.length : null;

  useEffect(() => {
    const payload = {
      headers: { Authorization: "Bearer " + localStorage.getItem("loginData") },
    };

    if (localStorage.getItem("loginData")) {
      myProfileActions(dispatch, payload);
      getcartAction(dispatch);
      getwishlistAction(dispatch, payload);
    }
    if (localStorage.getItem("loginData") && localStorage.getItem("cart")) {
      let data = JSON.parse(localStorage.getItem("cart"));

      let s = data.map((items) => {
        return {
          product_id: items.product_id,
          sellerId: items.sellerId,
          save_for_later: items.save_for_later,
          default_image: items.productData[0].default_image,
          Title: items.productData[0].Title,
          Price: items.productData[0].Price,
        };
      });

      s.forEach((element) => {
        addToCartActions(dispatch, { cart: [element] });
      });
      localStorage.removeItem("cart");
    }

    const autoLogout = () => {
      if (document.visibilityState === "hidden") {
        const timeOutId = window.setTimeout(logOutForm, 5 * 10 * 5000);
        logoutTimerIdRef.current = timeOutId;
      } else {
        window.clearTimeout(logoutTimerIdRef.current);
      }
    };

    document.addEventListener("visibilitychange", autoLogout);

    return () => {
      document.removeEventListener("visibilitychange", autoLogout);
    };
  }, [cartlength, addToCartData, addtocartrefreshdata]);

  return (
    <>
      <div className="header-login">
        <div className="container">
          <div className="login">
            <div>
              <span className="logo-class">
                <Link to="/">
                  <img src={logo} alt="Bazaar" />
                </Link>
              </span>
            </div>
            <div className="search-brand">
              <div
                role="combobox"
                aria-haspopup="listbox"
                aria-owns="react-autowhatever-1"
                aria-expanded="false"
                className="react-autosuggest__container"
              >
                <AutoSuggestion />

                <div
                  id="react-autowhatever-1"
                  role="listbox"
                  className="react-autosuggest__suggestions-container"
                ></div>
              </div>
              <i className="icon-search"></i>
            </div>

            <div className="header-address">
              <div className="product-location-wraps">
                <div className="product-location">
                  <div className="location-mark">
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="location-text">
                      <div className="deliver-text">Deliver to</div>
                      <div className="wrap-delivery">
                        <div className="delivery-text">Select location</div>
                        <div className="deliver-zip"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {localStorage.getItem("loginData") ? (
              <div className="download-app">
                <Link to="/wishList">
                  <span className="header-text">
                    wishList
                    {/* <img src="" alt="wishList" /> */}
                    <div>
                      <h4 style={{ color: "red" }}>{wishlistlength}</h4>
                    </div>
                    <i className="fas fa-heart"></i>
                  </span>
                </Link>
              </div>
            ) : null}
            {localStorage.getItem("loginData") ? (
              <div className="userName-container ">
                <div className="signin-register">
                  <span className="profile-name">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <img src="" />
                    <span className="profile-user">Hi ravikant</span>
                  </span>
                </div>
                <div className="logout-container">
                  <div className="logout-profile-wrap">
                    <div className="profile-img">
                      <img src="http://45.65.41.90:6060/public/images/default-avatar.jpg" />
                    </div>
                    <div className="profile-description">
                      <h4>ravikant</h4>
                      <Link to="tel:1234567890">9818288174</Link>
                    </div>
                  </div>
                  <div>
                    <Link to="/profile">My Account</Link>
                  </div>
                  <div>
                    <Link to="/profile/change-password">Change Password</Link>
                  </div>
                  <div>
                    <span className="logout-link">Log Out</span>
                  </div>
                </div>
              </div>
            ) : null}

            <div className="signup-register">
              {localStorage.getItem("loginData") ? (
                <span className="header-text" onClick={logOutForm}>
                  Logout
                </span>
              ) : (
                <div style={{ display: "flex" }}>
                  <div className="signin-register">
                    <span
                      className="header-text"
                      onClick={() => setShowmodel(true)}
                    >
                      Sign Up
                    </span>
                  </div>
                  <div
                    className="signin-register"
                    style={{ paddingRight: "20px" }}
                  >
                    <span
                      className="header-text"
                      onClick={() => setmodelShow(true)}
                    >
                      Sign In
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="cart-wrap">
              <Link className="wish-list msg-number" to="/my-cart">
                <div>
                  <h4 style={{ color: "red" }}>{cartlength}</h4> Cart
                </div>
                <i className="fas fa-shopping-bag"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <HeaderMenu />
      {showmodel && <SignUpForm onclose={setShowmodel} />}
      {modelshow && <LoginForm onClose={setmodelShow} />}
    </>
  );
};

export default Header;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import clickStar from "../assests/images/tick.png";
import LoginForm from "../components/Auth/LoginForm";
import { addToWishlistAction } from "../store/actions/action";
import { getwishlistAction } from "../store/actions/action";
import { removeFromWishlistActions } from "../store/actions/action";
const ProductCard = ({ data }) => {
  console.log("data", data);
  const dispatch = useDispatch();
  const [modelshow, setmodelShow] = useState(false);
  const [isActive, setIsActive] = useState(data.wishlist);

  const addWishList = (id) => {
    console.log("id>>>>>", id);
    let checkLoginStatus = localStorage.getItem("loginData");
    const payload = {
      productId: id,
    };

    if (checkLoginStatus) {
      if (!isActive) {
        addToWishlistAction(dispatch, payload);
        getwishlistAction(dispatch);
        setIsActive(true);
      } else {
        removeFromWishlistActions(dispatch, payload);

        setIsActive(false);
      }
    } else {
      setmodelShow(true);
    }
  };

  return (
    <>
      {modelshow && <LoginForm onClose={setmodelShow} />}

      <div className="costume-box">
        <div className="costume-block">
          <div className="diamond-tag">
            <img src={clickStar} alt="img" />
          </div>
          <div className="costume-action ">
            <span className="wish ">
              <i
                className={`icon-wishlist ${isActive ? "red-heart" : ""}`}
                onClick={() => addWishList(data._id)}
              ></i>
            </span>
          </div>
          <Link to={`/product-details/${data._id}`}>
            <div className="product-pack">
              <div className="costumes">
                <img src={data.default_image} alt="img" />
              </div>
            </div>
          </Link>
        </div>
        <div>
          <div className="costume-info my-list">
            <div className="product-name">
              <strong className="prod-name">{data.Title}</strong>
              <div className="free-ship-wrap">
                <span className="free-ship">
                  {data.delievery_charge === null ? "free shipping" : ""}
                </span>
                <i className="fa fa-flag" aria-hidden="true"></i>
              </div>
            </div>
            <span className="brand"> {data.brandData.name}</span>
            <p>
              <span className="costs-wrap">
                <span className="buy-info">
                  {data.Price.sell_price.$numberDecimal}
                </span>
                <span className="old-price">
                  ({data.Price.current_store_price.$numberDecimal})
                </span>
              </span>
              <br />
              <span className="discount">9% OFF</span>
              <span className="h-24"></span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

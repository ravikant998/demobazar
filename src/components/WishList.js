import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getwishlistAction } from "../store/actions/action";
import { removeFromWishlistActions } from "../store/actions/action";
import { addToCartActions } from "../store/actions/action";
import { getcartAction } from "../store/actions/action";
const WishList = (id) => {
  const dispatch = useDispatch();

  const getwishlistData = useSelector(
    (state) => state.getwishlistReducers.getwishlistData
  );
  console.log("getwishlistData", getwishlistData);
  const removeFromWishlistdata = useSelector(
    (state) => state.removeFromWishlistReducers.removeFromWishlistdata
  );
  useEffect(() => {
    getwishlistAction(dispatch);
  }, [dispatch, removeFromWishlistdata]);

  const removeWishlist = (id) => {
    const payload = {
      wishlistId: id,
    };
    removeFromWishlistActions(dispatch, payload);
    getwishlistAction(dispatch);
  };
  const addtocartFromwishlist = () => {
    const payload = {
      product_id: getwishlistData.data[0].productData._id,
      save_for_later: false,
      sellerId: getwishlistData.data[0].productData.User_id,
      user_id: getwishlistData.data[0].productData.user_id,
    };
    addToCartActions(dispatch, { cart: [payload] });

    getcartAction(dispatch);
  };
  return (
    <>
      <div className="right-prof-sec">
        <div className="container">
          <div className="wishlist-section" style={{ position: "relative" }}>
            <h2>Wishlist</h2>
            {getwishlistData
              ? getwishlistData.data.map((items, index) => {
                  return (
                    <div
                      className="plp-product-screen"
                      style={{ opacity: 1 }}
                      key={index}
                    >
                      <div className="costume-box">
                        <div className="costume-block">
                          <Link
                            target="_blank"
                            className="product-pack"
                            to="/product/Electronics/62470effafec505bc9d9cd65/?cat=electronics"
                          >
                            <div className="costumes">
                              <img
                                src={items.productData.default_image}
                                alt="costume-img"
                              />
                            </div>
                          </Link>
                          <div className="wishlist-btns">
                            <div
                              className="add-cart-wishlist"
                              onClick={() => addtocartFromwishlist()}
                            >
                              Add To Cart
                            </div>
                            <div
                              className="remove-wishlist"
                              onClick={() =>
                                window.confirm(
                                  "Do you want to remove this product from Cart ?"
                                ) &&
                                removeWishlist(
                                  items._id ? items._id : items.wishlistId
                                )
                              }
                            >
                              Remove
                            </div>
                          </div>
                        </div>
                        <a
                          target="_blank"
                          href="/product/Electronics/62470effafec505bc9d9cd65/?cat=electronics"
                        >
                          <div className="costume-info">
                            {/* <strong>dsfsdf</strong> */}
                          </div>
                        </a>
                      </div>
                      <div></div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default WishList;

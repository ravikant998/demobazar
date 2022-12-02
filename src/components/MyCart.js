import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import deleteicon from "../assests/images/delete-icon.png";
import { Link } from "react-router-dom";
import { addtocartrefreshAction, getcartAction } from "../store/actions/action";
import { deletecartAction } from "../store/actions/action";
import { addToWishlistAction } from "../store/actions/action";

const MyCart = () => {
  const [remove, setRemove] = useState();
  const dispatch = useDispatch();
  let getcartdata = useSelector((state) => state.getcartReducers?.getcartdata);
  if (localStorage.getItem("cart")) {
    getcartdata = JSON.parse(localStorage.getItem("cart"));
  }
  let cartlength =
    getcartdata && getcartdata.length > 0 ? getcartdata.length : null;

  useEffect(() => {
    getcartAction(dispatch);
  }, [dispatch, remove]);

  const handleRemoveCart = (data) => {
    setRemove(data);
    addtocartrefreshAction(dispatch, data + 1);
    if (localStorage.getItem("loginData")) {
      const payload = {
        cartId: data,
      };
      deletecartAction(dispatch, payload);
      getcartAction(dispatch);
    } else {
      let cart = JSON.parse(localStorage.getItem("cart"));
      let a = 0;
      cart.forEach((element) => {
        if (element.product_id == data) {
          cart.splice(a, 1);
        }
        a = a + 1;
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const movetoWishList = (id) => {
    const payload = {
      productId: id,
    };
    addToWishlistAction(dispatch, payload);
  };

  let sum = 0;
  getcartdata.forEach((element) => {
    sum = sum + Number(element.productData[0]?.Price.sell_price.$numberDecimal);
  });

  return (
    <>
      <div className="greybg">
        <div className="container">
          <div className="cart-caption">
            <h2>{cartlength} item in your cart</h2>
            <h6>Taxes may apply for certain state</h6>
          </div>
          {getcartdata
            ? getcartdata.map((items, index) => {
                return (
                  <div className="cartsection" key={index}>
                    <div>
                      <div className="">
                        <div className="cartmenu cart-itemlist cart-list-item">
                          <div className="cart-product">
                            <figure>
                              <img
                                src={items.productData[0]?.default_image}
                                alt="product"
                              />
                              {/* <div className="no-deliver-item">
                                OUT OF STOCK
                              </div> */}
                            </figure>
                          </div>
                          <div
                            className="cart-product-text"
                            style={{
                              display: "flex",
                              flexdirection: "column",
                              width: "80%",
                            }}
                          >
                            <div
                              className="cart-base"
                              style={{ display: "flex" }}
                            >
                              <div className="cart-des">
                                <span className="brandName">
                                  {items.BrandData[0].name}
                                </span>
                                <a href="/product/Electronics/620e17e336e1b342b6e0dfe8/?cat=electronics">
                                  <span className="product-name">
                                    {items.productData[0].Title}
                                  </span>
                                </a>
                                <span className="price">
                                  <span>
                                    ₹
                                    {
                                      items.productData[0]?.Price.sell_price
                                        .$numberDecimal
                                    }
                                  </span>
                                  <span>₹</span>
                                  <span className="old-price">
                                    ₹
                                    {
                                      items.productData[0]?.Price
                                        .current_store_price.$numberDecimal
                                    }
                                  </span>
                                  <span></span>
                                </span>
                                <div className="pay-wrap">
                                  <button
                                    className="shop-now"
                                    onClick={() => movetoWishList(items._id)}
                                  >
                                    Move to wishlist
                                  </button>
                                </div>
                              </div>
                              <div style={{ width: "20%" }}>
                                <span className="delete-product">
                                  <img
                                    src={deleteicon}
                                    alt="trash-icn"
                                    onClick={() =>
                                      window.confirm(
                                        "Do you want to remove this product from Cart ?"
                                      ) &&
                                      handleRemoveCart(
                                        items._id ? items._id : items.product_id
                                      )
                                    }
                                  />
                                  {/* <button
                                    onClick={() =>
                                      window.confirm(
                                        "Do you want to remove this product from Cart ?"
                                      ) &&
                                      handleRemoveCart(
                                        items._id ? items._id : items.product_id
                                      )
                                    }
                                  >
                                    Delete
                                  </button> */}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cart-bottom">
                      <h6 className="cart-total">
                        <span>Total</span> ₹ {sum}
                      </h6>
                      <Link to="/Checkout">
                        <button className="shop-now">
                          Proceed to checkout
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
        <div></div>
      </div>
    </>
  );
};

export default MyCart;

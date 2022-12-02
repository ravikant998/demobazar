import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkedQuantityActions } from "../store/actions/action";
import { getcartAction } from "../store/actions/action";

const CheckoutCompo = (props) => {
  let getcartdata = useSelector((state) => state.getcartReducers?.getcartdata);
  var items = props.checkout;
  var index = props.index;
  var quantity = getcartdata[index].Quantity;
  const [cartQ, setCartQ] = useState(quantity);
  // const [sumQuantity, setSumQuantity] = useState(quantity);
  const dispatch = useDispatch();

  let quantitydata = useSelector(
    (state) => state.checkoutquantityReducers.checkoutquantitydata
  );

  let sum = 0;
  getcartdata.forEach((element) => {
    sum =
      sum +
      parseInt(element.productData[0]?.Price.sell_price.$numberDecimal) *
        element.Quantity;
  });

  useEffect(() => {
    getcartAction(dispatch);
  }, [quantitydata.leftQuantity]);

  const incrementQuantity = (id) => {
    if (cartQ < 100) {
      var x = cartQ;
      // sum += price;
      setCartQ(Number(cartQ) + 1);
    }
    let payload = {
      cartId: id,
      quantity: ++x,
    };
    checkedQuantityActions(dispatch, payload);
  };
  const decrementQuantity = (id) => {
    if (cartQ > 1) {
      var x = cartQ;
      setCartQ(cartQ - 1);
    }
    let payload = {
      cartId: id,
      quantity: --x,
    };
    checkedQuantityActions(dispatch, payload);
  };

  useEffect(() => {}, [cartQ]);

  return (
    items && (
      <>
        <div className="checkout-cardwrap">
          <div className="">
            <div className="cartmenu cart-itemlist cart-list-item">
              <div className="cart-product">
                <figure>
                  <img src={items.productData[0].default_image} alt="product" />
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
                <div className="cart-base" style={{ display: "flex" }}>
                  <div className="cart-des">
                    <span className="brandName">{items.BrandData[0].name}</span>
                    <a href="/product/Electronics/62163754baf8a9199a781a62/?cat=electronics">
                      <span className="product-name">Dress</span>
                    </a>
                    <span className="price">
                      <span>
                        ₹{items.productData[0]?.Price.sell_price.$numberDecimal}
                      </span>
                      <span className="old-price">
                        ₹
                        {
                          items.productData[0]?.Price.current_store_price
                            .$numberDecimal
                        }
                      </span>
                    </span>
                  </div>
                  <div className="delete-cart-product" style={{ width: "20%" }}>
                    <div className="qty-input">
                      <button
                        className="qty-decrement qty-decrement-active"
                        type="button"
                        onClick={() => decrementQuantity(items._id)}
                      >
                        <i className="fal fa-minus">-</i>
                      </button>
                      <input id="quantity" value={cartQ} />
                      <button
                        className="qty-increment"
                        type="button"
                        onClick={() => incrementQuantity(items._id)}
                      >
                        <i className="fal fa-plus">+</i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="checkout-total">
          <div>
            <span>Total Amount</span>
            <span>₹{sum}</span>
          </div>
          <div>
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div>
            <span>Final Amount</span>
            <span>₹{sum}</span>
          </div>
        </div>
      </>
    )
  );
};

export default CheckoutCompo;

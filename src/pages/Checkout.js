import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutCompo from "../components/checkoutCompo";
import ShippingAddress from "../components/ShippingAddress";
import { getuserAddressAction } from "../store/actions/action";
import EditShippingAddress from "../components/EditShippingAddress";
const Checkout = () => {
  const dispatch = useDispatch();
  const [showAddr, setShowAddr] = useState(false);
  const [editAddr, setEditAddr] = useState(false);

  let getcartdata = useSelector((state) => state.getcartReducers?.getcartdata);

  const useraddressdata = useSelector(
    (state) => state.getuserAddressReducers.useraddressdata
  );

  useEffect(() => {
    const payload = {
      headers: { Authorization: "Bearer " + localStorage.getItem("loginData") },
    };
    getuserAddressAction(dispatch, payload);
  }, [dispatch]);

  return (
    <>
      <div className="checkout-right">
        <div className="summary-section">
          <div>
            {getcartdata
              ? getcartdata.map((items, index) => {
                  return <CheckoutCompo checkout={items} index={index} />;
                })
              : null}
            <h4 className="summary-title">order summary</h4>
          </div>
        </div>
      </div>
      <div className="checkout-left">
        <div className="head-wrap checkout-wrap">
          <span className="checkout-headings"> Shipping</span>
        </div>

        <div className="shipping-inner shipping-remade">
          <div className="ship-radio">
            <input
              type="radio"
              className="radio"
              value="626671301c870415c24701c1"
              checked=""
            />
            <div className="radio-circle">
              <div className="radio-dot"></div>
            </div>
          </div>
          <div className="head-wrap ship-edit">
            {!editAddr && (
              <span
                className="edit-link edit-btn"
                onClick={() => setEditAddr(true)}
              >
                <i className="fas fa-user-edit"></i>
                <b>EDIT</b>
              </span>
            )}

            {editAddr && <EditShippingAddress onClose={setEditAddr} />}
          </div>
          <div className="desc-txt">
            {useraddressdata &&
              useraddressdata.data.map((item, index) => {
                return (
                  <div key={index}>
                    <div>
                      <span className="ship-add-name">{item.first_name} </span>
                      <br />
                      <span>{item.phone}</span>
                    </div>
                    <div className="address-checkout">
                      <i className="fas fa-map-marker-alt"></i>
                      <span className="ship-add">{item.flat_no}, </span>
                      <span className="ship-add">{item.street}, </span>
                      <span className="ship-add">{item.landmark}, </span>
                      <span>{item.postcode}, </span>
                      <span className="ship-add">{item.city}, </span>
                      <span className="ship-add">{item.state[0].name}</span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="shipping-itemwrap shipping-remade">
          {!showAddr && (
            <button
              className="shop-now address-btn"
              onClick={() => setShowAddr(true)}
            >
              Add new address
            </button>
          )}
          {showAddr && <ShippingAddress onClose={setShowAddr} />}
        </div>
      </div>
    </>
  );
};

export default Checkout;

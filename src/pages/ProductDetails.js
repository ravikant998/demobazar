import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  addtocartrefreshAction,
  ProductDetailsAction,
} from "../store/actions/action";
import AboutSeller from "./AboutSeller";
import { addToCartActions } from "../store/actions/action";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  let getcartdata = useSelector((state) => state.getcartReducers?.getcartdata);

  if (localStorage.getItem("cart")) {
    getcartdata = JSON.parse(localStorage.getItem("cart"));
  }

  // this condition for add 2nd product in cart
  let cartlist = [];
  getcartdata?.forEach((x) => {
    if (x.productData[0]._id) {
      cartlist.push(x.productData[0]._id);
    }
  });
  let incart = false;
  if (cartlist.includes(id)) {
    incart = true;
  }

  const detailsproduct = useSelector(
    (state) => state.productDetailReducers?.prodetails
  );

  const sellerInfodetails = useSelector(
    (state) => state.AboutSellerReducers?.sellerInfodetails
  );
  const myprofiledata = useSelector(
    (state) => state.myProfileReducers.myprofiledata
  );

  const addtocartrefreshdata = useSelector(
    (state) => state.addtocartrefreshReducers.addtocartrefreshdata
  );

  useEffect(() => {
    ProductDetailsAction(dispatch, id);
  }, [dispatch]);

  const handleaddToCart = (id) => {
    addtocartrefreshAction(dispatch, id);
    const reqpayload = {
      product_id: id,
      save_for_later: false,
      sellerId: sellerInfodetails[0].sellerData[0]._id,
      user_id: myprofiledata?.userdata?._id,
      productData: [
        {
          default_image: detailsproduct[0].default_image,
          Title: detailsproduct[0].Title,
          Price: detailsproduct[0].Price,
          _id: id,
        },
      ],
    };

    if (localStorage.getItem("loginData")) {
      getcartdata = JSON.parse(localStorage.getItem("cart"));
      addToCartActions(dispatch, { cart: [reqpayload] });
    } else {
      let localcart = JSON.parse(localStorage.getItem("cart"));

      if (!localcart) {
        localStorage.setItem("cart", JSON.stringify([reqpayload]));
      } else {
        localStorage.setItem(
          "cart",
          JSON.stringify([...localcart, reqpayload])
        );
      }
    }
  };

  return (
    <>
      {detailsproduct
        ? detailsproduct.map((items, index) => {
            return (
              <div key={index}>
                <div className="pro-slide-wrap">
                  <div className="product-view">
                    <img src={items.default_image} alt="image" />
                  </div>
                </div>
                <div className="des-wrap">
                  <div className="sales-details">
                    <div className="brandName">
                      <div className="brand-name">
                        {items.brandData[0].name}
                      </div>
                      <div className="product-name mobile-product-name">
                        {items.Title}
                      </div>
                    </div>
                    <div className="product-details-name">
                      <div className="price">
                        <p>
                          <span className="buy-info">
                            {items.Price.sell_price.$numberDecimal}
                          </span>
                          <span className="old-price">
                            {items.Price.current_store_price.$numberDecimal}
                          </span>
                        </p>
                        <span className="free-shipping">
                          {items.shippingCost ? (
                            <span>$ {items.shippingCost} shipping</span>
                          ) : (
                            <span>Free shipping</span>
                          )}
                        </span>
                      </div>
                      <div className="buttons-wrap">
                        <div className="btn-wrap">
                          <div className="pro-btn-wrap">
                            <Link className=" complete-purchase btn-shop" to="">
                              <button
                                className="complete-purchase"
                                style={{
                                  borderleft: "0px",
                                  borderright: "0px",
                                }}
                              >
                                Buy Now
                              </button>
                            </Link>
                            {incart ? (
                              <Link to="/my-cart" className="complete-purchase">
                                Go to cart
                              </Link>
                            ) : (
                              <button
                                className="complete-purchase"
                                onClick={() => handleaddToCart(items._id)}
                              >
                                Add to cart
                              </button>
                            )}
                          </div>
                          <div className="pro-btn-wrap">
                            <button
                              className="complete-purchase make-offer"
                              style={{ marginright: "10px" }}
                            >
                              Make an Offer
                            </button>
                            <button className="complete-purchase msg-seller">
                              Message seller
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="it-dtls">Item Details</span>
                {items.Condition ? (
                  <div className="product-clr">
                    <div className="product-heading">Condition: </div>
                    <span className={`product-verification-btn`}>
                      {items.Condition}
                    </span>
                  </div>
                ) : null}
                {/* Shipping */}
                <div className="product-clr">
                  <div className="product-heading">Shipping: </div>
                  <span className={`product-verification-btn`}>
                    {items.shippingCost ? (
                      <span>$ {items.shippingCost}</span>
                    ) : (
                      <span>Free</span>
                    )}
                  </span>
                </div>
                {/* Atttributes */}
                {items.Attrs.length > 0
                  ? items.Attrs.map((item, i) => (
                      <div className="product-clr" key={i}>
                        <div className="product-heading">{item.name}:</div>
                        <span className={`product-verification-btn`}>
                          {item.value}
                        </span>
                      </div>
                    ))
                  : null}
                {/* {Brand} */}
                <div className="product-clr">
                  <div className="product-heading">Brand: </div>
                  <span className={`product-verification-btn`}>
                    {items.brandData[0].name}
                  </span>
                </div>
                {/* {category} */}
                <div className="product-clr">
                  <div className="product-heading">Category: </div>
                  <span className={`product-verification-btn`}>
                    {items.categoryData[0].name}
                    {items.subcategoryData[0].name}
                  </span>
                </div>
                {/* {Posting} */}
                <div className="product-clr">
                  <div className="product-heading">Posting: </div>
                  <span className={`product-verification-btn`}>
                    {items.createdAt}
                  </span>
                </div>
                {/* {Description} */}
                <div className="item-name-detail">
                  <span className="it-dtls">Description</span>
                  <div
                    className="desc"
                    dangerouslySetInnerHTML={{
                      __html: items.Description,
                    }}
                  />
                </div>
                <AboutSeller id={items.userData[0]._id} />
              </div>
            );
          })
        : null}
      <div className="seller-info"></div>
    </>
  );
};

export default ProductDetails;

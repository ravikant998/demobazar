import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import icon from "../assests/images/icon.png";
import { AboutSellerAction } from "../store/actions/action";
const AboutSeller = (props) => {
  const dispatch = useDispatch();
  const sellerInfodetails = useSelector(
    (state) => state.AboutSellerReducers.sellerInfodetails
  );

  useEffect(() => {
    AboutSellerAction(dispatch, { sellerId: props.id });
  }, [dispatch]);
  return (
    <>
      <div className="updt-info-wrp">
        <div className="updated-bar">
          <span className="updated-time"></span>
          <span className="reports">
            <span className="report-btns"></span>
            <button>
              <i className="fa-thumbs-up  fal ">
                <img src={icon} alt="like" />
              </i>
            </button>
          </span>
        </div>
      </div>
      <div className="seller-info">
        <div className="seller-wrap">
          <div className="about-seller ">
            <h4> About the seller </h4>
            <div className="about-seller-text">
              <div className="seller-prof-img">
                <img src="" alt="seller image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSeller;

import React from "react";
const myStyle = {
  outline: "none",
  width: "1279px",
  position: "relative",
  left: "0px",
  opacity: "0",
  transition: "opacity 1000ms ease 0s",
  visibility: "1000ms ease 0s",
};

const BannerList = () => {
  return (
    <>
      <div className="bnr">
        <div className="slick-slider slick-initialized" dir="ltr">
          <div className="slick-list">
            <div
              className="slick-track"
              style={{ width: "6395px", opacity: "1" }}
            >
              <div
                data-index="0"
                className="slick-slide"
                tabIndex="-1"
                aria-hidden="true"
                style={{ ...myStyle }}
              >
                <div>
                  <div className="home-banner">
                    <button className="btn-bannerprev btn-banner">
                      <i className="icon-bannerprev"></i>
                    </button>
                    <button className="btn-bannernext btn-banner">
                      <i className="icon-bannernext"></i>
                    </button>
                    <a className="click-banner-img" target="_blank" href="">
                      <img
                        src="https://inszn-ecom.s3.amazonaws.com/abc3440f-fbdf-492f-a403-5078e4fecdf1.jpg"
                        alt="Shop Now"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-index="1"
                className="slick-slide slick-active slick-current"
                tabIndex="-1"
                aria-hidden="false"
                style={{
                  outline: "none",
                  width: "1279px",
                  position: "relative",
                  left: "-1279px",
                  opacity: "1",
                  transition: "opacity 1000ms ease 0s",
                  visibility: "1000ms ease 0s",
                }}
              >
                <div>
                  <div className="home-banner">
                    <button className="btn-bannerprev btn-banner">
                      <i className="icon-bannerprev"></i>{" "}
                    </button>
                    <button className="btn-bannernext btn-banner">
                      <i className="icon-bannernext"></i>{" "}
                    </button>
                    <a className="click-banner-img" target="_blank" href="">
                      <img
                        src="https://inszn-ecom.s3.amazonaws.com/1fd461f5-4eb7-4c63-9e6f-fcc1669c779c.png"
                        alt="Shop Now"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="slick-dots" style={{ display: "block" }}>
            <li className="">
              <button>1</button>
            </li>
            <li className="slick-active">
              <button>2</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BannerList;

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { getHomePageData } from "../api/api";
import ProductCard from "../productCard/ProductCard";

const KitchenSlider = ({ data }) => {
  const [kitchenData, setKitchenData] = useState();

  useEffect(() => {
    const requestPayload = {
      block_name: data.block_name,
      id: data.id,
    };
    getHomePageData(requestPayload).then((res) => {
      setKitchenData(res.data.data);
    });
  }, [data]);

  // for slider
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="popular-arrival" id="609cd1a28f640238755ca497">
        <div className="container">
          <div className="arrival-costumes">
            <div className="arrival-caption">
              <h2>Kitchen & Dining</h2>
              <a
                className="shop-now"
                href="/product-listing-page/block?block_name=category-product&amp;id=609cd1a28f640238755ca497"
              >
                View All
              </a>
            </div>
            <div className="popular-costumes">
              <Slider {...settings}>
                {kitchenData &&
                  kitchenData.map((decorItems, id) => {
                    return <ProductCard data={decorItems} key={id} />;
                  })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KitchenSlider;

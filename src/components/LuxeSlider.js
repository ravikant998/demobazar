import React, { useState, useEffect } from "react";
import { getHomePageData } from "../api/api";
import ProductCard from "../productCard/ProductCard";
import Slider from "react-slick";

const LuxeSlider = ({ data }) => {
  const [luxeData, setLuxeData] = useState();

  useEffect(() => {
    const requestPayload = {
      block_name: data.block_name,
      id: data.id,
    };
    getHomePageData(requestPayload).then((res) => {
      setLuxeData(res.data.data);
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
              <h2>Luxe connoisseur</h2>
              <a
                className="shop-now"
                href="/product-listing-page/block?block_name=category-product&amp;id=609cd1a28f640238755ca497"
              >
                View All
              </a>
            </div>
            <div className="popular-costumes">
              <Slider {...settings}>
                {luxeData &&
                  luxeData.map((luxeItems, id) => {
                    return <ProductCard data={luxeItems} key={id} />;
                  })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LuxeSlider;

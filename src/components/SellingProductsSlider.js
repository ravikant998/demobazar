import React, { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import { getHomePageData } from "../api/api";
import Slider from "react-slick";

const SellingProductsSlider = ({ data }) => {
  const [sectionData, setSectionData] = useState();
  useEffect(() => {
    const requestPayload = {
      block_name: data.block_name,
      id: data.id,
    };
    getHomePageData(requestPayload).then((res) => {
      setSectionData(res.data.data);
    });
  }, [data]);

  // for slider
  const settings = {
    // dots: true,
    infinite: true,
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
              <h2>See what's selling</h2>
              <a
                className="shop-now"
                href="/product-listing-page/block?block_name=category-product&amp;id=609cd1a28f640238755ca497"
              >
                View All
              </a>
            </div>
            <div className="popular-costumes">
              <Slider {...settings}>
                {sectionData &&
                  sectionData.map((item, id) => {
                    return <ProductCard data={item} key={id} />;
                  })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellingProductsSlider;

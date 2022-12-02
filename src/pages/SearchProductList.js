import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import clickStar from "../assests/images/tick.png";
import { useLocation, useParams } from "react-router-dom";
import { SearchProductActions } from "../store/actions/action";
import { parse } from "query-string";

const SearchProductList = () => {
  const dispatch = useDispatch();
  let location = useLocation();
  let { id } = useParams();
  const searchdata = useSelector(
    (state) => state.searchReducers.searchproducts
  );

  useEffect(() => {
    let searchval = parse(location.search).searchValue;
    SearchProductActions(dispatch, { searchValue: searchval, category: id });
  }, [location]);

  return (
    <>
      {searchdata
        ? searchdata.map((items, id) => {
            return (
              <div className="plp-wrap" key={id}>
                <div className="plp-product-screen">
                  <div className="costume-box">
                    <div className="costume-block">
                      <div className="diamond-tag">
                        <img src={clickStar} alt="img" />
                      </div>
                      <a className="" href="/"></a>
                      <div className="costume-action">
                        <span className="wish">
                          <i className="icon-wishlist "></i>
                        </span>
                      </div>
                      <a className="product-pack" href="/">
                        <div className="costumes">
                          <img src={items.default_image} alt="costume-img" />
                        </div>
                      </a>
                    </div>
                    <a href="/">
                      <div className="costume-info my-list">
                        <div className="product-name">
                          <strong className="prod-name"></strong>
                          <div className="free-ship-wrap">
                            <span className="free-ship"></span>
                            <i className="fa fa-flag" aria-hidden="true"></i>
                          </div>
                        </div>
                        <div className="brand"> {items.brandData.name}</div>

                        <div className="costs-wrap">
                          <span className="buy-info">
                            {items.Price.sell_price.$numberDecimal}
                          </span>
                          <span className="old-price">
                            ({items.Price.current_store_price.$numberDecimal})
                          </span>
                        </div>
                        <span className="discount">13% OFF</span>
                        <span className="h-24"></span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </>
  );
};

export default SearchProductList;

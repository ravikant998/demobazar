import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { SearchProductActions } from "../store/actions/action";
import { filterAttribute, filterDataAction } from "../store/actions/action";

const FilterPannel = () => {
  let dispatch = useDispatch();
  let { slug, id } = useParams();

  const [checked, setChecked] = useState({
    brand: [],
    condition: [],
    delivery: [],
    category: [slug],
  });

  const listing = useSelector((state) => state.searchReducers?.searchproducts);

  const searchdata = useSelector(
    (state) => state.reducerSlugProductListData?.slugProductListDetails
  );

  let filterdata = searchdata ? searchdata.FilterData : [];

  const filter = useSelector((state) => state.FilterReducers.filter);
  // for Listing product
  useEffect(() => {
    SearchProductActions(dispatch, { category: [slug] });
  }, [slug, dispatch]);

  useEffect(() => {
    filterDataAction(
      dispatch,
      { category: [`${slug}`] },
      setChecked({
        brand: [],
        condition: [],
        delivery: [],
        category: [slug],
      })
    );
  }, [slug]);

  // Filter product show
  useEffect(() => {
    const payload = {
      categoryId: id,
      FilterData: filterdata,
    };

    filterAttribute(dispatch, payload);
  }, [id, filterdata]);

  // After click checkbox product list
  useEffect(() => {
    SearchProductActions(dispatch, checked);
  }, [checked]);

  const handleBrandchange = (e) => {
    if (e.target.checked) {
      setChecked({ ...checked, brand: [...checked.brand, e.target.value] });
    } else {
      let brandpayload = [...checked.brand];
      console.log("brandpayload", brandpayload);
      let index = brandpayload.indexOf(e.target.value);
      if (index !== -1) {
        brandpayload.splice(index, 1);
        setChecked({ ...checked, brand: brandpayload });
      }
    }
  };

  const handleConditionchange = (e) => {
    if (e.target.checked) {
      setChecked({
        ...checked,
        condition: [...checked.condition, e.target.value],
      });
    } else {
      let conditiondata = [...checked.condition];
      let index = conditiondata.indexOf(e.target.value);
      if (index !== -1) {
        conditiondata.splice(index, 1);
        setChecked({ ...checked, condition: conditiondata });
      }
    }
  };

  const handleDeliveryhange = (e) => {
    let a = e.target.value;
    setChecked({
      ...checked,
      delivery: [a],
    });
  };

  return (
    <>
      <div className="plp-category">
        <i className="fa fa-times"></i>
        <div className="category-attr-block cat-box"></div>
        <div className="brand-attr-block cat-box">
          <button className="accordian-header fal fa-angle-right active">
            Brand
          </button>
          {filter
            ? filter.brand.map((items, index) => {
                return (
                  <div className="accordian-panel expanded" key={index}>
                    <ul>
                      <li>
                        <input
                          type="checkbox"
                          onChange={handleBrandchange}
                          value={items._id}
                        />
                        <label>{items.name}</label>
                      </li>
                    </ul>
                  </div>
                );
              })
            : null}
        </div>
        <div className="condition-attr-block cat-box">
          <button className="accordian-header fal fa-angle-right active">
            Condition
          </button>
          {filter
            ? filter.condition.map((items, index) => {
                return (
                  <div className="accordian-panel expanded" key={index}>
                    <ul>
                      <li>
                        <input
                          type="checkbox"
                          value={items.value}
                          onChange={handleConditionchange}
                        />
                        <label>{items.name}</label>
                      </li>
                    </ul>
                  </div>
                );
              })
            : null}
        </div>
        <div className="-attr-block cat-box">
          <button className="accordian-header fal fa-angle-right active">
            Delivery
          </button>
          {filter
            ? filter.delivery.map((items, index) => {
                return (
                  <div className="accordian-panel expanded" key={index}>
                    <label className="price-lable">
                      <span>
                        <input
                          name="priceOptions"
                          type="radio"
                          value={items.value}
                          onChange={handleDeliveryhange}
                        />
                      </span>
                      <div className="price-input">{items.name}</div>
                    </label>
                  </div>
                );
              })
            : null}
        </div>
      </div>
      <div>
        {listing
          ? listing.map((items, index) => {
              return (
                <Link to={`/product-details/${items._id}`}>
                  <div className="costume-box" key={index}>
                    <div className="costume-block">
                      <div className="diamond-tag">
                        {/* <img src={clickStar} alt="img" /> */}
                      </div>
                      <div className="product-pack">
                        <div className="costumes">
                          <img src={items.default_image} alt="img" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="costume-info my-list">
                        <div className="product-name">
                          <strong className="prod-name">{items.Title}</strong>
                          <div className="free-ship-wrap">
                            <span className="free-ship">
                              {items.delievery_charge === null
                                ? "free shipping"
                                : ""}
                            </span>
                            <i className="fa fa-flag" aria-hidden="true"></i>
                          </div>
                        </div>
                        <span className="brand"> {items.brandData.name}</span>
                        <p>
                          <span className="costs-wrap">
                            <span className="buy-info">
                              {items.Price.sell_price.$numberDecimal}
                            </span>
                            <span className="old-price">
                              ({items.Price.current_store_price.$numberDecimal})
                            </span>
                          </span>
                          <br />
                          <span className="discount">9% OFF</span>
                          <span className="h-24"></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })
          : null}
      </div>
    </>
  );
};

export default FilterPannel;

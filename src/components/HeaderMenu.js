import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { categoryAction } from "../store/actions/action";
import FilterPannel from "./FilterPannel";
import SellerRegistration from "./SellerRegistration";
const HeaderMenu = () => {
  const dispatch = useDispatch();
  const categoryData = useSelector(
    (state) => state.CategoryReducers.catogorydata
  );
  useEffect(() => {
    categoryAction(dispatch);
  }, [dispatch]);

  return (
    <>
      <div className="header-menu">
        <div className="container">
          <div className="main-menu">
            <ul className="menu">
              {categoryData.map((items, index) => (
                <li className="sublist-menu " key={index}>
                  <Link to={`/category/${items.slug}/${items._id}`}>
                    {items.name}
                  </Link>
                </li>
              ))}
              <li>
                <div className="header-sell">
                  <span className=" sell-text">
                    <Link to="/sellerRegistration">
                      <span className=" sell-text">Register as a seller</span>
                    </Link>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
  <FilterPannel />;
};

export default HeaderMenu;

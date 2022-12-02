// import React from 'react';

import {
  GET_BRANDS,
  SELLING_PRODUCTS,
  SEARCH_PRODUCT,
  PRODEUCT_DETAILS,
  SELLER_INFO,
  SIGN_UP,
  LOGIN_FORM,
  CATEGORY,
  FILTER_ATTRIBUTE,
  FILTER_SLUG_ID,
  ADD_WISH_LIST,
  ADD_TO_CART,
  MY_PROFILE,
  GET_CART,
  AUTO_REFRESH_SIGNOUT,
  GET_WISH_LIST,
  REMOVE_WISH_LIST,
  UPDATE_CHECKOUT_QUANTITY,
  UPDATE_PROFILE_DATA,
  ADD_USER_ADDRESS,
  GET_COUNTRY_NAME,
  GET_USER_ADDRESS,
} from "./actionTypes";

const initialState = {
  brands: [],
  sellingProducts: [],
  searchproducts: [],
  prodetails: [],
  sellerInfodetails: [],
  signupform: [],
  login: [],
  catogorydata: [],
  addwishlistdata: [],
  addToCartData: [],
  getcartdata: [],
  autofreshdata: [],
  removeFromWishlistdata: [],
  checkoutquantitydata: [],
  updateprofile: [],
  adduseraddress: [],
};

//for Brand
export const reducerBrands = (state = initialState, action) => {
  switch (action.type) {
    case GET_BRANDS:
      return {
        ...state,
        brands: action.payload,
      };
    default:
      return state;
  }
};

//for Home Page
export const reducerSelling = (state = initialState, action) => {
  switch (action.type) {
    case SELLING_PRODUCTS:
      return {
        ...state,
        sellingProducts: action.payload,
      };
    default:
      return state;
  }
};
// for search
export const searchReducers = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PRODUCT:
      return {
        ...state,
        searchproducts: action.payload,
      };

    default:
      return state;
  }
};

// product Details//
export const productDetailReducers = (state = initialState, action) => {
  switch (action.type) {
    case PRODEUCT_DETAILS:
      return {
        ...state,
        prodetails: action.payload,
      };
    default:
      return state;
  }
};
// About Sell Info ///
export const AboutSellerReducers = (state = initialState, action) => {
  switch (action.type) {
    case SELLER_INFO:
      return {
        ...state,
        sellerInfodetails: action.payload,
      };
    default:
      return state;
  }
};

// Sigup Form ///
export const SignUpReducers = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        signupform: action.payload,
      };
    default:
      return state;
  }
};

// LoginForm ///
export const LoginReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_FORM:
      return {
        ...state,
        login: action.payload,
      };

    default:
      return state;
  }
};
//  Header Menu ///
export const CategoryReducers = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY:
      return {
        ...state,
        catogorydata: action.payload,
      };
    default:
      return state;
  }
};

/// Filter Attribute ///

export const FilterReducers = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_ATTRIBUTE: {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default:
      return state;
  }
};

export const reducerSlugProductListData = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_SLUG_ID:
      return {
        ...state,
        slugProductListDetails: action.payload,
      };
    default:
      return state;
  }
};

// Add Wishlist //
export const addToWishlistReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WISH_LIST:
      return {
        ...state,
        addwishlistdata: action.payload,
      };
    default:
      return state;
  }
};
// get wish list product
export const getwishlistReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_WISH_LIST:
      return {
        ...state,
        getwishlistData: action.payload,
      };
    default:
      return state;
  }
};

// My profile //
export const myProfileReducers = (state = initialState, action) => {
  switch (action.type) {
    case MY_PROFILE:
      return {
        ...state,
        myprofiledata: action.payload,
      };
    default:
      return state;
  }
};

// update Profile
export const profileUpdateReducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_DATA:
      return {
        ...state,
        updateprofile: action.payload,
      };
    default:
      return state;
  }
};

//Add to cart //
export const addtocartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        addToCartData: action.payload,
      };
    default:
      return state;
  }
};
// getCart //
export const getcartReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART: {
      return {
        ...state,
        getcartdata: action.payload,
      };
    }
    default:
      return state;
  }
};
// Auto refresh cart in signout
export const addtocartrefreshReducers = (state = initialState, action) => {
  switch (action.type) {
    case AUTO_REFRESH_SIGNOUT: {
      return {
        ...state,
        addtocartrefreshdata: action.payload,
      };
    }
    default:
      return state;
  }
};
export const removeFromWishlistReducers = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_WISH_LIST: {
      return {
        ...state,
        removeFromWishlistdata: action.payload,
      };
    }
    default:
      return state;
  }
};
// increment decrement quantity
export const checkoutquantityReducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CHECKOUT_QUANTITY: {
      return {
        ...state,
        checkoutquantitydata: action.payload,
      };
    }
    default:
      return state;
  }
};
// Get country name
export const getcountrynameReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY_NAME: {
      return {
        ...state,
        countryList: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

//  Insert user address
export const adduserAddressReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_ADDRESS: {
      return {
        ...state,
        adduseraddress: action.payload,
      };
    }
    default:
      return state;
  }
};

// get user adddress
export const getuserAddressReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_ADDRESS: {
      return {
        ...state,
        useraddressdata: action.payload,
      };
    }
    default:
      return state;
  }
};

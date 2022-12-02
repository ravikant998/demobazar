import {
  getBrands,
  getSellingProducts,
  getBannerList,
  searchProductlist,
  productDetail,
  aboutSellerinfo,
  signup,
  loginform,
  categoryList,
  filterdata,
  getSlugfProductId,
  addToWishlist,
  removeFromWishlist,
  addtocart,
  myprofiledetails,
  getcartdata,
  deletecartdata,
  getwishlistitems,
  updatequantity,
  updateProfiledata,
  adduseraddress,
  getcountryname,
  getuseraddressdata,
} from "../../api/api";
import {
  GET_BRANDS,
  SELLING_PRODUCTS,
  BANNER_LIST,
  SEARCH_PRODUCT,
  PRODEUCT_DETAILS,
  SELLER_INFO,
  SIGN_UP,
  LOGIN_FORM,
  CATEGORY,
  FILTER_ATTRIBUTE,
  FILTER_SLUG_ID,
  ADD_WISH_LIST,
  REMOVE_WISH_LIST,
  ADD_TO_CART,
  MY_PROFILE,
  GET_CART,
  DELETE_CART,
  AUTO_REFRESH_SIGNOUT,
  GET_WISH_LIST,
  UPDATE_CHECKOUT_QUANTITY,
  UPDATE_PROFILE_DATA,
  ADD_USER_ADDRESS,
  GET_COUNTRY_NAME,
  GET_USER_ADDRESS,
} from "../reducers/actionTypes";

// For Brand Name
export const getBrandsAction = (disptach) => {
  getBrands()
    .then((res) => {
      disptach({
        type: GET_BRANDS,
        payload: res.data,
      });
    })
    .catch(() => {
      console.log("Having Error");
    });
};

// For all HomePage
export const SellingProductsAction = (disptach) => {
  getSellingProducts()
    .then((res) => {
      let payload = res.data.data.map((item) => {
        return {
          block_name: item.block_name,
          id: item._id,
          name: item.translation_data[0].name,
        };
      });
      disptach({
        type: SELLING_PRODUCTS,
        payload: payload,
      });
    })
    .catch(() => {
      console.log("Having Error");
    });
};

export const BannerLISTAction = (disptach) => {
  getBannerList()
    .then((res) => {
      disptach({
        type: BANNER_LIST,
        payload: res.data,
      });
    })
    .catch(() => {
      console.log("Having Error");
    });
};

// for search  product data ///
export const SearchProductActions = (disptach, payload) => {
  searchProductlist(payload).then((res) => {
    disptach({
      type: SEARCH_PRODUCT,
      payload: res.data.data,
    });
  });
};
// product Details ///
export const ProductDetailsAction = (disptach, id) => {
  productDetail(id).then((res) => {
    disptach({
      type: PRODEUCT_DETAILS,
      payload: res.data.data,
    });
  });
};

// About  sell info//
export const AboutSellerAction = (dispatch, sellerId) => {
  aboutSellerinfo(sellerId).then((res) => {
    dispatch({
      type: SELLER_INFO,
      payload: res.data.data,
    });
  });
};

/// Signup form ///
export const signUpAction = (dispatch, payload) => {
  signup(payload).then((res) => {
    dispatch({
      type: SIGN_UP,
      payload: res.data,
    });
  });
};

//Login form ///
export const loginformAction = (dispatch, payload) => {
  loginform(payload).then((response) => {
    localStorage.setItem("loginData", response.data.token);
    let data = localStorage.getItem("loginData");
    dispatch({
      type: LOGIN_FORM,
      payload: data,
    });
  });
};

// category //

export const categoryAction = (dispatch, payload) => {
  categoryList(payload).then((response) => {
    dispatch({
      type: CATEGORY,
      payload: response.data.data,
    });
  });
};

// Filter Attribute //
export const filterAttribute = (dispatch, payload) => {

  filterdata(payload).then((response) => {
  
    dispatch({
      type: FILTER_ATTRIBUTE,
      payload: response.data,
    });
  });
};

// filter slug data

export const filterDataAction = (dispatch, id) => {
  getSlugfProductId(id).then((response) => {
    dispatch({
      type: FILTER_SLUG_ID,
      payload: response.data,
    });
  });
};

//Add Wishlist ///
export const addToWishlistAction = (disptach, payload) => {
  addToWishlist(payload).then((response) => {
    disptach({
      type: ADD_WISH_LIST,
      payload: response.data,
    });
  });
};

// get wishlist
export const getwishlistAction = (dispatch, payload) => {
  getwishlistitems(payload).then((res) => {
    dispatch({
      type: GET_WISH_LIST,
      payload: res.data,
    });
  });
};

// Remove Wishlist //
export const removeFromWishlistActions = (dispatch, payload) => {
  removeFromWishlist(payload).then((response) => {
    dispatch({
      type: REMOVE_WISH_LIST,
      payload: response.data,
    });
  });
};

// MyProfile //
export const myProfileActions = (dispatch, payload) => {
  myprofiledetails(payload).then((res) => {
    dispatch({
      type: MY_PROFILE,
      payload: res.data,
    });
  });
};

//  Update Profile
export const updateProfileActions = (dispatch, payload) => {
  updateProfiledata(payload).then((res) => {
    dispatch({
      type: UPDATE_PROFILE_DATA,
      payload: res.data,
    });
  });
};
// Add to cart //
export const addToCartActions = (dispatch, payload) => {
  addtocart(payload).then((response) => {
    dispatch({
      type: ADD_TO_CART,
      payload: response.data,
    });
  });
};

/// GetCart //
export const getcartAction = (dispatch) => {
  getcartdata().then((response) => {
    dispatch({
      type: GET_CART,
      payload: response.data.data,
    });
  });
};
// Delete cart ///
export const deletecartAction = (dispatch, payload) => {
  deletecartdata(payload).then((res) => {
    dispatch({
      type: DELETE_CART,
      payload: res.data,
    });
  });
};

// // Auto refresh cart in signout
export const addtocartrefreshAction = (dispatch, id) => {
  dispatch({
    type: AUTO_REFRESH_SIGNOUT,
    payload: id,
  });
};

// update checkout quantity

export const checkedQuantityActions = (dispatch, payload) => {
  updatequantity(payload).then((res) => {
    if (res) {
      getcartAction(dispatch);
    }
    dispatch({
      type: UPDATE_CHECKOUT_QUANTITY,
      payload: res,
    });
  });
};
// Get counrty name
export const getcountryAction = (dispatch) => {
  getcountryname().then((res) => {
    dispatch({
      type: GET_COUNTRY_NAME,
      payload: res.data,
    });
  });
};
// Insert user address
export const adduserAddressActions = (dispatch, payload) => {
  adduseraddress(payload).then((res) => {
    dispatch({
      type: ADD_USER_ADDRESS,
      payload: res.data,
    });
  });
};
// get user address
export const getuserAddressAction = (dispatch, payload) => {
  getuseraddressdata(payload).then((res) => {
    dispatch({
      type: GET_USER_ADDRESS,
      payload: res.data,
    });
  });
};

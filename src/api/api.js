// import react from 'react';
import axios from "axios";
import {
  brandEndPoint,
  sellingHomePage,
  homePageData,
  BannerList,
  searchProduct,
  aboutproductDetails,
  aboutSeller,
  signUpform,
  login,
  category,
  filter,
  getSlugProductListData,
  addWishList,
  removeWishList,
  addCartData,
  myProfile,
  getcart,
  deleteproduct,
  getwishlist,
  updatecheckoutquantity,
  updateProfile,
  insertuseraddress,
  counrtyname,
  getuseraddress,
  updateuseradress,
} from "./endPoints";

export const Api = axios.create({
  baseURL:
    process.env.REACT_APP_BASE_URL +
    process.env.REACT_APP_BASE_URL_PREFIX +
    process.env.REACT_APP_BASE_URL_VERSION,

  // headers: { Authorization: "Bearer " + localStorage.getItem("loginData") },
});

// for Brand Name
export const getBrands = () => {
  return Api.get(brandEndPoint);
};

// for all home Page
export const getSellingProducts = () => {
  return Api.get(sellingHomePage);
};
// for See what's selling section
export const getHomePageData = (requestPayload) => {
  return Api.post(homePageData, requestPayload);
};
//------------for BannerList---//
export const getBannerList = () => {
  return Api.post(BannerList);
};

//-------- Search Product ---------
export const searchProductlist = (payload) => {
  return Api.post(searchProduct, payload);
};

// --------- Product Datails ----------
export const productDetail = (id) => {
  return Api.post(aboutproductDetails + "/" + `${id}`);
};

// About Seller info ///
export const aboutSellerinfo = (sellerId) => {
  // console.log("sellerId==>", sellerId);
  return Api.post(aboutSeller, sellerId);
};

// SignUp ///
export const signup = (payload) => {
  return Api.post(signUpform, payload);
};

// Login ///
export const loginform = (payload) => {
  return Api.post(login, payload);
};

/// Category ///
export const categoryList = (payload) => {
  return Api.get(category, payload);
};

// Filter Attribute //
export const filterdata = (payload) => {
  return Api.post(filter, payload);
};

export const getSlugfProductId = (id) => {
  return Api.post(getSlugProductListData, id);
};
// Add wishlist
export const addToWishlist = (payload) => {
  return Api.post(addWishList, payload);
};
// get wishlist
export const getwishlistitems = (payload) => {
  return Api.post(getwishlist, payload);
};
// Remove wishlist

export const removeFromWishlist = (payload) => {
  return Api.post(removeWishList, payload);
};

// MyProfile //
export const myprofiledetails = (payload) => {
  return Api.post(myProfile, payload);
};
// update profile
export const updateProfiledata = (payload) => {
  return Api.post(updateProfile, payload);
};

// Add to cart //
export const addtocart = (payload) => {
  return Api.post(addCartData, payload);
};

/// Get cart //
export const getcartdata = () => {
  return Api.post(getcart);
};

// Delete Cart //
export const deletecartdata = (payload) => {
  return Api.post(deleteproduct, payload);
};

//update checkout quantity
export const updatequantity = (payload) => {
  return Api.post(updatecheckoutquantity, payload);
};
// Get country name
export const getcountryname = () => {
  return Api.get(counrtyname);
};
// Insert user address
export const adduseraddress = (payload) => {
  return Api.post(insertuseraddress, payload);
};

// get user address
export const getuseraddressdata = (payload) => {
  return Api.post(getuseraddress, payload);
};
// update user address
export const updateuserAddressdata = (payload) => {
  return Api.put(updateuseradress, payload);
};

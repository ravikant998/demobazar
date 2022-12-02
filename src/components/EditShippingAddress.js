import React from "react";

const EditShippingAddress = () => {
  return (
    <>
      <h5>Update useraddress</h5>
      <div className="shipping-itemwrap shipping-remade">
        <form id="addressForm">
          <div className="desc-txt-wrap">
            <div className="desc-txt edit-address">
              <div className="edit-wrapper">
                <label className="edit-label">
                  Name<span className="highlighted">*</span>
                </label>
                <input type="text" placeholder="Name" name="first_name" />
              </div>
              <div className="edit-wrapper">
                <label className="edit-label">
                  Email<span className="highlighted">*</span>
                </label>
                <input type="email" placeholder="Email Address" name="email" />
              </div>
              <div className="edit-wrapper">
                <label className="edit-label">
                  Mobile Number<span className="highlighted">*</span>
                </label>
                <input type="text" placeholder="Mobile Number" name="phone" />
              </div>
              <div className="edit-wrapper">
                <label className="edit-label">
                  Flat Number<span className="highlighted">*</span>
                </label>
                <input
                  type="text"
                  maxLength="10"
                  placeholder="Flat Number"
                  name="flat_no"
                />
              </div>
              <div className="edit-wrapper">
                <label className="edit-label">
                  Street<span className="highlighted">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Street"
                  maxLength="15"
                  name="street"
                />
              </div>
              <div className="edit-wrapper">
                <label className="edit-label">Landmark</label>
                <input type="text" placeholder="Landmark" name="landmark" />
              </div>
              <div className="edit-wrapper">
                <label className="edit-label">
                  Post Code<span className="highlighted">*</span>
                </label>
                <input
                  type="number"
                  minLength="6"
                  maxLength="6"
                  placeholder="Post Code"
                  name="postcode"
                />
              </div>
              <div className="edit-wrapper">
                <label className="edit-label">
                  Country<span className="highlighted">*</span>
                </label>
                <div className="select-state">
                  <select name="country">
                    {/* <option value="">Please select country</option>
                    {countryList &&
                      countryList.data.map((items) => (
                        <option value={items._id}>{items.name}</option>
                      ))} */}
                  </select>
                </div>
              </div>
              <div className="edit-wrapper">
                <label className="edit-label">
                  State<span className="highlighted">*</span>
                </label>
                <div className="select-state">
                  <select name="state">
                    <option value="">Please select state</option>
                    {/* {countryList
                      ? countryList.data[0].stateData.map((item) => {
                          return <option value={item._id}>{item.name}</option>;
                        })
                      : null} */}
                  </select>
                </div>
              </div>
              <div className="edit-wrapper">
                <label className="edit-label">
                  City<span className="highlighted">*</span>
                </label>
                <input type="text" placeholder="City" name="city" />
              </div>

              <div className="desc-txt edit-address">
                <div className="btns-wrapping">
                  <button className="complete-purchase">Cancel</button>
                  <button className="complete-purchase" type="submit">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditShippingAddress;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import moment, { max, min } from "moment";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("Please enter First Name")
    .min(4, "First name must be at least 4 characters")
    .max(20, "First name must be at most 20 characters")
    .matches(/^[A-Za-z ]+$/i, "Please enter valid first name"),
  lastName: yup
    .string()
    .required("Please enter Last Name")
    .min(3, "First name must be at least 3 characters")
    .max(20, "First name must be at most 20 characters")
    .matches(/^[A-Za-z ]+$/i, "Please enter valid first name"),
  email: yup
    .string()
    .required("Please eneter your email ")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Please use the correct email"
    ),
  dob: yup
    .string()
    .required("DOB is Required")
    .test("DOB", "Please choose a valid date of birth", (value) => {
      return moment().diff(moment(value), "years") >= 10;
    }),
  phoneNumber: yup
    .string()
    .required("Please enter phone number")
    .matches(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
      "Phone number is not valid"
    ),
  flatNumber: yup
    .string()
    .required("Please enter flat number")
    .matches(/^[0-9a-zA-Z]+$/),

  zip: yup
    .string()
    .required("Please enter Zip")
    .matches(/^[0-9a-zA-Z]+$/, "Zip code is not valid"),

  cityName: yup
    .string()
    .required("Please enter city name")
    .min(4, "City name must be at least 4 characters")
    .max(30, "City name must be at most 30 characters"),
  password: yup
    .string()
    .required("Please enter password")
    .min(8, "Password length should be greater than 8"),
  cpassword: yup
    .string()
    .required("Please enter the password")
    .min(8, "Password length should be greater than 8")
    .oneOf(
      [yup.ref("password"), null],
      "Confirm Password must be same as New Password"
    ),

  aadharNumber: yup
    .string()
    .required("Aadhar number must be at most 11 charecters"),

  shopName: yup
    .string()
    .required("Please enter shop name")
    .min("Shop name must be at least 4 characters ")
    .max("Shop name must be at most 30 characters "),

  panNumber: yup
    .string()
    .required("Please enter pan number must be at 10 characters")
    .min(10)
    .max(10),
  gstNumber: yup
    .string()
    .required("Please enter gst number must be at 15 characters")
    .matches("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]1}[1-9A-Z]{1}Z[0-9A-Z]{1}$"),
  bankName: yup
    .string()
    .required("Please enter bank name")
    .min("Bank name must be at least 4 characters")
    .max("Bank name must be  at most 30 characters"),
  accountNumber: yup.string().required("Please enter account number"),
  confirmaccount: yup.string().required("Please enter confirm account number"),
  ifscCode: yup.string().required("Please enter ifsc code").min(11),
  accountHoldeName: yup
    .string()
    .required("Please enter account holder name")
    .min("Account holder name must be at least 4 characters")
    .max("Account number must be at most 30 charaters"),
  street: yup.string().required("Please enter street number"),
});

const SellerRegistration = () => {
  const [selectedshopimage, setSelectedshopimage] = useState();
  const [selectedGstPdf, setSelectedGstPdf] = useState();
  const [inputvalue, setInputvalue] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {};

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedshopimage(e.target.files[0]);
    }
  };
  const removeSelectedshopimage = () => {
    setSelectedshopimage();
    setInputvalue(Date.now());
  };

  const gstPdf = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedGstPdf(e.target.files[0]);
    }
  };
  const removeSelectedgstPdf = () => {
    setSelectedGstPdf();
  };
  return (
    <>
      <div className="without-login with-login">
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="login-details">
              <div className="login-description">
                <div className="form-intput">
                  <label>
                    First name<sup className="highlighted">*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    id="fname"
                    maxLength="20"
                    {...register("firstName")}
                    // value=""
                  />
                  {errors.firstName && (
                    <span className="error">{errors.firstName.message}</span>
                  )}
                </div>
                <div className="form-intput">
                  <label>last name</label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    id="lname"
                    maxLength="20"
                    {...register("lastName")}
                    // value=""
                  />
                  {errors.lastName && (
                    <span className="error">{errors.lastName.message}</span>
                  )}
                </div>
                <div className="form-intput">
                  <label>
                    Email<sup className="highlighted">*</sup>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    id="email"
                    maxLength="100"
                    {...register("email")}
                    // value=""
                  />
                  {errors.email && (
                    <span className="error">{errors.email.message}</span>
                  )}
                </div>
                <div className="form-intput">
                  <label>DOB</label>
                  <div className="react-datepicker-wrapper">
                    <div className="react-datepicker__input-container">
                      <input
                        type="text"
                        id="dob"
                        placeholder="Enter your date of birth"
                        className=""
                        {...register("dob")}
                        // value=""
                      />
                      {errors.dob && (
                        <span className="error">{errors.dob.message}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="form-intput">
                  <label>
                    gender<sup className="highlighted">*</sup>
                  </label>
                  <select id="gender">
                    <option value="">Please select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </div>
                <div className="form-intput">
                  <label>
                    phone number
                    <span className="adhar">(should register with aadhar)</span>
                    <sup className="highlighted">*</sup>
                  </label>
                  <div className="phone-number-field">
                    <input
                      type="text"
                      placeholder="Enter your number"
                      id="pnumber"
                      maxLength="10"
                      {...register("phoneNumber")}
                      // value=""
                    />
                    {errors.phoneNumber && (
                      <span className="error">
                        {errors.phoneNumber.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="form-intput"></div>
              </div>
            </div>
            <div className="login-details">
              <h3>Address</h3>
              <div className="login-description">
                <div className="form-intput">
                  <label>
                    flat number<sup className="highlighted">*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your flat number"
                    id="fnumber"
                    maxLength="100"
                    {...register("flatNumber")}
                    // value=""
                  />
                  {errors.flatNumber && (
                    <span className="error">{errors.flatNumber.message}</span>
                  )}
                </div>
                <div className="form-intput">
                  <label>
                    street number<sup className="highlighted">*</sup>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter your street number"
                    id="street"
                    maxLength="100"
                    {...register("street")}
                    // value=""
                  />
                  {errors.street && (
                    <span className="error">{errors.street.message}</span>
                  )}
                </div>
                <div className="form-intput">
                  <label>landmark</label>
                  <input
                    type="text"
                    placeholder="Enter your landmark"
                    id="landmark"
                    maxLength="100"

                    // value=""
                  />
                </div>
                <div className="form-intput">
                  <label>
                    zip code<sup className="highlighted">*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your zip code"
                    id="zip"
                    maxLength="6"
                    {...register("zip")}
                    // value=""
                  />
                  {errors.zip && (
                    <span className="error">{errors.zip.message}</span>
                  )}
                </div>
                <div className="form-intput">
                  <label>country</label>
                  <select>
                    <option value="a" disabled="">
                      Please select country
                    </option>
                    <option value="5ae8284db37516a75ac0aada">INDIA</option>
                  </select>
                </div>
                <div className="form-intput">
                  <label>
                    state<sup className="highlighted">*</sup>
                  </label>
                  <select id="state">
                    <option value="">Please select state</option>
                    <option value="5ae83bedb37516a75ac0ab25">
                      Uttar Pradesh
                    </option>

                    <option value="5be3e11596adbac658328a8d">
                      Lakshadweep
                    </option>
                    <option value="5be3e16b96adbac658328a8f">Puducherry</option>
                  </select>
                </div>
                <div className="form-intput">
                  <label>
                    city<sup className="highlighted">*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your city"
                    id="city"
                    maxLength="30"
                    {...register("cityName")}
                    // value=""
                  />
                  {errors.cityName && (
                    <span className="error">{errors.cityName.message}</span>
                  )}
                </div>
                <div className="form-intput">
                  <label>Address Type</label>
                  <select id="address">
                    <option value="" disabled="">
                      Please select address type
                    </option>
                    <option value="home">Home</option>
                    <option value="work">Office</option>
                    <option value="others">Warehouse</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="login-details">
              <h3>Business details</h3>
              <div className="login-description">
                <div className="form-intput">
                  <label>
                    shop name<sup className="highlighted">*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your shop name"
                    id="shopname"
                    maxLength="30"
                    {...register("shopName")}
                    // value=""
                  />
                  {errors.shopName && (
                    <span className="error">{errors.shopName.message}</span>
                  )}
                </div>
                <div className="form-intput">
                  <label>
                    Aadhaar number<sup className="highlighted">*</sup>
                  </label>
                  <div className="phone-number-field adhar-field">
                    <input
                      type="text"
                      placeholder="Enter your aadhar number"
                      name="aadharNumber"
                      id="aadhar"
                      maxLength="12"
                      {...register("aadharNumber")}
                      // value=""
                    />
                    {errors.aadharNumber && (
                      <span className="error">
                        {errors.aadharNumber.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="form-intput">
                  <label>
                    GST number<sup className="highlighted">*</sup>
                  </label>
                  <input
                    type="text"
                    name="gstNumber"
                    placeholder="Enter your gst number"
                    id="gst"
                    maxLength="15"
                    {...register("gstNumber")}
                    // value=""
                  />
                  {errors.gstNumber && (
                    <span className="error">{errors.gstNumber.message}</span>
                  )}
                </div>
                <div className="form-intput">
                  <label>
                    PAN number<sup className="highlighted">*</sup>
                  </label>
                  <input
                    type="text"
                    name="	panNumber"
                    placeholder="Enter your pan number"
                    id="pan"
                    maxLength="10"
                    {...register("panNumber")}
                    // value=""
                  />
                  {errors.panNumber && (
                    <span className="error">{errors.panNumber.message}</span>
                  )}
                </div>
                <div className="form-intput shop-gst-wrap">
                  <div className="form-intput">
                    <label>shop image</label>
                    <div className="file-inputs">
                      <input
                        key={inputvalue}
                        type="file"
                        name="myImage"
                        className="file-in"
                        id="myFile"
                        onChange={imageChange}
                      />
                      <i className="fas fa-solid fa-upload"></i> &nbsp;&nbsp;
                      <div className="gst-file-name"></div>
                    </div>
                    {selectedshopimage && (
                      <div>
                        <img
                          src={URL.createObjectURL(selectedshopimage)}
                          alt="Thumb"
                        />
                        {selectedshopimage.name}
                        <button onClick={removeSelectedshopimage}>
                          Remove This Image
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="form-intput">
                    <label>
                      gst pdf<sup className="highlighted">*</sup>
                    </label>
                    <div className="file-inputs">
                      <input
                        type="file"
                        variant="outlined"
                        className="file-in"
                        name="upload"
                        accept="application/pdf,.jpg ,.jpeg,.doc , .docx ,.png"
                        id="gstpdf"
                        onChange={gstPdf}
                      />
                      {selectedGstPdf && (
                        <div>
                          <img
                            src={URL.createObjectURL(selectedGstPdf)}
                            alt="Thumb"
                          />
                          {selectedGstPdf.name}
                          <button onClick={removeSelectedgstPdf}>
                            Remove This Image
                          </button>
                        </div>
                      )}
                      <i className="fas fa-file-pdf"></i> &nbsp; &nbsp;
                      <div className="gst-file-name"></div>
                    </div>
                  </div>
                  <div className="seller-img-input">
                    <div className="seller-img-wrap"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="login-details">
              <h3>Bank details</h3>
              <div className="login-description">
                <div className="form-intput">
                  <label>
                    Bank name<sup className="highlighted">*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your bank name"
                    id="bankname"
                    maxLength="100"
                    {...register("bankName")}
                    // value=""
                  />
                  {errors.bankName && (
                    <span className="error">{errors.bankName.message}</span>
                  )}
                </div>
                <div className="form-intput">
                  <label>
                    account number<sup className="highlighted">*</sup>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your account number"
                    id="accountnumber"
                    maxLength="18"
                    minLength="9"
                    {...register("accountNumber")}
                    // value=""
                  />
                  {errors.accountNumber && (
                    <span className="error">
                      {errors.accountNumber.message}
                    </span>
                  )}
                </div>
                <div className="form-intput">
                  <label>
                    confirm account number<sup className="highlighted">*</sup>
                  </label>
                  <input
                    type="password"
                    placeholder="confirm account number"
                    id="confirmaccount"
                    {...register("confirmac")}
                    // value=""
                  />
                  {errors.confirmac && (
                    <span className="error">
                      {errors.confirmaccount.message}
                    </span>
                  )}
                </div>
                <div className="form-intput">
                  <label>
                    IFSC<sup className="highlighted">*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your IFSC"
                    id="ifsc"
                    maxLength="11"
                    {...register("ifscCode")}
                    // value=""
                  />
                  {errors.ifscCode && (
                    <span className="error">{errors.ifscCode.message}</span>
                  )}
                </div>
                <div className="form-intput">
                  <label>
                    account holder name<sup className="highlighted">*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter account holder name"
                    id="acholder"
                    maxLength="100"
                    {...register("accountHoldeName")}
                    // value=""
                  />
                  {errors.accountHoldeName && (
                    <span className="error">
                      {errors.accountHoldeName.message}
                    </span>
                  )}
                </div>
                <div className="form-intput">
                  <label>cheque Image</label>
                  <div className="file-inputs">
                    <input
                      type="file"
                      name="myImage"
                      className="file-in"
                      id="cheque"
                    />
                    <i className="fas fa-solid fa-upload"></i> &nbsp;&nbsp;
                    <div className="gst-file-name"></div>
                  </div>
                  <div className="seller-img-wrap"></div>
                </div>
              </div>
            </div>

            <div className="login-details">
              <div className="login-description">
                <div className="form-intput">
                  <label>
                    password<sup className="highlighted">*</sup>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    id="password"
                    {...register("password")}
                    // value=""
                  />
                  {errors.password && (
                    <span className="error">{errors.password.message}</span>
                  )}
                </div>
                <div className="form-intput">
                  <label>
                    confirm password<sup className="highlighted">*</sup>
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    id="confirmpass"
                    {...register("cpassword")}
                  />
                  {errors.cpassword && (
                    <span className="error">{errors.cpassword.message}</span>
                  )}
                </div>
              </div>
            </div>
            {/* <div className="cond">
             <input type="checkbox" id="term"/> I agree to Bazaar <a target="_blank" href="/page/terms">Terms of Service</a>&nbsp;and <a target="_blank" href="/policy">Privacy</a>.<br><br>
                                        </div> */}
            <div className="registration-btn">
              <input className="btn shop-now" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SellerRegistration;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpAction } from "../../store/actions/action";
const SignUpForm = ({ onclose }) => {
  const dispatch = useDispatch();
  const signupData = useSelector((state) => state.SignUpReducers.signupform);
  function detectBrowser() {
    if (
      (navigator.userAgent.indexOf("Opera") ||
        navigator.userAgent.indexOf("OPR")) != -1
    ) {
      return "Opera";
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
      return "Chrome";
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
      return "Safari";
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
      return "Firefox";
    } else if (
      navigator.userAgent.indexOf("MSIE") != -1 ||
      !!document.documentMode == true
    ) {
      return "IE"; //crap
    } else {
      return "Unknown";
    }
  }
  const handlesubmit = (e) => {
    e.preventDefault();
    const payload = {
      browser: detectBrowser(),
      ip: "103.81.213.87",
      login: false,
      first_name: e.target.value.firstName,
      last_name: e.target.lastName.value,
      email: e.target.email.value,
      dob: e.target.dob.value,
      mobile: e.target.phone.value,
      password: e.target.password.value,
      gender: e.target.gender.value,
    };
    signUpAction(dispatch, payload);
    // console.log("asdkl", payload);
  };

  return (
    <>
      <div className="popup-wrap">
        <div className="signup-form signup-frm-wrp">
          <button className="close-btn">
            <i className="fal fa-times-circle">
              <span onClick={() => onclose(false)}>Close</span>
            </i>
          </button>
          <div className="inner-sign">
            <div className="sign-img">
              <div className="sign-opp-wrap">
                <div className="facebook-button-holder">
                  <span style={{ transition: "opacity 0.5s ease 0s" }}>
                    <button
                      type="button"
                      className="kep-familylogin-facebook metro"
                    >
                      {/* Login with Facebook */}
                    </button>
                    {/* <style>.kep-login-facebook{font-:Helvetica,sans-serif;font-weight:700;-webkit-font-smoothing:antialiased;color:#fff;cursor:pointer;display:inline-block;font-size:calc(.27548vw + 12.71074px);text-decoration:none;text-transform:uppercase;transition:background-color .3s,border-color .3s;background-color:#4c69ba;border:calc(.06887vw + .67769px) solid #4c69ba;padding:calc(.34435vw + 13.38843px) calc(.34435vw + 18.38843px)}.kep-login-facebook.small{padding:calc(.34435vw + 3.38843px) calc(.34435vw + 8.38843px)}.kep-login-facebook.medium{padding:calc(.34435vw + 8.38843px) calc(.34435vw + 13.38843px)}.kep-login-facebook.metro{border-radius:0}.kep-login-facebook .fa{margin-right:calc(.34435vw + 3.38843px)}</style> */}
                  </span>
                  <button className="register-facebook mail-button">
                    <span>
                      <i className="fab fa-facebook-f"></i> &nbsp; Sign up with
                      Facebook
                    </span>
                  </button>
                </div>
                <div className="google-button-holder">
                  <button
                    type="button"
                    // style="background-color: rgb(255, 255, 255); display: inline-flex; align-items: center; color: rgba(0, 0, 0, 0.54); box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px; padding: 0px; border-radius: 2px; border: 1px solid transparent; font-size: 14px; font-weight: 500; font-family: Roboto, sans-serif;"
                  ></button>
                  <button className="register-google mail-button">
                    <span>
                      <i className="google-icn">
                        <img
                          src="/assets/images/google.svg"
                          alt=""
                          height="15"
                          width="15"
                        />
                      </i>
                      Sign up with Google
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="sign-form">
              <form onSubmit={handlesubmit}>
                <div className="detail-from ">
                  <div className="user-detail-edit">
                    <h4 className="form-title">
                      Sign up to <span>Bazaar</span>
                    </h4>
                  </div>
                  <div className="form-input">
                    <div className="MuiFormControl-root MuiTextField-root">
                      <label
                        className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required"
                        data-shrink="false"
                      >
                        First Name*
                        <span
                          aria-hidden="true"
                          className="MuiFormLabel-asterisk MuiInputLabel-asterisk"
                        >
                          &thinsp;*
                        </span>
                      </label>
                      <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl">
                        <input
                          name="firstName"
                          required
                          type="text"
                          className="MuiInputBase-input MuiOutlinedInput-input"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-input">
                    <div className="MuiFormControl-root MuiTextField-root">
                      <label
                        className="MuiFormLabel-root MuiInputLabel-root 
                       MuiInputLabel-formControl MuiInputLabel-animated
                      MuiInputLabel-outlined Mui-required Mui-required"
                        data-shrink="false"
                      >
                        Last Name*
                        <span
                          aria-hidden="true"
                          className="MuiFormLabel-asterisk MuiInputLabel-asterisk"
                        >
                          &thinsp;*
                        </span>
                      </label>
                      <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl">
                        <input
                          name="lastName"
                          required
                          type="text"
                          className="MuiInputBase-input MuiOutlinedInput-input"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-input">
                    <div className="MuiFormControl-root MuiTextField-root">
                      <label
                        className="MuiFormLabel-root MuiInputLabel-root 
                          MuiInputLabel-formControl 
                          MuiInputLabel-animated 
                          MuiInputLabel-outlined 
                          Mui-required Mui-required"
                        data-shrink="false"
                      >
                        Email address*
                        <span
                          aria-hidden="true"
                          className="MuiFormLabel-asterisk MuiInputLabel-asterisk"
                        >
                          &thinsp;*
                        </span>
                      </label>
                      <div
                        className="MuiInputBase-root MuiOutlinedInput-root 
                         MuiInputBase-formControl"
                      >
                        <input
                          name="email"
                          required
                          type="email"
                          className="MuiInputBase-input MuiOutlinedInput-input"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-input">
                    <div
                      className="MuiFormControl-root MuiTextField-root"
                      readOnly=""
                    >
                      <div
                        className="MuiInputBase-root 
                              MuiOutlinedInput-root 
                              MuiInputBase-formControl"
                      >
                        <input
                          name="dob"
                          placeholder="Date of Birth*"
                          required
                          type="text"
                          className="MuiInputBase-input MuiOutlinedInput-input"
                        />
                      </div>
                    </div>
                    <i className="toggle-password fas fa-calendar-alt"></i>
                  </div>
                  <div className="MuiFormControl-root form-input">
                    <label
                      className="MuiFormLabel-root MuiInputLabel-root 
                                         MuiInputLabel-formControl MuiInputLabel-animated 
                                         MuiInputLabel-outlined"
                      data-shrink="false"
                    >
                      Gender
                    </label>
                    <div
                      className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl"
                      required=""
                    >
                      <input
                        name="gender"
                        type="text"
                        tabIndex="-1"
                        className="MuiSelect-nativeInput"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-input">
                    <div className="MuiFormControl-root MuiTextField-root">
                      <label
                        className="MuiFormLabel-root
                          MuiInputLabel-root 
                          MuiInputLabel-formControl 
                          MuiInputLabel-animated 
                          MuiInputLabel-outlined Mui-required Mui-required"
                        data-shrink="false"
                      >
                        Phone Number*
                        <span
                          aria-hidden="true"
                          className="MuiFormLabel-asterisk 
                       MuiInputLabel-asterisk"
                        >
                          &thinsp;*
                        </span>
                      </label>
                      <div
                        className="MuiInputBase-root 
                      MuiOutlinedInput-root MuiInputBase-formControl"
                      >
                        <input
                          name="phone"
                          required
                          type="text"
                          maxLength="10"
                          minLength="10"
                          className="MuiInputBase-input 
                          MuiOutlinedInput-input"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-input">
                    <div className="MuiFormControl-root MuiTextField-root">
                      <label
                        className="MuiFormLabel-root MuiInputLabel-root
                             MuiInputLabel-formControl 
                             MuiInputLabel-animated 
                             MuiInputLabel-outlined 
                             Mui-required Mui-required"
                        data-shrink="false"
                      >
                        Password *
                        <span
                          aria-hidden="true"
                          className="MuiFormLabel-asterisk 
                          MuiInputLabel-asterisk"
                        >
                          &thinsp;*
                        </span>
                      </label>
                      <div
                        className="MuiInputBase-root
                         MuiOutlinedInput-root
                               MuiInputBase-formControl"
                      >
                        <input
                          name="password"
                          required
                          type="password"
                          maxLength="15"
                          minLength="6"
                          className="MuiInputBase-input
                           MuiOutlinedInput-input"
                        />
                      </div>
                    </div>
                    <i className="far fa-eye-slash"></i>
                  </div>
                  <div className="form-input">
                    <div className="MuiFormControl-root MuiTextField-root"></div>
                    <i className="far fa-eye-slash"></i>
                  </div>
                  <div className="cond">
                    <input type="checkbox" /> I agree to Bazaar
                    <a target="_blank" href="/page/terms">
                      Terms of Service
                    </a>
                    &nbsp;and
                    <a target="_blank" href="/policy">
                      Privacy
                    </a>
                    .
                  </div>
                  <div className="sign-btn">
                    <button className="shop-now">Sign up</button>
                  </div>
                  <div className="already-ac">
                    Already have an account?&nbsp;<span>Sign In</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;

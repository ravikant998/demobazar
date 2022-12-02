import React from "react";
import { useDispatch } from "react-redux";
import { loginformAction } from "../../store/actions/action";

const LoginForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const onhandlesubmit = (e) => {
    e.preventDefault();
    const payload = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    loginformAction(dispatch, payload);
    setTimeout(() => {
      onClose(false);
      window.location.reload();
    }, 2000);
  };

  return (
    <>
      <div className="popup-wrap">
        <div className="signup-form signup-frm-wrp user-login">
          <button className="close-btn">
            <i className="fal fa-times-circle">
              <span onClick={() => onClose(false)}>close</span>
            </i>
          </button>
          <div className="inner-sign">
            <div className="sign-img log-img">
              <div className="sign-opp-wrap"></div>
            </div>
            <div className="sign-form">
              <form onSubmit={onhandlesubmit}>
                <div className="detail-from">
                  <div className="user-detail-edit">
                    <h4 className="form-title">
                      Sign In to <span>Bazaar</span>
                    </h4>
                  </div>
                  <div className="facebook-button-holder">
                    <span style={{ transition: "opacity 0.5s ease 0s" }}>
                      <button
                        type="button"
                        className="kep-login-facebook metro"
                      >
                        Login with Facebook
                      </button>
                      {/* <style>.kep-login-facebook{font-family:Helvetica,sans-serif;font-weight:700;-webkit-font-smoothing:antialiased;color:#fff;cursor:pointer;display:inline-block;font-size:calc(.27548vw + 12.71074px);text-decoration:none;text-transform:uppercase;transition:background-color .3s,border-color .3s;background-color:#4c69ba;border:calc(.06887vw + .67769px) solid #4c69ba;padding:calc(.34435vw + 13.38843px) calc(.34435vw + 18.38843px)}.kep-login-facebook.small{padding:calc(.34435vw + 3.38843px) calc(.34435vw + 8.38843px)}.kep-login-facebook.medium{padding:calc(.34435vw + 8.38843px) calc(.34435vw + 13.38843px)}.kep-login-facebook.metro{border-radius:0}.kep-login-facebook .fa{margin-right:calc(.34435vw + 3.38843px)}</style> */}
                    </span>
                    <button className="register-facebook mail-button">
                      <span>
                        <i className="fab fa-facebook-f"></i> &nbsp; Sign in
                        with Facebook
                      </span>
                    </button>
                  </div>

                  <div className="or-opp">
                    <span>or</span>
                  </div>
                  <div className="form-input">
                    <div className="MuiFormControl-root MuiTextField-root">
                      <label
                        className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required"
                        data-shrink="false"
                      >
                        Email or phone number*
                        <span
                          aria-hidden="true"
                          className="MuiFormLabel-asterisk MuiInputLabel-asterisk"
                        >
                          &thinsp;*
                        </span>
                      </label>
                      <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl">
                        <input
                          name="email"
                          type="text"
                          className="MuiInputBase-input MuiOutlinedInput-input"
                        />
                        <fieldset
                          aria-hidden="true"
                          className="jss33 MuiOutlinedInput-notchedOutline"
                        >
                          <legend className="jss35">
                            <span>Email or phone number*&nbsp;*</span>
                          </legend>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                  <div className="form-input">
                    <div className="MuiFormControl-root MuiTextField-root">
                      <label
                        className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required"
                        data-shrink="false"
                      >
                        Password*
                        <span
                          aria-hidden="true"
                          className="MuiFormLabel-asterisk MuiInputLabel-asterisk"
                        >
                          &thinsp;*
                        </span>
                      </label>
                      <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl">
                        <input
                          name="password"
                          type="password"
                          maxLength="15"
                          minLength="6"
                          className="MuiInputBase-input MuiOutlinedInput-input"
                        />
                        <fieldset
                          aria-hidden="true"
                          className="jss33 MuiOutlinedInput-notchedOutline"
                        >
                          <legend className="jss35">
                            <span>Password*&nbsp;*</span>
                          </legend>
                        </fieldset>
                      </div>
                    </div>
                    <i className="fal fa-eye-slash"></i>
                  </div>
                  <span className="checkbox-remember">Forgot Password?</span>
                  <div className="sign-btn">
                    <button className="shop-now">sign In</button>
                  </div>
                  <div className="already-ac">
                    Don't have an account?&nbsp;<span>Sign Up</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default LoginForm;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { myProfileActions } from "../store/actions/action";
import { updateProfileActions } from "../store/actions/action";

const EditProfile = () => {
  const dispatch = useDispatch();
  const myprofiledata = useSelector(
    (state) => state.myProfileReducers?.myprofiledata
  );
  const [editprofile, setEditprofile] = useState({
    first_name: myprofiledata?.userdata.first_name,
    last_name: myprofiledata?.userdata.last_name,
    email: myprofiledata?.userdata.email,
    mobile: myprofiledata?.userdata.mobile,
    dob: myprofiledata?.userdata.dob,
  });

  const editProfile = useSelector(
    (state) => state.profileUpdateReducers?.updateprofile
  );

  useEffect(() => {
    myProfileActions(dispatch);
  }, [dispatch, editprofile]);

  const updateProfiledata = (e) => {
    e.preventDefault();
    const payload = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      date_of_birth: e.target.dob.value,
      mobile: e.target.mobile.value,
    };

    updateProfileActions(dispatch, payload);
    myProfileActions(dispatch);
  };

  return (
    <>
      <div className="right-prof-sec">
        <div className="container">
          <div style={{ position: "relative" }}>
            <div style={{ opacity: 1 }}>
              <form className="detail-from" onSubmit={updateProfiledata}>
                <h4 className="form-title">My profile</h4>
                <div className="group-wrap edit-profile">
                  <div className="form-input">
                    <span>First Name</span>
                    <input
                      type="text"
                      required=""
                      minLength="3"
                      maxLength="50"
                      placeholder="Name*"
                      name="first_name"
                      defaultValue={myprofiledata?.userdata.first_name || ""}
                    />
                  </div>
                  <div className="form-input">
                    <span>Last Name</span>
                    <input
                      type="text"
                      required=""
                      minLength="3"
                      maxLength="50"
                      placeholder="Name*"
                      name="last_name"
                      defaultValue={myprofiledata?.userdata.last_name || ""}
                    />
                  </div>
                  <div className="form-input">
                    <span>Email Address</span>
                    <input
                      type="email"
                      required=""
                      placeholder="Email Address*"
                      disabled=""
                      name="email"
                      defaultValue={myprofiledata?.userdata.email || ""}
                    />
                  </div>
                  <div className="form-input edit-form-input">
                    <span>Mobile Number</span>
                    <input
                      type="text"
                      minLength="10"
                      maxLength="10"
                      placeholder="Mobile Number"
                      name="mobile"
                      defaultValue={myprofiledata?.userdata.mobile}
                    />
                    <span className="correct-text" style={{ color: "green" }}>
                      Verified
                    </span>
                  </div>
                  <div className="form-input">
                    <span>Date of Birth</span>
                    <div className="react-datepicker-wrapper">
                      <div className="react-datepicker__input-container">
                        <input
                          type="text"
                          id="dob"
                          placeholder="Enter your date of birth"
                          className=""
                          name="dob"
                          defaultValue={myprofiledata?.userdata.dob || ""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-input"></div>
                </div>
                <div className="flex-row">
                  <button type="submit" className="header-sell">
                    save details
                  </button>
                  <Link className="header-sell" to="/profile">
                    Back
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { myProfileActions } from "../store/actions/action";

const MyProfile = () => {
  const dispatch = useDispatch();
  const myprofiledata = useSelector(
    (state) => state.myProfileReducers?.myprofiledata
  );
  console.log("myprofiledata", myprofiledata);
  useEffect(() => {
    myProfileActions(dispatch);
  }, [dispatch]);

  return (
    <>
      <div className="right-prof-sec">
        <div className="container">
          <div style={{ position: "relative" }}>
            <div className="detail-from">
              <div className="user-detail-edit">
                <h4 className="form-title">My Profile</h4>
                <Link to="/profile/edit">
                  <button className="header-sell">
                    <i className="fas fa-user-edit"></i>Edit
                  </button>
                </Link>
              </div>

              <div className="group-wrap">
                <div className="form-input">
                  <span>First Name</span>
                  <input
                    type="text"
                    disabled=""
                    name="firstname"
                    value={myprofiledata?.userdata.first_name || ""}
                  />
                </div>
                <div className="form-input">
                  <span>Last Name</span>
                  <input
                    type="text"
                    disabled=""
                    name="firstname"
                    value={myprofiledata?.userdata.last_name || ""}
                  />
                </div>
                <div className="form-input">
                  <span>Email Address</span>
                  <input
                    type="email"
                    disabled=""
                    name="email"
                    value={myprofiledata?.userdata.email || ""}
                  />
                </div>
                <div className="form-input">
                  <span>Mobile Number</span>
                  <input
                    type="text"
                    disabled=""
                    name="phone"
                    value={myprofiledata?.userdata.mobile || ""}
                  />
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
                        value={myprofiledata?.userdata.dob || ""}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="group-wrap"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;

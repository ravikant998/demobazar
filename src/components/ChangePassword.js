import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateProfileActions } from "../store/actions/action";
import { myProfileActions } from "../store/actions/action";

const ChangePassword = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    myProfileActions(dispatch);
    updateProfileActions(dispatch);
  }, [dispatch]);

  const handlechangePassword = (e) => {
    e.preventDefault();
    const payload = {
      currentPassword: e.target.currentPassword?.value,
      newPassword: e.target.newPassword?.value,
      confirmPassword: e.target.confirmPassword?.value,
      date_of_birth: e.target.date_of_birth?.value,
      full_name: e.target.full_name?.value,
      mobile: e.target.mobile?.value,
      userId: e.target.userId?.value,
    };
    console.log(payload);
    updateProfileActions(dispatch, payload);
  };
  return (
    <>
      <div className="right-prof-sec">
        <div className="container">
          <div style={{ position: "relative" }}>
            <div style={{ opacity: 1 }}>
              <form className="detail-from" onSubmit={handlechangePassword}>
                <h4 className="form-title">My profile</h4>
                <div className="group-wrap edit-profile">
                  <div className="form-input">
                    <span>Current Password</span>
                    <input
                      type="password"
                      placeholder="Current Password"
                      required=""
                      name="currentPassword"
                      // value=""
                    />
                    <i className="toggle-password fa fa-fw fa-eye-slash"></i>
                  </div>
                  <div className="form-input">
                    <span>New Password</span>
                    <input
                      type="password"
                      required=""
                      placeholder="New Password"
                      minLength="6"
                      maxLength="15"
                      name="newPassword"
                      // value=""
                    />
                    <i className="toggle-password fa fa-fw fa-eye-slash"></i>
                  </div>
                  <div className="form-input">
                    <span>Confirm Password</span>
                    <input
                      type="password"
                      required=""
                      placeholder="Confirm Password"
                      minLength="6"
                      maxLength="15"
                      name="confirmPassword"
                    />
                    <i className="toggle-password fa fa-fw fa-eye-slash"></i>
                  </div>
                </div>
                <div className="flex-row">
                  <button type="submit" className="header-sell">
                    Change Password
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

export default ChangePassword;

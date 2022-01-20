import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginFormModal from "../LoginFormModal/index";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import "./Navbar.css";
// import UploadImageModal from "../UploadImage/UploadImageModal";

const Navigation = ({ isLoaded }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logoutUser());
    return history.push("/");
  };
  let sessionLinks;
  let homeLink;
  if (sessionUser) {
    homeLink = (
      <>
        <NavLink className="nav-link" to={`/homepage`}>
          bLinK
        </NavLink>
        {/* <NavLink to={`/${sessionUser.username}/profile`}>Profile</NavLink> */}
      </>
    );
    sessionLinks = (
      <div>
        {/* <UploadImageModal /> */}
        <button onClick={logout} className="logoutBtn">
          Log Out
        </button>
      </div>
    );
  } else {
    homeLink = (
      <NavLink className="nav-link" exact to="/">
        bLinK
        {/* <img className="image" src="https://cdn.discordapp.com/attachments/536996013911572484/933508176836431942/Screenshot_678.png"></img> */}
      </NavLink>
    );
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup" className="signup-button">
          Sign Up
        </NavLink>
      </>
    );
  }

  return (
    <nav className="navbar">
      <div>{isLoaded && homeLink}</div>
      <div>{isLoaded && sessionLinks}</div>
    </nav>
  );
};

export default Navigation;

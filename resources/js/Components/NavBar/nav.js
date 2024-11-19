import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import logo from "../../assets/img/suya/Logo-Side-bar.png";
import Avatar from "../../assets/img/avatar.png";
import "./index.css";
import down from "../../assets/img/Profile/Wallet/Vector.png";
// import seyi from "../../assets/img/Profile/Wallet/Ellipse 39.png"
import account from "../../assets/img/Vector.png";
import { getUser } from "../../services/auth";
import { removeState, removeStateWallet } from "../../store/removeState";

export const Navbar = () => {
  const [user, setUser] = useState(null);
  // const [menu, setMenu] = useState(true);
  const toggleMenu = () => {
    // setMenu(false);
      var x = document.getElementById("navbarsExample09");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
  };

  const history = useHistory();

  const userInfo = getUser();

  useEffect(() => {
    if (userInfo === null) {
      return false;
    } else {
      setUser(userInfo);
    }
    // eslint-disable-next-line
  }, []);

  const logOut = () => {
    removeState();
    removeStateWallet();
    history.push("/");
  };

  return (
    <div className="navbar-section">
      <div className="container">
        <nav className="navbar navbar-light navbar-expand-md">
          <Link className="navbar-brand d-flex w-50 mr-auto" to="/">
            <img src={logo} alt="" className="home-logo" />
          </Link>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarsExample09"
            aria-controls="navbarsExample09"
            // aria-expanded={!menu ? true : false}
            aria-expanded="false"
            aria-label="Toggle navigation"
            type="button"
            onClick={toggleMenu}
          >
            {/* <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          > */}
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
          <div
            className="collapse navbar-collapse w-100"
            // className={`${menu ? "collapse" : ""} navbar-collapse w-100`}
            id="navbarsExample09"
          >
            {user === null ? (
              <ul className="nav pb-3 navbar-nav ml-auto w-100 justify-content-end align-items-center">
                {/* <li className="nav-item navmenu">
                  <NavLink
                    className="nav-link"
                    to="/"
                    exact
                    activeClassName="active"
                  >
                    Bills Payment
                  </NavLink>
                </li> */}
                <li className="notify">
                  <button className="drop-down-option">
                    Move Freely
                    <img src={down} alt="" className="ml-1" />{" "}
                  </button>
                  <ul className="submenu">
                    <li style={{marginBottom:"10px"}}>
                      <Link to="/Pickupservice">Pick up Service</Link>
                    </li>
                    <li>
                      <Link to="/hire-vehicle">Hire a Bus</Link>
                    </li>
                  </ul>
                </li>

                <li className="notify">
                  <button className="drop-down-option">
                    Do Freely
                    <img src={down} alt="" className="ml-1" />{" "}
                  </button>
                  <ul className="submenu">
                    <li style={{marginBottom:"10px"}}>
                      <Link to="/paybills">Bills Payment</Link>
                    </li>
                    <li>
                      <Link to="/enterprise">Enterprise Partner</Link>
                    </li>
                  </ul>
                </li>
                <li className="notify" style={{marginLeft:"10px"}}>
                  <Link
                    to="/suggest-route"
                    className="suggest-link drop-down-option"
                    exact={true}
                    activeClassName="active"
                  >
                    Suggest Route
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/entry" className="blue-btn-nav">
                    Sign In / Sign Up
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="nav navbar-nav ml-auto w-100 justify-content-end align-items-center">
                {/* <li className="nav-item navmenu">
                  <NavLink
                    className="nav-link"
                    to="/"
                    exact
                    activeClassName="active"
                  >
                    Bills Payment
                  </NavLink>
                </li> */}
                <li className="notify">
                  <button className="drop-down-option">
                    Move Freely
                    <img src={down} alt="" className="ml-1" />{" "}
                  </button>
                  <ul className="submenu">
                    <li style={{marginBottom:"10px"}}>
                      <Link to="/pickup">Pick up Service</Link>
                    </li>
                    <li>
                      <Link to="/bushire">Hire a Bus</Link>
                    </li>
                  </ul>
                </li>

                <li className="notify">
                  <button className="drop-down-option">
                    Do Freely
                    <img src={down} alt="" className="ml-1" />{" "}
                  </button>
                  <ul className="submenu">
                    <li style={{marginBottom:"10px"}}>
                      <Link to="/paybills">Bills Payment</Link>
                    </li>
                    <li>
                      <Link to="/enterprise">Enterprise Partner</Link>
                    </li>
                  </ul>
                </li>
                <li className="notify" style={{marginLeft:"10px"}}>
                  <Link
                    to="/suggest-route"
                    className="suggest-link drop-down-option"
                    exact={true}
                    activeClassName="active"
                  >
                    Suggest Route
                  </Link>
                </li>
                {/* <li className="nav-item navmenu">
                  <NavLink
                    className="nav-link"
                    to="/enterprise"
                    exact
                    activeClassName="active"
                  >
                    Enterprise partner
                  </NavLink>
                </li>
                <li className="nav-item navmenu">
                  <NavLink
                    className="nav-link"
                    to="/bushire"
                    exact
                    activeClassName="active"
                  >
                    Hire a Bus
                  </NavLink>
                </li>
                <li className="nav-item navmenu">
                  <NavLink
                    className="nav-link"
                    to="/pickup"
                    exact
                    activeClassName="active"
                  >
                    Pick Up services
                  </NavLink>
                </li>
                <li className="nav-item navmenu">
                  <NavLink
                    className="nav-link"
                    to="/busterminal"
                    exact
                    activeClassName="active"
                  >
                    Bus Terminal
                  </NavLink>
                </li> */}
                <li className="notify">
                  <button className="drop-down-option">
                    <div className="avatar-icon">
                      {user.Image === null || user.Image === "" ? (
                        <img src={Avatar} alt="" className="rounded-circle" />
                      ) : (
                        <img
                          src={user.Image}
                          alt=""
                          className="rounded-circle"
                        />
                      )}
                    </div>
                    <img src={down} alt="" className="ml-1" />{" "}
                  </button>
                  <ul className="submenu">
                    <li style={{marginBottom:"10px"}}>
                      <img src={account} alt="" />{" "}
                      <Link to="/setting">My Account</Link>
                    </li>
                    <li onClick={logOut}>
                      <i className="fa fa-sign-out"></i> Logout
                    </li>
                  </ul>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

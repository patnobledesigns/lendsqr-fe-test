import React from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import CustomerLinks from "./CustomerLinks";
import BusinessLink from "./BusinessLink";
import SettingsLinks from "./SettingsLinks";

const MainNavbar = () => {
    const dispatch = useDispatch();
    const handleShowSideBar = () => {
        const hamBurger = document.querySelector(".nav__sidebar") as HTMLElement;
        hamBurger.classList.add("nav__sidebar-show");
    };
    const handleRemoveSideBar = () => {
        const hamBurger = document.querySelector(".nav__sidebar") as HTMLElement;;
        hamBurger.classList.remove("nav__sidebar-show");
    };
    return (
        // =============== HEADER ===============

        <header className="header scroll-header" id="header">
            <nav className="nav">
                <div className="nav__left">
                    <img
                        onClick={handleShowSideBar}
                        src="/assets/images/humburger.png"
                        className="nav__hamburger"
                        alt="logo"
                    />
                    <div className="nav__rightGroup">
                        <a href="/" className="nav__logo">
                            <img className="nav__logo-img" src="/assets/svg/logo.svg" alt="logo" />

                        </a>
                        <div className="nav__rightInput">
                            <input className="nav__right-input" type="text" placeholder="Search for anything" />
                            <button className="nav__rightInput-btn">
                                <img className="nav__rightInput-icon" src="/assets/images/search.png" alt="search" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="nav__right">
                    <p className="nav__right-docs">Docs</p>
                    <img className="nav__right-bell" src="/assets/images/bell.png" alt="bell" />
                    <div className="nav__avatar">
                        <img className="nav__avatar-img" src="/assets/images/avatar.png" alt="avatar" />
                        <p className="nav__avatar-name">Adedeji
                            <img className="nav__avatar-icon" src="/assets/images/dropdown.png" alt="dropdown" />
                        </p>
                    </div>
                </div>

                <div className="nav__sidebar">

                    <div className="nav__sidebar-pad">
                        <img
                            onClick={handleRemoveSideBar}
                            className="nav__sidebar-img"
                            src="/assets/images/close.png"
                            alt="close"
                        />
                        <div className="nav__sidebarInput">
                            <input className="nav__sidebar-input" type="text" placeholder="Search for anything" />
                            <button className="nav__sidebarInput-btn">
                                <img className="nav__sidebarInput-icon" src="/assets/images/search.png" alt="search" />
                            </button>
                        </div>


                        {/* ORGANIZATION */}
                        <div className="nav__organization">
                            <img className="nav__sidebar-icon" src="/assets/images/briefcase.png" alt="briefcase" />
                            <p className="nav__organization-name">Switch Organization
                            </p>
                            <img className="nav__organization-icon" src="/assets/images/dropdown-alt.png" alt="dropdown" />
                        </div>
                        {/* DASHBOARD */}
                        <Link to="" className="nav__dashboard">
                            <img className="nav__sidebar-icon" src="/assets/images/home.png" alt="close" />
                            <span className="nav__dashboard-text">Dashboard</span>
                        </Link>

                    </div>
                    {/* CUSTOMERS LINKS */}
                    <CustomerLinks />
                    {/* BUSINESS LINKS */}
                    <BusinessLink />
                    {/* SETTINGS */}
                    <SettingsLinks />
                    <hr style={{ marginTop: "71px", border: "1px solid #213F7D", opacity: "0.1" }} />

                    <Link to="" className="nav__sidebar-link" style={{ marginTop: "20px", marginBottom: "40px", fontWeight: "bold" }}>
                        <img className="nav__sidebar-icon" src="/assets/images/sign-out.png" alt="sign-out" />
                        <span className="nav__sidebar-text">Logout</span>
                    </Link>
                    <span className="nav__version">v1.2.0</span>
                </div>


            </nav>
        </header>
    );
};

export default MainNavbar;

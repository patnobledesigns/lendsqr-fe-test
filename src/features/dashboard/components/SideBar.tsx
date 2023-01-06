import React from 'react';

import { Link } from 'react-router-dom';
import CustomerLinks from './users/CustomerLinks';
import SettingsLinks from './users/SettingsLinks';
import BusinessLink from './users/BusinessLink';

const SideBar = ({ children }: { children: React.ReactNode; }) => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="nav__sidebar-pad">


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
      {children}
    </div>
  );
};

export default SideBar;
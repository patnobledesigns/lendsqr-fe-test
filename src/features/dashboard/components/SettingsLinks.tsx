import React from 'react';
import { Link } from 'react-router-dom';

const SettingsLinks = () => {
    return (
        <div className="nav__sidebar-links">
            <p className="nav__sidebar-title">SETTINGS</p>
            <Link to="/users" className="nav__sidebar-link">
                <img className="nav__sidebar-icon" src="/assets/images/preference.png" alt="preference" />
                <span className="nav__sidebar-text">Preferences</span>
            </Link>
            <Link to="" className="nav__sidebar-link">
                <img className="nav__sidebar-icon" src="/assets/images/badge-percent.png" alt="badge-percent" />
                <span className="nav__sidebar-text">Fees and Pricing</span>
            </Link>
            <Link to="" className="nav__sidebar-link">
                <img className="nav__sidebar-icon" src="/assets/images/clipboard-list.png" alt="clipboard-list" />
                <span className="nav__sidebar-text">Audit Logs</span>
            </Link>
            <Link to="" className="nav__sidebar-link">
                <img className="nav__sidebar-icon" src="/assets/images/tire.png" alt="tire" />
                <span className="nav__sidebar-text">Systems Messages</span>
            </Link>

        </div>
    );
};

export default SettingsLinks;
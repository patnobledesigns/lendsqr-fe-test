import React from 'react';
import { Link } from 'react-router-dom';

const CustomerLinks = () => {
    return (
        <div className="nav__sidebar-links">
            <p className="nav__sidebar-title">CUSTOMERS</p>
            <Link to="" className="nav__sidebar-link linkactive">
                <img className="nav__sidebar-icon" src="/assets/images/user-friends.png" alt="user-friends" />
                <span className="nav__sidebar-text">Users</span>
            </Link>
            <Link to="" className="nav__sidebar-link">
                <img className="nav__sidebar-icon" src="/assets/images/guarantors.png" alt="guarantors" />
                <span className="nav__sidebar-text">Guarantors</span>
            </Link>
            <Link to="" className="nav__sidebar-link">
                <img className="nav__sidebar-icon" src="/assets/images/loans-sack.png" alt="loans-sack" />
                <span className="nav__sidebar-text">Loans</span>
            </Link>
            <Link to="" className="nav__sidebar-link">
                <img className="nav__sidebar-icon" src="/assets/images/handshake.png" alt="handshake" />
                <span className="nav__sidebar-text">Decision Models</span>
            </Link>
            <Link to="" className="nav__sidebar-link">
                <img className="nav__sidebar-icon" src="/assets/images/piggy-bank.png" alt="piggy-bank" />
                <span className="nav__sidebar-text">Savings</span>
            </Link>
            <Link to="" className="nav__sidebar-link">
                <img className="nav__sidebar-icon" src="/assets/images/loan-request.png" alt="loan-request" />
                <span className="nav__sidebar-text">Loan Requests</span>
            </Link>
            <Link to="" className="nav__sidebar-link">
                <img className="nav__sidebar-icon" src="/assets/images/user-check.png" alt="user-check" />
                <span className="nav__sidebar-text">Whitelist</span>
            </Link>
            <Link to="" className="nav__sidebar-link">
                <img className="nav__sidebar-icon" src="/assets/images/user-times.png" alt="user-times" />
                <span className="nav__sidebar-text">Karma</span>
            </Link>

        </div>
    );
};

export default CustomerLinks;
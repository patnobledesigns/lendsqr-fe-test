import React from 'react';
import { Link } from 'react-router-dom';

const BusinessLink = () => {
    return (
        <div className="nav__sidebar-links">
            <p className="nav__sidebar-title">BUSINESSES</p>
            <Link to="" className="nav__sidebar-link">
                <img className="nav__sidebar-icon" src="/assets/images/briefcase.png" alt="briefcase" />
                <span className="nav__sidebar-text">Organization</span>
            </Link>
            <Link to="" className="nav__sidebar-link">
                <img className="nav__sidebar-icon" src="/assets/images/loan-request.png" alt="loan-request" />
                <span className="nav__sidebar-text">Loan Products</span>
            </Link>
            <Link to="" className="nav__sidebar-link">
                <img className="nav__sidebar-icon" src="/assets/images/savings-product.png" alt="savings-product" />
                <span className="nav__sidebar-text">Savings Products</span>
            </Link>
            <Link to="" className="nav__sidebar-link">
                <img className="nav__sidebar-icon" src="/assets/images/coins-solid.png" alt="coins-solid" />
                <span className="nav__sidebar-text">Fees and Charges</span>
            </Link>
            <Link to="" className="nav__sidebar-link">
                <img className="nav__sidebar-icon" src="/assets/images/transactions.png" alt="transactions" />
                <span className="nav__sidebar-text">Transactions</span>
            </Link>
            <Link to="" className="nav__sidebar-link">
                <img className="nav__sidebar-icon" src="/assets/images/galaxy.png" alt="galaxy" />
                <span className="nav__sidebar-text">Services</span>
            </Link>
            <Link to="" className="nav__sidebar-link">
                <img className="nav__sidebar-icon" src="/assets/images/user-cog.png" alt="user-cog" />
                <span className="nav__sidebar-text">Service Account</span>
            </Link>
            <Link to="" className="nav__sidebar-link">
                <img className="nav__sidebar-icon" src="/assets/images/scroll.png" alt="scroll" />
                <span className="nav__sidebar-text">Settlements</span>
            </Link>
            <Link to="" className="nav__sidebar-link">
                <img className="nav__sidebar-icon" src="/assets/images/chart-bar.png" alt="chart-bar" />
                <span className="nav__sidebar-text">Reports</span>
            </Link>
        </div>
    );
};

export default BusinessLink;
import React from 'react';

const Analysis = () => {
  return (
    <div className="analysis__container container">
      <h2 className="analysis__title">Users</h2>
      <div className="analysis grid">
        <div className="analysis__tab">
          <img className="analysis__tab-icon" src="/assets/images/user.png" alt="user" />
          <p className="analysis__tab-text">USERS</p>
          <p className="analysis__tab-count">2,453</p>
        </div>
        <div className="analysis__tab">
          <img className="analysis__tab-icon" src="/assets/images/users.png" alt="users" />
          <p className="analysis__tab-text">Active Users</p>
          <p className="analysis__tab-count">2,453</p>
        </div>
        <div className="analysis__tab">
          <img className="analysis__tab-icon" src="/assets/images/loans.png" alt="loans" />
          <p className="analysis__tab-text">Users with Loans</p>
          <p className="analysis__tab-count">12,453</p>
        </div>
        <div className="analysis__tab">
          <img className="analysis__tab-icon" src="/assets/images/savings.png" alt="savings" />
          <p className="analysis__tab-text">Users with Savings</p>
          <p className="analysis__tab-count">102,453</p>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
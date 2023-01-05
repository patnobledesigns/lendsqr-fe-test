import React from 'react';

const TableComponent = () => {
  return (
    <div className="table__container container">
      <table className="styled-table">
        <thead>
          <tr>
            <th className="table__head"><p className="table__head-title">Organization  <img className="nav__sidebar-icon" src="/assets/images/filter-icon.png" alt="sign-out" /></p></th>
            <th className="table__head"><p className="table__head-title">Username  <img className="nav__sidebar-icon" src="/assets/images/filter-icon.png" alt="sign-out" /></p></th>
            <th className="table__head"><p className="table__head-title">Email  <img className="nav__sidebar-icon" src="/assets/images/filter-icon.png" alt="sign-out" /></p></th>
            <th className="table__head"><p className="table__head-title">Phone number  <img className="nav__sidebar-icon" src="/assets/images/filter-icon.png" alt="sign-out" /></p></th>
            <th className="table__head"><p className="table__head-title">Date joined  <img className="nav__sidebar-icon" src="/assets/images/filter-icon.png" alt="sign-out" /></p></th>
            <th className="table__head"><p className="table__head-title">Status  <img className="nav__sidebar-icon" src="/assets/images/filter-icon.png" alt="sign-out" /></p></th>
            <th className=""></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dom</td>
            <td>6000</td>
            <td>6000</td>
            <td>6000</td>
            <td>6000</td>
            <td><p className="table__status-blacklisted">Inactive</p></td>
            <td className="table-iconmenu"><img className="table__container-icon" src="/assets/images/table-menu.png" alt="table-menu" /></td>
          </tr>
          <tr>
            <td>Melissa Melissa</td>
            <td>Melissa</td>
            <td>Melissa</td>
            <td>Melissa</td>
            <td>Melissa</td>
            <td><p className="table__status-pending">Pending</p></td>
            <td className="table-iconmenu"><img className="table__container-icon" src="/assets/images/table-menu.png" alt="table-menu" /></td>
          </tr>
          <tr>
            <td>Melissa Melissa</td>
            <td>Melissa</td>
            <td>Melissa</td>
            <td>Melissa</td>
            <td>Melissa</td>
            <td><p className="table__status-active">Active</p></td>
            <td className="table-iconmenu"><img className="table__container-icon" src="/assets/images/table-menu.png" alt="table-menu" /></td>
          </tr>
          <tr>
            <td>Melissa Melissa</td>
            <td>Melissa</td>
            <td>Melissa</td>
            <td>Melissa</td>
            <td>Melissa</td>
            <td><p className="table__status-inactive">Inactive</p></td>
            <td className="table-iconmenu"><img className="table__container-icon" src="/assets/images/table-menu.png" alt="table-menu" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
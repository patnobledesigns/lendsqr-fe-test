import React from 'react';
import TableHeaderFilter from './TableHeaderFilter';
import TableActions from './TableActions';
import useComponentVisible from '../../hooks/useComponentVisible';


const TableComponent = () => {
  const [showFilter, setShowFilter] = React.useState(false);
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const { ref: actionRef, isComponentVisible: isActionVisible, setIsComponentVisible: setIsActionVisible } = useComponentVisible(false);
  return (
    <div className="table__outer container">
      <div className="table__container" ref={ref}>
        {isComponentVisible && <TableHeaderFilter />}
        <table className="styled-table" ref={ref}>
          <thead>
            <tr className='table__row'>
              <th className="table__head"><p className="table__head-title" onClick={() => setIsComponentVisible(prev => !prev)}>Organization  <img className="nav__sidebar-icon" src="/assets/images/filter-icon.png" alt="sign-out" /></p></th>
              <th className="table__head"><p className="table__head-title" onClick={() => setIsComponentVisible(prev => !prev)}>Username  <img className="nav__sidebar-icon" src="/assets/images/filter-icon.png" alt="sign-out" /></p></th>
              <th className="table__head"><p className="table__head-title" onClick={() => setIsComponentVisible(prev => !prev)}>Email  <img className="nav__sidebar-icon" src="/assets/images/filter-icon.png" alt="sign-out" /></p></th>
              <th className="table__head"><p className="table__head-title" onClick={() => setIsComponentVisible(prev => !prev)}>Phone number  <img className="nav__sidebar-icon" src="/assets/images/filter-icon.png" alt="sign-out" /></p></th>
              <th className="table__head"><p className="table__head-title" onClick={() => setIsComponentVisible(prev => !prev)}>Date joined  <img className="nav__sidebar-icon" src="/assets/images/filter-icon.png" alt="sign-out" /></p></th>
              <th className="table__head"><p className="table__head-title" onClick={() => setIsComponentVisible(prev => !prev)}>Status  <img className="nav__sidebar-icon" src="/assets/images/filter-icon.png" alt="sign-out" /></p></th>
              <th className=""></th>


            </tr>

          </thead>
          <tbody>
            <tr style={{ position: "relative" }}>

              <td>Dom</td>
              <td>6000</td>
              <td>6000</td>
              <td>6000</td>
              <td>6000</td>
              <td><p className="table__status-blacklisted">Blacklisted</p></td>
              <td >
                <div className="table-iconmenu" onClick={() => setIsActionVisible(prev => !prev)}>
                  {isActionVisible}
                  {isActionVisible && <TableActions />}
                  <img className="table__container-icon" ref={actionRef} src="/assets/images/table-menu.png" alt="table-menu" />
                </div>
              </td>
            </tr>
            <tr>
              <td>Melissa Melissa</td>
              <td>Melissa dsdsdsd</td>
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
      <div className='table__bottom'>
        <div className='table__datacount'>
          <p className="table__datacount-text">Showing</p>
          <select className='table__datacount-select' name="" id="">
            <option value="100">100</option>
            <option value="100">90</option>
            <option value="100">80</option>
            <option value="100">70</option>
            <option value="100">60</option>
            <option value="100">50</option>
            <option value="100">40</option>
            <option value="100">20</option>
            <option value="100">10</option>
          </select>
          <p className="table__datacount-text">out of 100</p>
        </div>

        <div className="table__pagination">
          <button className='table__pagination-btn'><img className="table__pagination-icon" src="/assets/images/prev.png" alt="sign-out" /></button>
          <span className='page__number'>1</span>
          <span className='page__number'>2</span>
          <span className='page__number'>3</span>
          <span className='page__number'>...</span>
          <span className='page__number'>15</span>
          <span className='page__number'>16</span>
          <button className='table__pagination-btn'><img className="table__pagination-icon" src="/assets/images/next.png" alt="sign-out" /></button>
        </div>

      </div>
    </div>
  );
};

export default TableComponent;
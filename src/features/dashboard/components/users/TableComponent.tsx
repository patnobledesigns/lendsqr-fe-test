import React from 'react';
import TableHeaderFilter from './TableHeaderFilter';
import TableActions from './TableActions';
import useComponentVisible from '../../hooks/useComponentVisible';
import { fetchUserData } from '../../hooks/useFetchUsersData';
import moment from 'moment';


const TableComponent = () => {
  const [pageCount, setPageCount] = React.useState(10);
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const { ref: actionRef, isComponentVisible: isActionVisible, setIsComponentVisible: setIsActionVisible } = useComponentVisible(-1);

  const { isLoading, error, data, isFetched } = fetchUserData();


  React.useEffect(() => {
    if (isFetched) {
      saveUserToLs();
    }
  }, [isFetched]);
  const saveUserToLs = () => {
    localStorage.setItem('users', JSON.stringify(data?.data));
  };

  let userData = [];
  try {
    const retrievedData = localStorage.getItem('users');
    const result = JSON.parse(retrievedData!);
    userData = result.slice(0, pageCount);
  } catch (error) {
    userData = data?.data?.slice(0, pageCount);
  }

  const toggleAction = (value: number, index: number) => {
    setIsActionVisible(index);
  };
  return (
    <div className="table__outer container">
      <div className="table__container" ref={ref}>
        {isComponentVisible && <TableHeaderFilter />}
        <table className="styled-table" ref={ref}>
          <thead>
            <tr className='table__row'>
              <th className="table__head"><p className="table__head-title" onClick={() => setIsComponentVisible((prev: boolean) => !prev)}>Organization  <img className="nav__sidebar-icon" src="/assets/images/filter-icon.png" alt="sign-out" /></p></th>
              <th className="table__head"><p className="table__head-title" onClick={() => setIsComponentVisible((prev: boolean) => !prev)}>Username  <img className="nav__sidebar-icon" src="/assets/images/filter-icon.png" alt="sign-out" /></p></th>
              <th className="table__head"><p className="table__head-title" onClick={() => setIsComponentVisible((prev: boolean) => !prev)}>Email  <img className="nav__sidebar-icon" src="/assets/images/filter-icon.png" alt="sign-out" /></p></th>
              <th className="table__head"><p className="table__head-title" onClick={() => setIsComponentVisible((prev: boolean) => !prev)}>Phone number  <img className="nav__sidebar-icon" src="/assets/images/filter-icon.png" alt="sign-out" /></p></th>
              <th className="table__head"><p className="table__head-title" onClick={() => setIsComponentVisible((prev: boolean) => !prev)}>Date joined  <img className="nav__sidebar-icon" src="/assets/images/filter-icon.png" alt="sign-out" /></p></th>
              <th className="table__head"><p className="table__head-title" onClick={() => setIsComponentVisible((prev: boolean) => !prev)}>Status  <img className="nav__sidebar-icon" src="/assets/images/filter-icon.png" alt="sign-out" /></p></th>
              <th className=""></th>


            </tr>

          </thead>
          <tbody>
            {/* {isLoading && <h2 className='container'>Loading...</h2>} */}
            {userData?.length === 0 && <h3>No data found</h3>}
            {userData?.map((result: any, index: number) => (

              <tr style={{ position: "relative" }} key={index}>

                <td>{result?.orgName}</td>
                <td>{result?.userName}</td>
                <td>{result?.email}</td>
                <td>{result?.phoneNumber}</td>
                <td>{moment(result?.lastActiveDate).format('DD-MM-YYYY')}</td>
                <td><p className="table__status-active">Active</p></td>
                <td>
                  <div className="table-iconmenu" onClick={() => toggleAction(Number(result.id), index)}>

                    {index === isActionVisible && <TableActions id={result.id} />}
                    <img className="table__container-icon" ref={actionRef} src="/assets/images/table-menu.png" alt="table-menu" />
                  </div>
                </td>
              </tr>
            ))}


          </tbody>
        </table>
      </div>
      <div className='table__bottom'>
        <div className='table__datacount'>
          <p className="table__datacount-text">Showing</p>
          <select className='table__datacount-select' onChange={(e) => setPageCount(Number(e.target.value))} id="">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="70">70</option>
            <option value="80">80</option>
            <option value="90">90</option>
            <option value="100">100</option>
          </select>
          <p className="table__datacount-text">out of {data?.data.length}</p>
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
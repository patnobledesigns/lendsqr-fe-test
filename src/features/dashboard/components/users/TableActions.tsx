import React from 'react';
import { Link } from 'react-router-dom';

const TableActions = ({ id }: { id: number; }) => {
    return (
        <div className='table__action'>

            <div className="table__actioncontainer">
                <Link to={`/users/${id}`}>
                    <div className='table__action-container'>
                        <img className="table__action-icon" src="/assets/images/eye.png" alt="eye" />
                        <p className="table__action-text">View Details</p>
                    </div>
                </Link>
                <Link to="">
                    <div className='table__action-container'>
                        <img className="table__action-icon" src="/assets/images/blacklistuser.png" alt="blacklistuser" />
                        <p className="table__action-text">Blacklist User</p>
                    </div>
                </Link>
                <Link to="">
                    <div className='table__action-container'>
                        <img className="table__action-icon" src="/assets/images/activateuser.png" alt="activateuser" />
                        <p className="table__action-text">Activate User</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default TableActions;
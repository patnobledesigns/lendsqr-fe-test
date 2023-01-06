import React from 'react';

const FullUserInfo = () => {
    return (
        <div className='information'>
            <div className='information__wrapper grid'>
                <div className='information__content'>
                    <p className="information__content-title">full Name</p>
                    <p className="information__content-subtitle">Grace Effiom</p>
                </div>
                <div className='information__content'>
                    <p className="information__content-title">Phone Number</p>
                    <p className="information__content-subtitle">07060780922</p>
                </div>
                <div className='information__content'>
                    <p className="information__content-title">Email Address</p>
                    <p className="information__content-subtitle">grace@gmail.com</p>
                </div>
                <div className='information__content'>
                    <p className="information__content-title">Relationship</p>
                    <p className="information__content-subtitle">Sister</p>
                </div>

            </div>
        </div>
    );
};

export default FullUserInfo;
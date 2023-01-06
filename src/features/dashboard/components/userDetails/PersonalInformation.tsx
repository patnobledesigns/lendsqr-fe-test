import React from 'react';

const PersonalInformation = () => {
  return (
    <div className='information'>
      <h3 className="information__title">Personal Information</h3>
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
          <p className="information__content-title">Bvn</p>
          <p className="information__content-subtitle">07060780922</p>
        </div>
        <div className='information__content'>
          <p className="information__content-title">Gender</p>
          <p className="information__content-subtitle">Female</p>
        </div>
        <div className='information__content'>
          <p className="information__content-title">Marital status</p>
          <p className="information__content-subtitle">Single</p>
        </div>
        <div className='information__content'>
          <p className="information__content-title">Children</p>
          <p className="information__content-subtitle">None</p>
        </div>
        <div className='information__content'>
          <p className="information__content-title">Type of residence</p>
          <p className="information__content-subtitle">Parent’s Apartment</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
import React from 'react';

const EducationAndEmployment = () => {
  return (
    <div className='information'>
      <h3 className="information__title">Education and Employment</h3>
      <div className='information__wrapper grid'>
        <div className='information__content'>
          <p className="information__content-title">level of education</p>
          <p className="information__content-subtitle">B.Sc</p>
        </div>
        <div className='information__content'>
          <p className="information__content-title">employment status</p>
          <p className="information__content-subtitle">Employed</p>
        </div>
        <div className='information__content'>
          <p className="information__content-title">sector of employment</p>
          <p className="information__content-subtitle">FinTech</p>
        </div>
     
        <div className='information__content'>
          <p className="information__content-title">Duration of employment</p>
          <p className="information__content-subtitle">2 years</p>
        </div>
        <div className='information__content'>
          <p className="information__content-title">office email</p>
          <p className="information__content-subtitle">grace@lendsqr.com</p>
        </div>
        <div className='information__content'>
          <p className="information__content-title">Monthly income</p>
          <p className="information__content-subtitle">Monthly income</p>
        </div>
        <div className='information__content'>
          <p className="information__content-title">loan repayment</p>
          <p className="information__content-subtitle">40,000</p>
        </div>
      </div>
    </div>
  );
};

export default EducationAndEmployment;
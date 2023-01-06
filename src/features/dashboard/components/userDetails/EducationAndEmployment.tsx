import React from 'react';

const EducationAndEmployment = ({ data }: any) => {
  return (
    <div className='information'>
      <h3 className="information__title">Education and Employment</h3>
      <div className='information__wrapper grid'>
        <div className='information__content'>
          <p className="information__content-title">level of education</p>
          <p className="information__content-subtitle">{data?.education?.level}</p>
        </div>
        <div className='information__content'>
          <p className="information__content-title">employment status</p>
          <p className="information__content-subtitle">{data?.education?.employmentStatus}</p>
        </div>
        <div className='information__content'>
          <p className="information__content-title">sector of employment</p>
          <p className="information__content-subtitle">{data?.education?.sector}</p>
        </div>

        <div className='information__content'>
          <p className="information__content-title">Duration of employment</p>
          <p className="information__content-subtitle">{data?.education?.duration}</p>
        </div>
        <div className='information__content'>
          <p className="information__content-title">office email</p>
          <p className="information__content-subtitle">{data?.education?.officeEmail}</p>
        </div>
        <div className='information__content'>
          <p className="information__content-title">Monthly income</p>
          <p className="information__content-subtitle">₦{data?.education?.monthlyIncome[0]} - ₦{data?.education?.monthlyIncome[1]}</p>
        </div>
        <div className='information__content'>
          <p className="information__content-title">loan repayment</p>
          <p className="information__content-subtitle">₦{data?.education?.loanRepayment}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationAndEmployment;
import React from 'react';

const Socials = ({ data }: any) => {
  return (
    <div className='information'>
      <h3 className="information__title">Socials</h3>
      <div className='information__wrapper grid'>
        <div className='information__content'>
          <p className="information__content-title">Twitter</p>
          <p className="information__content-subtitle">{data?.socials?.twitter}</p>
        </div>
        <div className='information__content'>
          <p className="information__content-title">Facebook</p>
          <p className="information__content-subtitle">{data?.socials?.facebook}</p>
        </div>
        <div className='information__content'>
          <p className="information__content-title">Instagram</p>
          <p className="information__content-subtitle">{data?.socials?.instagram}</p>
        </div>
      </div>
    </div>
  );
};

export default Socials;
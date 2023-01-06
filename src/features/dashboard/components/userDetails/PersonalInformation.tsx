
const PersonalInformation = ({ data }: any) => {
  return (
    <div className='information'>
      <h3 className="information__title">Personal Information</h3>
      <div className='information__wrapper grid'>
        <div className='information__content'>
          <p className="information__content-title">full Name</p>
          <p className="information__content-subtitle">{data?.profile?.lastName} {data?.profile.firstName} </p>
        </div>
        <div className='information__content'>
          <p className="information__content-title">Phone Number</p>
          <p className="information__content-subtitle">{data?.profile.phoneNumber}</p>
        </div>
        <div className='information__content'>
          <p className="information__content-title">Email Address</p>
          <p className="information__content-subtitle">{data?.email}</p>
        </div>
        <div className='information__content'>
          <p className="information__content-title">Bvn</p>
          <p className="information__content-subtitle">{data?.profile.bvn}</p>
        </div>
        <div className='information__content'>
          <p className="information__content-title">Gender</p>
          <p className="information__content-subtitle">{data?.profile.gender}</p>
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
          <p className="information__content-title">Address</p>
          <p className="information__content-subtitle">{data?.address}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
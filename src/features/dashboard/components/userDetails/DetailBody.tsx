import React from 'react';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';


export enum Tabs {
    GENERAL_DETAILS = "General Details",
    DOCUMENTS = "Documents",
    BANK_DETAILS = "Bank Details",
    LOANS = "Loans",
    SAVINGS = "Savings",
    APP_AND_SYSTEM = "App and System",
}
const DetailBody = () => {
    const [currentTab, setCurrentTab] = React.useState<Tabs>(Tabs.GENERAL_DETAILS);
    return (
        <>
            <div className='detail__header container'>
                <Link to="/users" className="detail__back">
                    <img src="/assets/images/leftarrow.png" alt="leftarrow" />
                    <p className="detail__back-text">Back to Users</p>
                </Link>

                <div className='detail__top'>
                    <p className="detail__top-text">User Details</p>
                    <div className='detail__topbtns'>
                        <button className=' detail__topbtns-btn'>Blacklist User</button>
                        <button className=' detail__topbtns-btn'>Activate User</button>
                    </div>
                </div>

                <div className="detail__tabcontainer">
                    <div className='detail__tabdetails'>
                        <div className='detail__imgSection'>
                            <img className="detail__imgSection-img" src="/assets/images/userImg.png" alt="userImg" />
                            <div className='detail__tabinfo'>
                                <p className='detail__tabinfo-name'>Grace Effiom</p>
                                <p className='detail__tabinfo-id'>LSQFf587g90</p>

                            </div>
                        </div>
                        <div className="detail__tabdetails-line"></div>
                        <div className='detail__tabtier'>
                            <p className="detail__tabtier-title">User’s Tier</p>
                            <div className='star__group'>
                                <img src="/assets/images/star.png" alt="leftarrow" />
                                <img src="/assets/images/star-outline.png" alt="leftarrow" />
                                <img src="/assets/images/star-outline.png" alt="leftarrow" />
                            </div>
                        </div>
                        <div className="detail__tabdetails-line"></div>
                        <div className='detail__accountInfo'>
                            <p className="detail__accountInfo-balance">₦200,000.00</p>
                            <p className='detail__accountInfo-acctno'>9912345678/Providus Bank</p>
                        </div>
                    </div>
                    <div className='detail__tabscon'>
                        <div className='detail__tabs'>
                            <p onClick={() => setCurrentTab(Tabs.GENERAL_DETAILS)} className={`detail__tabs-title ${currentTab === Tabs.GENERAL_DETAILS && 'titleactive'}`}>General Details</p>
                            <p onClick={() => setCurrentTab(Tabs.DOCUMENTS)} className={`detail__tabs-title ${currentTab === Tabs.DOCUMENTS && 'titleactive'}`}>Documents</p>
                            <p onClick={() => setCurrentTab(Tabs.BANK_DETAILS)} className={`detail__tabs-title ${currentTab === Tabs.BANK_DETAILS && 'titleactive'}`}>Bank Details</p>
                            <p onClick={() => setCurrentTab(Tabs.LOANS)} className={`detail__tabs-title ${currentTab === Tabs.LOANS && 'titleactive'}`}>Loans</p>
                            <p onClick={() => setCurrentTab(Tabs.SAVINGS)} className={`detail__tabs-title ${currentTab === Tabs.SAVINGS && 'titleactive'}`}>Savings</p>
                            <p onClick={() => setCurrentTab(Tabs.APP_AND_SYSTEM)} className={`detail__tabs-title ${currentTab === Tabs.APP_AND_SYSTEM && 'titleactive'}`}>App and System</p>
                        </div>
                    </div>
                </div>
            </div>

            <UserInfo currentTab={currentTab}/>
        </>
    );
};

export default DetailBody;
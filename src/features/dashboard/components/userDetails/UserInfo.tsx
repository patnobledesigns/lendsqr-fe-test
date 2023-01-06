import React from 'react';
import PersonalInformation from './PersonalInformation';
import EducationAndEmployment from './EducationAndEmployment';
import { Tabs } from './DetailBody';
import Socials from './Socials';
import Guarantor from './Guarantor';
import FullUserInfo from './FullUserInfo';

const UserInfo = ({ currentTab, data, error, isLoading }: { currentTab: Tabs; data: any, error: any, isLoading: boolean; }) => {
    switch (currentTab) {
        case Tabs.GENERAL_DETAILS:
            return (
                <div className='userinfo__container container'>
                    <PersonalInformation data={data} error={error} isLoading={isLoading} />
                    <EducationAndEmployment data={data} error={error} isLoading={isLoading} />
                    <Socials data={data} error={error} isLoading={isLoading} />
                    <Guarantor />
                    <FullUserInfo />
                </div>
            );
        case Tabs.DOCUMENTS:
            return <div className='container section'>Documents Tab</div>;
        case Tabs.BANK_DETAILS:
            return <div className='container section'>Bank Details Tab</div>;
        case Tabs.LOANS:
            return <div className='container section'>Loans Tab</div>;
        case Tabs.SAVINGS:
            return <div className='container section'>Savings Tab</div>;
        case Tabs.APP_AND_SYSTEM:
            return <div className='container section'>App and System Tab</div>;

        default:
            return null;
    }
};

export default UserInfo;
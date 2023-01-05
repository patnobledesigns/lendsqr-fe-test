import React from 'react';
import SideBar from '../features/dashboard/components/SideBar';
import NavBar from '../features/dashboard/components/NavBar';

const PageLayout = ({ children }: { children: React.ReactNode; }) => {
    return (
        <>
            <NavBar />
            <SideBar >
                <section className="section page__section">
                    {children}
                </section>
            </SideBar >
        </>
    );
};

export default PageLayout;


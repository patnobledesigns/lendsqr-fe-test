import React from "react";
import { NavLink } from "react-router-dom";
import SidebarUserProfile from "../features/Home/components/SidebarUserProfile";
import { useDispatch } from "react-redux";
import StoryPage from "../features/Home/story/StoryPage";

// import SidebarUserProfile from "./SidebarUserProfile";

import TextImagePost from "../features/Home/components/TextImagePost";
import TextVideoPost from "../features/Home/components/TextVideoPost";
import MemberSearch from "../features/community/components/MemberSearch";
import MainNavbar from "../components/MainNavbar";
import { logout } from "../redux/features/authentication/loginSlice";
// import StorySlider from "../features/Home/components/StorySlider";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ children }) => {
  const dispatch = useDispatch();
  const menuItem = [
    {
      path: "/home",
      name: "Home",
      icon: <img src="/assets/svg/Home1.svg" alt="" />,
      icon2: <img src="/assets/svg/Home2.svg" alt="" />
    },
    {
      path: "/community",
      name: "Community",
      icon: <img src="/assets/svg/Community.svg" alt="" />,
      icon2: <img src="/assets/svg/Community2.svg" alt="" />
    },
    {
      path: "/dates",
      name: "Dates",
      icon: <img src="/assets/svg/Dates1.svg" alt="" />,
      icon2: <img src="/assets/svg/Dates2.svg" alt="" />
    },
    {
      path: "/message",
      name: "Messages",
      icon: <img src="/assets/svg/Messages1.svg" alt="" />,
      icon2: <img src="/assets/svg/Messages2.svg" alt="" />
    },
    {
      path: "/wallet",
      name: "Wallet",
      icon: <img src="/assets/svg/Wallet1.svg" alt="" />,
      icon2: <img src="/assets/svg/Wallet2.svg" alt="" />
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <img src="/assets/svg/Settings1.svg" alt="" />,
      icon2: <img src="/assets/svg/Settings2.svg" alt="" />
    }
  ];

  const bottomMenu = [
    {
      path: "/home",
      name: "Home",
      icon: <img src="/assets/svg/Home1.svg" alt="community" />,
      icon2: <img src="/assets/svg/Home2.svg" alt="community" />
    },
    {
      path: "/community",
      name: "Community",
      icon: <img src="/assets/svg/Community.svg" alt="community" />,
      icon2: <img src="/assets/svg/Community2.svg" alt="community" />
    },
    {
      path: "/dates",
      name: "Dates",
      icon: <img src="/assets/svg/Dates1.svg" alt="dates" />,
      icon2: <img src="/assets/svg/Dates2.svg" alt="dates" />
    },
    {
      path: "/message",
      name: "Messages",
      icon: <img src="/assets/svg/Messages1.svg" alt="messages" />,
      icon2: <img src="/assets/svg/Messages2.svg" alt="messages" />
    }
  ];

  const iconNotActive = "text-[#8B8B8B]";
  const iconActive = "text-[#1A1941] bg-[#FFFFFF] px-[5px] py-[5px] rounded-[4px]";
  const nameNotActive = "text-[16px] leading-[18px] text-[#828282] font-[400]";
  const nameActive = "text-[14px] leading-[18px] text-[#6A52FD] font-[700]";

  const bpaddingActive =
    " border-[1px] bg-[#F6F4FF] flex items-center pb-[21px] pt-[40px] pl-[23px] border-l-[2px] gap-[16.5px] border-l-[#6A52FD] cursor-pointer";
  const bpaddingNotActive =
    " flex items-center pb-[21px] pt-[40px] border-b-[1px] border-[#F2F2F2] gap-[16.5px] mx-[23px] cursor-pointer";
  return (
    <>
      <MainNavbar />
      <main className="mt-4 section bg-[#E5E5E5] max-h-full w-[100%] max-w-[100%]">
        <div className="w-[90%] mx-auto flex tabletAir:w-[100%] tabletAir:flex-col mb-[74px]">
          <div className="w-[280px] smDesktop:w-[250px] smDesk:w-[230px] tabletAir:hidden smDesk:block">
            <SidebarUserProfile />
            <div className=" bg-[#FFFFFF] pt-[15px] pb-[60px] rounded-lg">
              {menuItem.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={({ isActive }) => (isActive ? bpaddingActive : bpaddingNotActive)}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => (isActive ? iconActive : iconNotActive)}>
                    {({ isActive }) =>
                      isActive ? (
                        <div className="">{item.icon2}</div>
                      ) : (
                        <div className="">{item.icon}</div>
                      )
                    }
                  </NavLink>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => (isActive ? nameActive : nameNotActive)}>
                    {item.name}
                  </NavLink>
                </NavLink>
              ))}
              <div onClick={() => dispatch(logout())} className={bpaddingNotActive}>
                {<img src="/assets/svg/Logout.svg" alt="" />}
                <p>Logout</p>
              </div>
            </div>
          </div>

          <div className="w-[100%]">
            {/* <Outlet /> */}

            {children}
          </div>

          {/* Bottom Navigation */}
          <section
            className="scroll-navbottom w-[100%] h-[76px] fixed bottom-0 tabletAir:block bigDesktop:hidden"
            style={{ background: "rgba(255, 255, 255, 1)" }}>
            <div className="flex w-[90%] justify-between mx-auto items-center ">
              {bottomMenu.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className="flex flex-col items-center pt-[24px]"
                  // className={({ isActive }) =>
                  //   isActive ? bpaddingActive : bpaddingNotActive
                  // }
                >
                  <NavLink
                    to={item.path}
                    // className={({ isActive }) =>
                    //   isActive ? iconActive : iconNotActive
                    // }
                  >
                    {({ isActive }) =>
                      isActive ? (
                        <div className="">{item.icon2}</div>
                      ) : (
                        <div className="">{item.icon}</div>
                      )
                    }
                  </NavLink>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => (isActive ? nameActive : nameNotActive)}>
                    {item.name}
                  </NavLink>
                </NavLink>
              ))}
            </div>
          </section>
        </div>

        {/* component overlay */}
        {/* To post Test and Image */}
        <TextImagePost />

        {/* To post Test and Video */}
        <TextVideoPost />

        {/* story Page */}
        {false && <StoryPage />}

        {/* members Search */}
        <MemberSearch />
      </main>
    </>
  );
};

export default Sidebar;

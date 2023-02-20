import React, { FC } from "react";
import SideBarButton from "./SideBarButton/SideBarButton";

interface Props {
  handleSidebarFromChild: (name: boolean) => void;
}

const Sidebar: FC<Props> = ({ handleSidebarFromChild }) => {
  const styleSideBarButton = "mr-5 ml-2 text-4xl text-[#8B96A5]";

  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full bg-transparent lg:hidden">
        <div className="h-screen w-3/4 bg-[#E6E4F6] p-5">
          <div className="mb-6 flex items-center justify-between">
            <h4 className="text-3xl font-bold">Curve</h4>
            <button
              onClick={() => handleSidebarFromChild(false)}
              className="flex h-10 w-8 justify-center rounded-full text-2xl hover:bg-gray-200"
            >
              ⨉
            </button>
          </div>

          <div>
            <SideBarButton title="Swap" />
            <SideBarButton title="Pools" />
            <SideBarButton title="Dashboard" />
            <SideBarButton title="Visit old UI" />
            <SideBarButton title="Goverence" />
            <SideBarButton title="Community" />
            <SideBarButton title="Resources" />
            <SideBarButton title="Mode" />
            <SideBarButton title="English" />
            <div className="my-10 h-1 w-full bg-black" />
            <div className="mb-5 text-left">
              <h4 className="text-3xl font-bold">TVL</h4>
              <p>$4,783,512,530</p>
            </div>

            <div className="text-left">
              <h4 className="text-3xl font-bold">Daily Volume</h4>
              <p>$111,821,277</p>
            </div>
          </div>

          <button className="shadow:xl absolute bottom-10 left-28 border-2 border-black p-2 sm:left-48">
            CONNECT WALLET
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

"use client";

import { useState, FC } from "react";
import { ArrowDropDownIcon, MenuIcon } from "@/utils/MaterialIcons";
import Sidebar from "../SideBar/Sidebar";
import Networks from "./Networks/Networks";

type Props = {};

const NavBar: FC<Props> = (props: Props) => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [sidebarCloseFromChild, setSidebarCloseFromChild] =
    useState<boolean>(false);

  const [showNetwork, setShowNetwork] = useState(false);

  const handleSidebarFromChild = (data: boolean) => {
    setSidebarCloseFromChild(data);
    setSidebarActive(data);
  };

  return (
    <>
      <div
        className={
          sidebarActive
            ? "fixed -top-1 flex w-full bg-[#E6E4F6] px-16 py-4 blur-sm lg:top-16 lg:blur-none"
            : "fixed -top-1 z-50 flex w-full border-t-2 border-black bg-[#E6E4F6] px-16 py-2 lg:top-16"
        }
      >
        <div className="flex w-1/2 items-center justify-start">
          <button
            onClick={() => setSidebarActive((prev) => !prev)}
            className="mr-5 block lg:hidden"
          >
            <MenuIcon className="text-3xl" />
          </button>

          <h1 className="text-3xl font-bold lg:pr-4">Curve</h1>
          <button className="mx-2 hidden bg-black px-4 py-2 text-lg text-white lg:block">
            SWAP
          </button>
          <button className="mx-2 hidden px-4 py-2 text-lg hover:bg-[#C6C2E7] lg:block">
            POOLS
          </button>
          <button className="mx-2 hidden px-4 py-2 text-lg hover:bg-[#C6C2E7] lg:block">
            DASHBOARD
          </button>
        </div>

        <div className="flex w-1/2 justify-end">
          <button
            onClick={() => setShowNetwork((prev) => !prev)}
            className="flex items-center justify-center border-2 border-black p-3 font-bold transition-all hover:bg-[#C6C2E7] lg:mr-5"
          >
            ETHEREUM <ArrowDropDownIcon />
          </button>
          <button className="hidden border-2 border-black p-3 font-bold transition-all hover:bg-[#C6C2E7] lg:block">
            🔴 CONNECT WALLET
          </button>
        </div>
      </div>

      <div
        className={
          showNetwork
            ? "absolute right-12 top-16 z-50 pr-4 lg:top-36 lg:right-64"
            : "hidden"
        }
      >
        <Networks />
      </div>

      <div className={sidebarActive ? "absolute" : "hidden"}>
        <Sidebar handleSidebarFromChild={handleSidebarFromChild} />
      </div>
    </>
  );
};

export default NavBar;

"use client";

import { useState, FC } from "react";
import { ArrowDropDownIcon, MenuIcon } from "@/utils/MaterialIcons";
import Sidebar from "../SideBar/Sidebar";
import Networks from "./Networks/Networks";
import Link from "next/link";
import Image from "next/image";

import metamaskImg from "../../public/assets/walletLogos/metamask.png";
import braveImg from "../../public/assets/walletLogos/brave.png";

type Props = {};

const NavBar: FC<Props> = (props: Props) => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [sidebarCloseFromChild, setSidebarCloseFromChild] =
    useState<boolean>(false);

  const [connectWallet, setConnectWallet] = useState<boolean>(false);

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
            ? "navbar fixed -top-1 z-50 flex w-full bg-[#E6E4F6] px-4 py-4 blur-sm md:px-16 lg:top-16 lg:blur-none"
            : "navbar fixed -top-1 z-50 flex w-full border-t-2 border-black bg-[#E6E4F6] px-4 py-2 md:px-16 lg:top-16"
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
          <button
            onClick={() => setConnectWallet((prev) => !prev)}
            className="hidden border-2 border-black p-3 font-bold transition-all hover:bg-[#C6C2E7] lg:block"
          >
            🔴 CONNECT WALLET
          </button>
        </div>
      </div>

      <div
        className={
          showNetwork
            ? "absolute right-0 top-16 z-50 pr-4 sm:right-0 md:right-12 lg:top-36 lg:right-64"
            : "hidden"
        }
      >
        <Networks />
      </div>

      <div className={sidebarActive ? "absolute" : "hidden"}>
        <Sidebar handleSidebarFromChild={handleSidebarFromChild} />
      </div>

      {/* CONNECT WALLET OPTIONS */}
      <div
        className={
          connectWallet
            ? "connect-wallet absolute top-1/3 left-1/2 z-50 mt-10 flex h-80 w-2/3 -translate-x-1/2 -translate-y-1/3 transform border-2 border-black bg-[#E6E4F6] p-4 text-center md:w-1/3"
            : "hidden"
        }
      >
        <div className="flex w-full items-center justify-center">
          <div className="w-full">
            <button
              onClick={() => setConnectWallet((prev) => !prev)}
              className="absolute right-5 top-4 transition-all hover:text-red-500"
            >
              ✖
            </button>

            <div className="mt-5 flex items-center justify-around text-center">
              <button className="ml-2 flex w-2/5 items-center justify-center rounded-xl border-2 border-black p-2 text-black transition-all hover:bg-[#C6C2E7] md:flex md:p-4 md:py-1 xl:mb-0">
                <div className="items-center justify-center md:flex">
                  <Image
                    src={metamaskImg}
                    className="mx-auto h-8 w-8 rounded-xl lg:h-10 lg:w-10"
                    alt="metamask"
                  />
                  <h4 className="pl-2 text-center font-bold md:text-xs lg:block lg:text-sm xl:text-lg">
                    Metamask
                  </h4>
                </div>
              </button>
              <button className="ml-2 flex w-2/5 items-center justify-center rounded-xl border-2 border-black p-2 text-black transition-all hover:bg-[#C6C2E7] md:flex md:p-4 md:py-1 xl:mb-0">
                <div className="items-center justify-center md:flex">
                  <Image
                    src={braveImg}
                    className="mx-auto h-8 w-8 rounded-xl lg:h-10 lg:w-10"
                    alt="metamask"
                  />
                  <h4 className="pl-2 text-center font-bold md:text-xs lg:block lg:text-sm xl:text-lg">
                    Brave
                  </h4>
                </div>
              </button>
            </div>

            <div className="my-4 flex items-center justify-around text-center">
              <button className="ml-2 flex w-2/5 items-center justify-center rounded-xl border-2 border-black p-2 text-black transition-all hover:bg-[#C6C2E7] md:flex md:p-4 md:py-1 xl:mb-0">
                <div className="items-center justify-center md:flex">
                  <Image
                    src={metamaskImg}
                    className="mx-auto h-8 w-8 rounded-xl lg:h-10 lg:w-10"
                    alt="metamask"
                  />
                  <h4 className="pl-2 text-center font-bold md:text-xs lg:block lg:text-sm xl:text-lg">
                    Metamask
                  </h4>
                </div>
              </button>
              <button className="ml-2 flex w-2/5 items-center justify-center rounded-xl border-2 border-black p-2 text-black transition-all hover:bg-[#C6C2E7] md:flex md:p-4 md:py-1 xl:mb-0">
                <div className="items-center justify-center md:flex">
                  <Image
                    src={metamaskImg}
                    className="mx-auto h-8 w-8 rounded-xl lg:h-10 lg:w-10"
                    alt="metamask"
                  />
                  <h4 className="pl-2 text-center font-bold md:text-xs lg:block lg:text-sm xl:text-lg">
                    Metamask
                  </h4>
                </div>
              </button>
            </div>

            <button className="mt-8 rounded-xl bg-blue-600 px-4 py-3 text-xs font-extrabold tracking-wider text-white transition-all hover:bg-blue-700 md:text-base">
              CONNECT WALLET
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

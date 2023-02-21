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
          <Link href="/pool">
            <button className="mx-2 hidden px-4 py-2 text-lg hover:bg-[#C6C2E7] lg:block">
              POOLS
            </button>
          </Link>
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

      <div
        className={
          connectWallet
            ? "absolute top-1/3 left-1/2 z-50 mt-10 flex h-80 w-2/3 -translate-x-1/2 -translate-y-1/3 transform border-2 border-black bg-[#E6E4F6] p-4 text-center md:w-1/3"
            : "hidden"
        }
      >
        <div className="w-full">
          <button
            onClick={() => setConnectWallet((prev) => !prev)}
            className="absolute right-5 transition-all hover:text-red-500"
          >
            ✖
          </button>

          <div className="my-8 flex items-center justify-around text-center">
            <button className="ml-2 flex w-2/5 items-center justify-center border-2 border-black py-4 px-4 transition-all hover:border-blue-600 hover:bg-blue-200 hover:text-blue-600 md:flex md:py-1 xl:mb-0">
              <Image
                src={metamaskImg}
                className="h-10 w-10 rounded-xl"
                alt="metamask"
              />
              <h4 className="hidden pl-2 text-center font-bold md:text-xs lg:block lg:text-sm xl:text-lg">
                Metamask
              </h4>
            </button>
            <button className="ml-2 flex w-2/5 items-center justify-center border-2 border-black py-4 px-4 transition-all hover:border-blue-600 hover:bg-blue-200 hover:text-blue-600 md:flex md:py-1 xl:mb-0">
              <Image
                src={braveImg}
                className="h-10 w-10 rounded-xl"
                alt="brave"
              />
              <h4 className="hidden pl-2 text-center font-bold md:text-xs lg:block lg:text-sm xl:text-lg">
                Brave Wallet
              </h4>
            </button>
          </div>

          <div className="my-8 flex items-center justify-around text-center">
            <button className="ml-2 flex w-2/5 items-center justify-center border-2 border-black py-4 px-4 transition-all hover:border-blue-600 hover:bg-blue-200 hover:text-blue-600 md:flex md:py-1 xl:mb-0">
              <Image
                src={metamaskImg}
                className="h-10 w-10 rounded-xl"
                alt="metamask"
              />
              <h4 className="hidden pl-2 text-center font-bold md:text-xs lg:block lg:text-sm xl:text-lg">
                Metamask
              </h4>
            </button>
            <button className="ml-2 flex w-2/5 items-center justify-center border-2 border-black py-4 px-4 transition-all hover:border-blue-600 hover:bg-blue-200 hover:text-blue-600 md:flex md:py-1 xl:mb-0">
              <Image
                src={braveImg}
                className="h-10 w-10 rounded-xl"
                alt="brave"
              />
              <h4 className="hidden pl-2 text-center font-bold md:text-xs lg:block lg:text-sm xl:text-lg">
                Brave Wallet
              </h4>
            </button>
          </div>

          <button className="rounded-xl bg-blue-600 px-4 py-3 text-xs font-extrabold tracking-wider text-white transition-all hover:bg-blue-700 md:text-base">
            CONNECT WALLET
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;

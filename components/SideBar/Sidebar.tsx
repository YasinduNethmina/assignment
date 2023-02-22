import React, { FC, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import SideBarButton from "./SideBarButton/SideBarButton";

interface Props {
  handleSidebarFromChild: (name: boolean) => void;
}

const Sidebar: FC<Props> = ({ handleSidebarFromChild }) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full bg-transparent lg:hidden">
        <div className="h-screen w-3/4 bg-[#E6E4F6] p-5 dark:border-r-2 dark:border-[#9A9E9E] dark:bg-[#31353F]">
          <div className="mb-6 flex items-center justify-between">
            <h4 className="text-3xl font-bold">Curve</h4>
            <button
              onClick={() => handleSidebarFromChild(false)}
              className="flex h-10 w-8 justify-center rounded-full text-2xl hover:text-red-500 dark:hover:bg-transparent dark:hover:text-gray-500"
            >
              ⨉
            </button>
          </div>

          <div>
            <SideBarButton title="Swap" />
            <SideBarButton title="Pools" />
            <SideBarButton
              func={() =>
                theme === "dark" ? setTheme("light") : setTheme("dark")
              }
              title="Dark / Night Mode (Working!)"
            />
            <SideBarButton title="Dashboard" />

            <SideBarButton title="Visit old UI" />
            <SideBarButton title="Goverence" />
            <SideBarButton title="Community" />
            <SideBarButton title="Resources" />

            <SideBarButton title="English" />
            <div className="my-10 h-1 w-full bg-black dark:bg-[#9A9E9E]" />
            <div className="mb-5 text-left">
              <h4 className="text-3xl font-bold">TVL</h4>
              <p>$4,783,512,530</p>
            </div>

            <div className="text-left">
              <h4 className="text-3xl font-bold">Daily Volume</h4>
              <p>$111,821,277</p>
            </div>
          </div>

          <button className="shadow:xl relative top-10 border-2 border-black p-2 transition-all hover:bg-[#C6C2E7] dark:rounded-md dark:border-blue-600 dark:bg-blue-600 dark:font-bold dark:hover:border-blue-700 dark:hover:bg-blue-700">
            CONNECT WALLET
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

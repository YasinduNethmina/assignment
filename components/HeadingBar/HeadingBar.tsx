import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import {
  DarkModeIcon,
  FacebookIcon,
  LightModeIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/utils/MaterialIcons";

type Props = {};

const HeadingBar = (props: Props) => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="absolute top-0 z-50 hidden w-full border-black bg-[#E6E4F6] dark:bg-[#31353F] dark:text-[#9A9E9E] lg:flex">
      <div className="ml-16 hidden w-1/2 items-center justify-start py-2 md:flex">
        <h4 className="mr-10 hidden text-xl font-bold transition-all dark:hover:text-white lg:block lg:text-sm xl:text-xl">
          Total Deposits: $4,782,541,899
        </h4>
        <h4 className="hidden text-xl font-bold transition-all dark:hover:text-white lg:block lg:text-sm xl:text-xl">
          Daily Volume: $4,782,541,899
        </h4>
      </div>

      <div className="mr-10 flex w-1/2 items-center justify-end">
        <button className="mx-5 transition-all hover:bg-[#C6C2E7] dark:hover:bg-[#1B2028] dark:hover:text-white">
          {theme === "light" ? (
            <DarkModeIcon
              onClick={() => setTheme("dark")}
              className="h-16 w-16 text-3xl lg:p-5 xl:p-4"
            />
          ) : (
            <LightModeIcon
              onClick={() => setTheme("light")}
              className="h-16 w-16 text-3xl lg:p-5 xl:p-4"
            />
          )}
        </button>
        <select
          defaultValue="English"
          name=""
          className="dark:hover:text-blck mx-5 cursor-pointer bg-[#E6E4F6] px-2 py-1 text-base outline-none  transition-all hover:bg-[#C6C2E7] focus:bg-[#E6E4F6] dark:bg-transparent dark:hover:bg-[#1B2028] dark:focus:bg-transparent xl:text-2xl"
          id=""
        >
          <option className="bg-black text-white" value="English">
            English
          </option>
          <option value="Hindi" className="dark:bg-[#31353F] dark:text-white">
            Hindi
          </option>
          <option value="Hindi" className="dark:bg-[#31353F] dark:text-white">
            Spanish
          </option>
        </select>

        <Link
          href="https://twitter.com/yasinduneth"
          target="_blank"
          rel="noopener"
          className="mx-5 transition-all hover:bg-[#C6C2E7] dark:hover:bg-[#1B2028] dark:hover:text-white"
        >
          <TwitterIcon className="h-16 w-16 lg:p-5 xl:p-4" />
        </Link>
        <Link
          target="_blank"
          rel="noopener"
          href="https://www.linkedin.com/in/yasinduneth/"
          className="mx-5 transition-all hover:bg-[#C6C2E7] dark:hover:bg-[#1B2028] dark:hover:text-white"
        >
          <LinkedInIcon className="h-16 w-16 lg:p-5 xl:p-4" />
        </Link>
        <Link
          target="_blank"
          rel="noopener"
          href="https://twitter.com/yasinduneth"
          className="mx-5 transition-all hover:bg-[#C6C2E7] dark:hover:bg-[#1B2028] dark:hover:text-white"
        >
          <FacebookIcon className="h-16 w-16 hover:bg-[#C6C2E7] dark:hover:bg-[#1B2028] dark:hover:text-white lg:p-5 xl:p-4" />
        </Link>
      </div>
    </div>
  );
};

export default HeadingBar;

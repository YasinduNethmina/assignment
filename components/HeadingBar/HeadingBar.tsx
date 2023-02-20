"use client";

import React from "react";
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
  return (
    <div className="z-50 hidden border-black bg-[#E6E4F6] lg:flex">
      <div className="ml-16 hidden w-1/2 items-center justify-start py-2 md:flex">
        <h4 className="mr-10 hidden text-xl font-bold lg:block lg:text-sm xl:text-xl">
          Total Deposits: $4,782,541,899
        </h4>
        <h4 className="hidden text-xl font-bold lg:block lg:text-sm xl:text-xl">
          Daily Volume: $4,782,541,899
        </h4>
      </div>

      <div className="mr-10 flex w-1/2 items-center justify-end">
        <button className="mx-5 hover:bg-[#C6C2E7]">
          <DarkModeIcon className="h-16 w-16 text-3xl lg:p-5 xl:p-4" />
        </button>
        <select
          name=""
          className="mx-5 cursor-pointer bg-[#E6E4F6] px-2 py-1 text-base outline-none hover:bg-[#C6C2E7] focus:bg-[#E6E4F6] xl:text-2xl"
          id=""
        >
          <option className="bg-black text-white" value="English">
            English
          </option>
          <option value="Hindi">Hindi</option>
          <option value="Hindi">Spanish</option>
        </select>

        <Link href="" className="mx-5 hover:bg-[#C6C2E7]">
          <TwitterIcon className="h-16 w-16 lg:p-5 xl:p-4" />
        </Link>
        <h4 className="mx-5 hover:bg-[#C6C2E7]">
          <LinkedInIcon className="h-16 w-16 lg:p-5 xl:p-4" />
        </h4>
        <h4 className="mx-5 hover:bg-[#C6C2E7]">
          <FacebookIcon className="h-16 w-16 lg:p-5 xl:p-4" />
        </h4>
      </div>
    </div>
  );
};

export default HeadingBar;

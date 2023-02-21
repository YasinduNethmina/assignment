import React from "react";
import Image from "next/image";
import avaxImg from "../../../public/assets/cryptoLogos/avax.png";
import solImg from "../../../public/assets/cryptoLogos/sol.png";
import bnbImg from "../../../public/assets/cryptoLogos/bnb.png";
import ethImg from "../../../public/assets/cryptoLogos/eth.png";
import maticImg from "../../../public/assets/cryptoLogos/matic.png";

type Props = {};

const Networks = (props: Props) => {
  return (
    <div className="dark:border-[#9A9E9E border-2 border-black font-semibold text-black transition-all dark:bg-[#31353F] dark:text-[#9A9E9E] dark:hover:bg-[#1B2028]">
      <div>
        <button className="flex w-full items-center bg-[#E6E4F6] pr-2 transition-all hover:bg-[#C6C2E7] dark:bg-[#31353F] dark:hover:bg-[#1B2028] dark:hover:text-white">
          <Image src={avaxImg} className="z-50 m-2 h-5 w-5" alt="avax_logo" />
          AVALANCHE
        </button>
      </div>

      <div>
        <button className="flex w-full items-center bg-[#E6E4F6] pr-2 transition-all hover:bg-[#C6C2E7] dark:bg-[#31353F] dark:hover:bg-[#1B2028] dark:hover:text-white">
          <Image src={solImg} className="z-50 m-2 h-5 w-5" alt="avax_logo" />
          SOLANA
        </button>
      </div>

      <div>
        <button className="flex w-full items-center bg-[#E6E4F6] pr-2 transition-all hover:bg-[#C6C2E7] dark:bg-[#31353F] dark:hover:bg-[#1B2028] dark:hover:text-white">
          <Image src={bnbImg} className="z-50 m-2 h-5 w-5" alt="avax_logo" />
          BNB
        </button>
      </div>

      <div>
        <button className="flex w-full items-center bg-black pr-2 text-white transition-all dark:bg-black dark:hover:text-white">
          <Image src={ethImg} className="z-50 m-2 h-5 w-5" alt="avax_logo" />
          ETHEREUM
        </button>
      </div>

      <div>
        <button className="flex w-full items-center bg-[#E6E4F6] pr-2 transition-all hover:bg-[#C6C2E7] dark:bg-[#31353F] dark:hover:bg-[#1B2028] dark:hover:text-white">
          <Image src={maticImg} className="z-50 m-2 h-5 w-5" alt="avax_logo" />
          MATIC
        </button>
      </div>
    </div>
  );
};

export default Networks;

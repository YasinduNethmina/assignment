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
    <div className="border-2 border-black font-semibold text-black">
      <div>
        <button className="flex w-full items-center bg-[#E6E4F6] pr-2 hover:bg-[#C6C2E7]">
          <Image src={avaxImg} className="z-50 m-2 h-5 w-5" alt="avax_logo" />
          AVALANCHE
        </button>
      </div>

      <div>
        <button className="flex w-full items-center bg-[#E6E4F6] pr-2 hover:bg-[#C6C2E7]">
          <Image src={solImg} className="z-50 m-2 h-5 w-5" alt="avax_logo" />
          SOLANA
        </button>
      </div>

      <div>
        <button className="flex w-full items-center bg-[#E6E4F6] pr-2 hover:bg-[#C6C2E7]">
          <Image src={bnbImg} className="z-50 m-2 h-5 w-5" alt="avax_logo" />
          BNB
        </button>
      </div>

      <div>
        <button className="flex w-full items-center bg-black pr-2 text-white">
          <Image src={ethImg} className="z-50 m-2 h-5 w-5" alt="avax_logo" />
          ETHEREUM
        </button>
      </div>

      <div>
        <button className="flex w-full items-center bg-[#E6E4F6] pr-2 hover:bg-[#C6C2E7]">
          <Image src={maticImg} className="z-50 m-2 h-5 w-5" alt="avax_logo" />
          MATIC
        </button>
      </div>
    </div>
  );
};

export default Networks;

import { useState, FC } from "react";
import axios from "axios";
import Image from "next/image";
import { useQuery } from "react-query";

import { Sliders, Search } from "react-feather";

type Props = {};

const Swap: FC = (props: Props) => {
  const [searchToken, setSearchToken] = useState<string>("");
  const [settingsActice, setSettingsActive] = useState<boolean>(false);
  const [tokenActive, setTokenActive] = useState<boolean>(false);
  const [tokenValue, setTokenValue] = useState<number | string>(0);

  const { data, isLoading, error } = useQuery(["coins"], () => {
    return axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => res.data);
  });

  const handleTokenSelect = (coin: any) => {
    setTokenValue(coin);
    setTokenActive((prev) => !prev);
  };

  if (isLoading || error) {
    return (
      <div
        className="h-96 w-full border-2 border-black bg-white dark:border-[#9A9E9E] dark:bg-[#1B2028] dark:text-white"
        role="status bg-white"
      >
        <div className="mx-auto flex w-full justify-between bg-[#D9D9D9] px-10 text-black dark:bg-[#31353F] dark:text-white">
          <h4 className="py-5 text-center text-2xl font-bold">Swap</h4>
          <button>
            <Sliders className="text-3xl" />
          </button>
        </div>
        <div
          className="relative bottom-12 flex
         h-full w-full items-center justify-center"
        >
          <svg
            aria-hidden="true"
            className="h-12 w-12 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        className={
          settingsActice || tokenActive
            ? "swap w-full border-2 border-black blur-sm dark:border-[#9A9E9E]"
            : "swap w-full border-2 border-black dark:border-[#9A9E9E]"
        }
      >
        <div className="mx-auto flex w-full justify-between bg-[#D9D9D9] px-10 text-black dark:bg-[#31353F] dark:text-white">
          <h4 className="text-center text-2xl font-bold md:py-1">Swap</h4>
          <button onClick={() => setSettingsActive((prev) => !prev)}>
            <Sliders />
          </button>
        </div>

        <div className="mx-auto w-full bg-white text-center dark:bg-[#1B2028] dark:text-white">
          <input
            type="number"
            placeholder="0.00"
            className="mt-4 w-80 border-2 border-black py-2 pl-5 text-3xl font-extrabold  text-gray-500 placeholder-gray-400 outline-none dark:border-[#9A9E9E] dark:bg-[#31353F] dark:text-gray-300 dark:placeholder-gray-400"
          />
          <p className="pl-8 pt-1 text-start text-sm">≈ $23,496.00</p>
          <p className="hidden text-xl md:block">↕️</p>

          <button
            onClick={() => setTokenActive((prev) => !prev)}
            name="coinList"
            className="absolute right-10 top-12 mt-3 w-20 rounded-sm border-2 border-black p-1 shadow-xl outline-none transition-all hover:bg-[#C6C2E7] dark:border-[#9A9E9E] dark:bg-[#31353F] dark:text-white dark:hover:border-[#9A9E9E] dark:hover:bg-[#1B2028] md:top-16 md:mt-0"
            id="coinList"
          >
            {tokenValue ? tokenValue : "BTC"}
          </button>

          <input
            placeholder="0.00"
            type="number"
            className="mt-4 w-80 border-2 border-black py-2 pl-5 text-3xl font-extrabold  text-gray-500 placeholder-gray-400 outline-none dark:border-[#9A9E9E] dark:bg-[#31353F] dark:text-gray-300 dark:placeholder-gray-400"
          />
          <p className="pl-8 pt-1 text-start text-sm">≈ $1.00</p>

          <button
            onClick={() => setTokenActive((prev) => !prev)}
            name="coinList"
            className="absolute top-32 right-10 mt-7 w-20 rounded-sm border-2 border-black p-1 shadow-xl outline-none transition-all hover:bg-[#C6C2E7] dark:border-[#9A9E9E] dark:bg-[#31353F] dark:text-white dark:hover:border-[#9A9E9E] dark:hover:bg-[#1B2028] md:top-40"
            id="coinList"
          >
            {tokenValue ? tokenValue : "USDT"}
          </button>

          <div className="mx-10 text-start text-black dark:text-white">
            <div className="flex justify-between">
              <h4 className="my-3">Exchange rate (incl. fees)</h4>
              <h4 className="my-3">-</h4>
            </div>

            <div className="flex justify-between">
              <h4>Price impact:</h4>
              <h4>%</h4>
            </div>

            <div className="flex justify-between">
              <h4>Trade router through:</h4>
              <h4>ETH/FRAX</h4>
            </div>

            <div className="flex justify-between">
              <h4>Slippage tolerance:</h4>
              <h4>0.1%</h4>
            </div>
          </div>

          <button className="my-4 w-80 bg-[#E6E4F6] py-2 font-bold transition-all hover:bg-purple-300 dark:border-2 dark:border-[#9A9E9E] dark:bg-[#1B2028] dark:hover:bg-gray-800">
            CONNECT WALLET
          </button>
        </div>
      </div>

      {/* Token Select */}
      <div
        className={
          tokenActive
            ? "anim absolute top-1/2 left-1/2 z-40 mt-1 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform border-2 border-black bg-white p-4 dark:border-[#9A9E9E] dark:bg-[#31353F] sm:mt-0 md:-mt-4"
            : "hidden h-0 w-0"
        }
      >
        <div className="flex justify-between font-bold">
          <h4 className="text-2xl dark:text-white">Select a token</h4>
          <button
            className="hover:text-gray-500"
            onClick={() => setTokenActive((prev) => !prev)}
          >
            X
          </button>
        </div>

        <div>
          <Search className="absolute top-16 left-8 mt-1 text-gray-400" />
          <input
            value={searchToken}
            type="text"
            onChange={(e) => setSearchToken(e.target.value)}
            className="my-2 w-full border-2 border-black py-2 pl-10 outline-none dark:border-[#9A9E9E] dark:bg-[#31353F]"
          />

          <div className="flex flex-wrap justify-around">
            {data &&
              data.map((coin: any) => {
                if (coin.market_cap_rank <= 6)
                  return (
                    <button
                      key={coin.id}
                      onClick={() =>
                        handleTokenSelect(coin.symbol.toUpperCase())
                      }
                      className="my-2 flex items-center border-2 p-2 font-semibold transition-all hover:border-blue-600 hover:bg-blue-100 dark:border-[#9A9E9E] dark:text-[#9A9E9E] dark:hover:border-[#1B2028] hover:dark:bg-[#1B2028]"
                    >
                      <Image
                        className="mr-2"
                        src={coin.image}
                        width="20"
                        height="20"
                        alt={coin.id}
                      />
                      <p className="text-sm font-extrabold">{coin.name}</p>
                    </button>
                  );
              })}
          </div>
        </div>

        <div className="my-5 h-32 w-full overflow-auto">
          {data &&
            data
              .filter((coin: any) =>
                coin.name
                  .toLowerCase()
                  .includes(searchToken.toLocaleLowerCase())
              )
              .map((coin: any) => {
                return (
                  <button
                    onClick={() => handleTokenSelect(coin.symbol.toUpperCase())}
                    className="flex w-full items-center border-2 p-2 font-semibold transition-all hover:border-blue-600 hover:bg-blue-100 dark:hover:border-[#9A9E9E] dark:hover:bg-[#1B2028]"
                    key={coin.id}
                  >
                    <div>
                      <Image
                        className="mr-4 w-5"
                        src={coin.image}
                        width="24"
                        height="24"
                        alt={coin.id}
                      />
                    </div>

                    <div className="text-start">
                      <p className="text-xs font-light text-gray-400">
                        {coin.symbol.toUpperCase()}
                      </p>
                      <p className="text-sm font-extrabold dark:text-white">
                        {coin.name}
                      </p>
                    </div>
                  </button>
                );
              })}
        </div>
      </div>

      {/* Advanced Settings */}
      <div
        className={
          settingsActice
            ? "anim swap absolute top-1/2 left-1/2 z-40 mt-1 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform border-2 border-black bg-[#E6E4F6] p-8 dark:border-[#9A9E9E] dark:bg-[#31353F] dark:text-white sm:mt-0 md:-mt-4"
            : "hidden h-0 w-0"
        }
      >
        <div className="flex justify-between font-bold">
          <h4 className="text-2xl">Advanced Settings</h4>
          <button
            className="hover:text-gray-500"
            onClick={() => setSettingsActive((prev) => !prev)}
          >
            X
          </button>
        </div>

        <div>
          <h6 className="my-8">Max Slippage</h6>
          <div className="flex items-center font-bold">
            <input type="radio" className="mr-5" />
            <h6>0.1%</h6>
          </div>

          <div className="my-3 flex items-center font-bold">
            <input type="radio" className="mr-5" />
            <h6>0.5%</h6>
          </div>

          <div className="my-3 flex items-center font-bold">
            <input type="radio" className="mr-5" />
            <input
              type="text"
              placeholder="Custom"
              className="mr-2 border-2 border-black bg-[#C6C2E7] py-2 pl-5 placeholder-gray-600 outline-none dark:border-[#9A9E9E] dark:bg-[#31353F] dark:text-gray-300 dark:placeholder-gray-400"
            />
            <h6>%</h6>
          </div>
        </div>

        <div className="my-5 flex w-full justify-between">
          <button
            onClick={() => setSettingsActive((prev) => !prev)}
            className="w-2/5 border-2 border-black bg-gray-200 text-black transition-all hover:border-blue-600 hover:bg-blue-200 hover:text-blue-600"
          >
            Discard
          </button>
          <button className="w-2/5 bg-blue-600 py-3 text-white transition-all hover:bg-blue-700">
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default Swap;

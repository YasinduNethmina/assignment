// use client directive to enable client-side features
"use client";

import { useQuery } from "react-query";
import axios from "axios";
import React from "react";

type Props = {};

const Swap = (props: Props) => {
  const { data, isLoading, error } = useQuery(["coins"], () => {
    return axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => res.data);
  });

  return (
    <div className="w-full">
      <h4 className="bg-[#2B2268] py-5 text-center text-2xl font-bold text-white">
        Swap
      </h4>

      <div className="mx-auto w-full bg-[#4637A9] text-center">
        <div></div>
        <input
          type="number"
          className="mb-12 mt-5 w-80 border-2 py-2 pl-5 outline-none"
        />

        <select
          name=""
          className="absolute right-10 top-24 mt-1 rounded-sm p-1 shadow-xl outline-none"
          id=""
        >
          {data?.map((coin: any) => {
            return (
              <option value="" key={coin.id}>
                {String(coin.symbol).toUpperCase()}
              </option>
            );
          })}
        </select>

        <input type="number" className="w-80 border-2 py-2 pl-5 outline-none" />
        <select
          name=""
          className="absolute right-10 top-48 mt-0 rounded-sm p-1 shadow-xl outline-none"
          id=""
        >
          <option value="">Ether</option>
        </select>

        <div className="mx-10 text-start text-white">
          <div className="flex justify-between">
            <h4 className="my-4">Exchange rate (incl. fees)</h4>
            <h4 className="my-3">-</h4>
          </div>

          <div className="flex justify-between">
            <h4>Price impact:</h4>
            <h4>%</h4>
          </div>

          <div className="flex justify-between">
            <h4>Trade router through:</h4>
            <h4>-</h4>
          </div>

          <div className="flex justify-between">
            <h4>Slippage tolerance:</h4>
            <h4>0.1%</h4>
          </div>
        </div>

        <button className="my-4 w-80 bg-[#E6E4F6] py-2 font-bold transition-all hover:bg-white">
          CONNECT WALLET
        </button>
      </div>
    </div>
  );
};

export default Swap;

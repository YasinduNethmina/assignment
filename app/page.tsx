"use client";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import Image from "next/image";
import { Inter } from "@next/font/google";

import BackgroundImg from "../public/assets/background.png";
import Swap from "@/components/Swap/Swap";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <main className="">
        <Image
          className="fixed mb-64 h-96 w-full object-cover"
          src={BackgroundImg}
          alt="banner-img"
        />

        <div className="absolute left-1/2 top-80 z-40 mt-6 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform bg-black md:mt-10 lg:top-1/2 lg:mt-0 xl:top-1/2 xl:-translate-y-1/2">
          <Swap />
        </div>
      </main>
    </QueryClientProvider>
  );
}

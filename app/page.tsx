"use client";

import { QueryClient, QueryClientProvider } from "react-query";

import Image from "next/image";
import BackgroundImg from "../public/assets/background.png";
import { Inter } from "@next/font/google";
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

        <div className="absolute left-1/2 top-1/3 z-40 h-96 w-96 -translate-x-1/2 -translate-y-1/3 transform bg-black xl:top-1/3 xl:-translate-y-1/3">
          <Swap />
        </div>
      </main>
    </QueryClientProvider>
  );
}

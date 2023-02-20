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
      <main className="bg-[#E6E4F6]">
        <Image
          className="fixed mb-64 h-96 w-full object-cover"
          src={BackgroundImg}
          alt="banner-img"
        />

        <div className="trabn absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform bg-red-500">
          <Swap />
        </div>
      </main>
    </QueryClientProvider>
  );
}

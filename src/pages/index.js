import Image from "next/image";
import { Inter } from "next/font/google";
import { SearchBar } from "@/components/SearchBar";
import { General } from "@/components/GeneralWeather";
import { useEffect, useState } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <div className="flex items-center justify-center w-full h-screen relative">
      <General className="absolute top-0" />
      <div className="h-screen flex">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40">
          <div className="logo-corner" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white h-40 w-40 rounded-full flex items-center justify-center gap-3">
          <Image src={"/Group 4.png"} width={70} height={150} />
          <Image src={"/Vector.png"} width={70} height={150} />
        </div>
      </div>
    </div>
  );
}

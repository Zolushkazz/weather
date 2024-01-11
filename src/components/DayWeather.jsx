import { SearchBar } from "@/components/SearchBar";
import Image from "next/image";
import { DateDiv } from "./Date";
import { BiHomeAlt } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { LuHeart } from "react-icons/lu";
import { MdPersonOutline } from "react-icons/md";
import { RiCelsiusLine } from "react-icons/ri";

export const DayWeather = ({ weatherData }) => {
  const { name } = weatherData;

  const temp = weatherData?.main?.temp_max || "";

  return (
    <div className="bg-white w-[420px] h-[780px] flex flex-col items-center justify-center p-3 rounded-3xl opacity-80">
      <div className="mt-24 mx-8 flex flex-col justify-start">
        <DateDiv />
        <div className="text-[#000] text-[60px]">{name}</div>
      </div>
      <div className="flex items-center justify-center w-full h-full">
        <Image src={"/sun.png"} width={300} height={250} alt="" />
      </div>
      <div className="text-[80px] mb-8 flex items-center ">
        {temp} <RiCelsiusLine />
      </div>
      <div className="flex justify-between gap-8">
        <BiHomeAlt size={35} color="lightgray" />
        <CiLocationOn size={35} color="lightgray" />
        <LuHeart size={35} color="lightgray" />
        <MdPersonOutline size={35} color="lightgray" />
      </div>
    </div>
  );
};

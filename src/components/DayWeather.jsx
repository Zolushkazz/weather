import { SearchBar } from "@/components/SearchBar";
import Image from "next/image";
import { DateDiv } from "./Date";
import { BiHomeAlt } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { LuHeart } from "react-icons/lu";
import { MdPersonOutline } from "react-icons/md";
export const DayWeather = ({ weatherData }) => {
  const { name } = weatherData;
  return (
    <div className="bg-white w-[420px] h-[780px] flex flex-col items-start  p-3 rounded-3xl opacity-80">
      <div className="mt-5 mx-8">
        <DateDiv />
        {name}
      </div>
      <div className="flex items-center justify-center w-full h-full">
        <Image src={"/sun.png"} width={300} height={250} alt="" />
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

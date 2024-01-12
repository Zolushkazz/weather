import Image from "next/image";
import { DateDiv } from "./Date";
import { BiHomeAlt } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { LuHeart } from "react-icons/lu";
import { MdPersonOutline } from "react-icons/md";
import { RiCelsiusLine } from "react-icons/ri";

export const NightWeather = ({ weatherData }) => {
  const { name } = weatherData;
  const temp = weatherData.temp_min || "";
  return (
    <div
      className=" w-[420px] h-[780px] flex flex-col items-center justify-center p-3 rounded-3xl opacity-80"
      style={{
        background:
          "linear-gradient(180deg, #1F2937 0%, rgba(17, 24, 39, 0.00) 100%)",
      }}
    >
      <div className="mt-24 mx-8 flex flex-col justify-start">
        <DateDiv />
        <div className="text-slate-200 text-[60px]">{name}</div>
      </div>
      <div className="flex items-center justify-center w-full h-full">
        <div className="bg-white rounded-full w-52 h-52 blur-2xl absolute"></div>
        <Image
          src={"/icon.png"}
          width={350}
          height={300}
          className="absolute "
          alt=""
        />
      </div>
      <div className="text-[#fff] text-[80px] mb-8 flex items-center">
        {temp} <RiCelsiusLine />
      </div>
      <div className="flex justify-between gap-8">
        <BiHomeAlt size={35} color="gray" />
        <CiLocationOn size={35} color="gray" />
        <LuHeart size={35} color="gray" />
        <MdPersonOutline size={35} color="gray" />
      </div>
    </div>
  );
};

import { SearchBar, DayWeather, NightWeather } from "@/components";
import { fetchData } from "./Countries";
import { useState } from "react";

export const General = () => {
  const [weatherData, setWeatherData] = useState([]);
  console.log(weatherData);
  return (
    <div className="flex items-center justify-center w-[60vw] h-[80vh] relative rounded-3xl">
      <div className="w-[50%] h-[100vh] bg-slate-100 flex flex-col items-center justify-center">
        <SearchBar setWeatherData={setWeatherData} />
        <DayWeather weatherData={weatherData} />
      </div>
      <div className=" bg-[#0F141E] w-[50%] h-[100vh] flex items-center justify-center">
        <NightWeather weatherData={weatherData} />
      </div>
    </div>
  );
};

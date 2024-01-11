import { CiSearch } from "react-icons/ci";
import { fetchData } from "./Countries";
import { useState } from "react";

export const SearchBar = ({ setWeatherData }) => {
  const [searchValue, setSearchValue] = useState("");

  const getWeather = async () => {
    const res = await fetchData(searchValue);
    setWeatherData(res);
  };

  return (
    <div className="flex gap-2 items-center border-2 rounded-3xl py-2 px-2 w-96 bg-white">
      <CiSearch
        className="w-8 h-7 color-slate-200"
        style={{ color: "lightgray" }}
        onClick={getWeather}
      />
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchValue(e.target.value)}
        style={{ fontSize: "24px", outline: "none", color: "gray" }}
      />
    </div>
  );
};

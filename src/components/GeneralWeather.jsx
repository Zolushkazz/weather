import { SearchBar, DayWeather, NightWeather } from "@/components";
import { useEffect, useState } from "react";
import { Suggestion } from "./Suggestion";
import axios from "axios";

export const General = () => {
  const [searchValue, setSearchValue] = useState("");
  const [city, setCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const getCity = async () => {
      try {
        const response = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchValue}.json?access_token=pk.eyJ1IjoidHVydXV1dSIsImEiOiJjbDBhZW15ZHAwMGhjM2RtZjB6dnltZnhjIn0.HSb4dmJFSM2USxDkTsScDg`
        );
        setCity(response.data.features.slice(0, 3));
      } catch (error) {
        console.log(error);
      }
    };
    getCity();
  }, [searchValue]);

  useEffect(() => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=metric&appid=fe65c966a4e221ee9d722155cd2b3466`;
      const getWeather = async () => {
        if (!searchValue) {
          return;
        }

        const result = await axios.get(url);
        setWeatherData(result.data.main);
      };
      getWeather();
    } catch (e) {
      console.log(e);
    }
  }, [selectedCity]);

  return (
    <div className="flex items-center justify-center w-[60vw] h-[80vh] relative rounded-3xl">
      <div className="w-[50%] h-[100vh] bg-slate-100 flex flex-col items-center justify-center">
        <SearchBar search={searchValue} setSearch={setSearchValue} />
        <Suggestion city={city} setSelectedCity={setSelectedCity} />
        <DayWeather weatherData={weatherData} day={"day"} />
      </div>
      <div className=" bg-[#0F141E] w-[50%] h-[100vh] flex items-center justify-center">
        <NightWeather weatherData={weatherData} day={"night"} />
      </div>
    </div>
  );
};

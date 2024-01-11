import axios from "axios";
export const fetchData = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fe65c966a4e221ee9d722155cd2b3466`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

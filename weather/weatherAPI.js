import axios from "axios";

async function getWeather(location) {
  const options = {
    method: "GET",
    url: "https://community-open-weather-map.p.rapidapi.com/weather",
    params: {
      q: location,
      lang: "en",
      units: "imperial",
    },
    headers: {
      "x-rapidapi-key": "46b4d5dd96msh6977294d33915f4p138385jsnf07fb8cefc41",
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    },
  };

  await axios
    .request(options)
    .then((response) => {
      let conditions = response.data;
      console.log(conditions.main);
    })
    .catch(function (error) {
      console.error(error);
    });
}

getWeather('Atlanta');
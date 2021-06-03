// import axios from "axios";

// async function getWeather(location) {
//   const options = {
//     method: "GET",
//     url: "https://community-open-weather-map.p.rapidapi.com/weather",
//     params: {
//       q: location,
//       lang: "en",
//       units: "imperial",
//     },
//     headers: {
//       "x-rapidapi-key": "46b4d5dd96msh6977294d33915f4p138385jsnf07fb8cefc41",
//       "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
//     },
//   };

//   await axios
//     .request(options)
//     .then((response) => {
//       let conditions = response.data;
//       console.log(conditions.main);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// }

// getWeather('Atlanta');

async function fetchWeather(location) {
    let url = `https://community-open-weather-map.p.rapidapi.com/weather?q=${location}&lang=en&units=imperial`;
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "46b4d5dd96msh6977294d33915f4p138385jsnf07fb8cefc41",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      },
    });
    const data = await res.json();
    console.log(data);
    const weather = data.main;
    document.getElementById("result").innerHTML = `
    <h1>${data.name} Weather</h1>
    <h2>Temperature:</h2>
    ${weather.temp}<br>
    <h2>Feels Like:</h2>
    ${weather.feels_like}
    <h2>Humidity</h2>
    ${weather.humidity}%
    <h2>Conditions</h2>
    ${data.weather[0].description}
    <h2>Wind</h2>
    ${data.wind.speed} mph
    `;
  }
  
  fetchWeather("Atlanta");
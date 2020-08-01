import React, { useState, useEffect } from "react";
import HomepageComponent from "../component/homepage";
import { read } from "../const/axiosconfig/axiosService";
import Axios from "axios";

let key = "a870dddc667a7fc80a611b9b162631be";

let HomepageContainer = () => {
  const [whetherData, setWhetherData] = useState([]);
  const [city, setCity] = useState("jomsom");

  useEffect(() => {
    getdata();

  });

  let cityName = (city) => {
    setCity(city);
  };

  let getdata = () => {
    // read().then((res)=>console.log(res)).catch((err)=>console.log(err))
    Axios.get(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2d65620666a9ef8b9d205e10d5fdbd8f`
    )
      .then((res) => setWhetherData(res.data))
      .catch((err) => err);
  };
  console.log(whetherData);

  let allTemp = {
    convertKtoC:
      (parseFloat(whetherData.main ? whetherData.main.temp : "") - 273.15).toFixed(2),
    minTemp:
    (  parseFloat(whetherData.main ? whetherData.main.temp_min : "") - 273.15).toFixed(2),
    maxTemp:
     ( parseFloat(whetherData.main ? whetherData.main.temp_max : "") - 273.15).toFixed(2),
    visibility: parseFloat(whetherData.visibility) / 1000,
  };

  let sunriseAndSunset = {
    sunRise: new Date(
      parseFloat(whetherData.sys ? whetherData.sys.sunrise : "") * 1000
    ),
    sunset: new Date(
      parseFloat(whetherData.sys ? whetherData.sys.sunset : "") * 1000
    ),
  };

  return (
    <HomepageComponent
      whetherData={whetherData}
      allTemp={allTemp}
      cityName={cityName}
      sunriseAndSunset={sunriseAndSunset}
    />
  );
};

export default HomepageContainer;

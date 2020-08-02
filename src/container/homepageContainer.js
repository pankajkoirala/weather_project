import React, { useState, useEffect } from "react";
import HomepageComponent from "../component/homepage";
import icondata from "../component/icon.json";
import Axios from "axios";


let HomepageContainer = () => {
  const [whetherData, setWhetherData] = useState({});
  const [city, setCity] = useState({city:"kathmandu"});
  const[backGimg,setBackGimg]=useState("")
 



  useEffect(() => {

    
      // if (whetherData.weather?whetherData.weather[0].main:""==="Clouds") {
      //   return(
      //     setBackGimg("cloudus")
      //   )
      // }else if(whetherData.weather?whetherData.weather[0].main:""==="Atmosphere"){
      //   return(
      //     setBackGimg("atmospheric")
      //   )
      // }else if(whetherData.weather?whetherData.weather[0].main:""==="Thunderstorm"){
      //   return(
      //     setBackGimg("thunderstom")
      //   )
      // }else if(whetherData.weather?whetherData.weather[0].main:""==="Drizzle"){
      //   return(
      //     setBackGimg("drizzle")
      //   )
      // }else if(whetherData.weather?whetherData.weather[0].main:""==="Rain"){
      //   return(
      //     setBackGimg("rain")
      //   )
      // }else if(whetherData.weather?whetherData.weather[0].main:""==="Snow"){
      //   return(
      //     setBackGimg("snow")
      //   )
      // }else if(whetherData.weather?whetherData.weather[0].main:""==="Clear"){
      //   return(
      //     setBackGimg("clear")
      //   )
      // }
    
  
      

   
    Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.city}&appid=2d65620666a9ef8b9d205e10d5fdbd8f`
    )
      .then((res) => setWhetherData(res.data))
      .catch((err) => err);
    
  }, [city]);
 




  // icon logo selector
  let iconarray = [];
  let iconid = whetherData.weather ? whetherData.weather[0].id : "";
  iconarray.push(icondata.find((arg) => parseFloat(arg.icon_id) === iconid));

 

  //search city function
  let cityName = (selectedcity) => {
    setCity(selectedcity);
  };

  let allTemp = {
    convertKtoC: (
      parseFloat(whetherData.main ? whetherData.main.temp : "") - 273.15
    ).toFixed(2),
    minTemp: (
      parseFloat(whetherData.main ? whetherData.main.temp_min : "") - 273.15
    ).toFixed(2),
    maxTemp: (
      parseFloat(whetherData.main ? whetherData.main.temp_max : "") - 273.15
    ).toFixed(2),
    visibility: parseFloat(whetherData.visibility) / 1000,
  };

  let sunriseAndSunset = {
    sunRise: new Date(
      parseFloat(whetherData.sys ? whetherData.sys.sunrise : "") * 1000
    ),
    sunset: new Date(
      parseFloat(whetherData.sys ? whetherData.sys.sunset : "") * 1000
    ),
    recenttime: new Date(parseFloat(whetherData.dt) * 1000),
  };

  console.log(sunriseAndSunset.recenttime.toTimeString())
  return (
    <HomepageComponent
      whetherData={whetherData}
      allTemp={allTemp}
      cityName={cityName}
      sunriseAndSunset={sunriseAndSunset}
      iconarray={iconarray}
      backGimg={backGimg}
    />
  );
};

export default HomepageContainer;

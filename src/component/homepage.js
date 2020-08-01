import React, { useState } from "react";
import "./homepage.css";
import { Table, FormGroup, Label, Input } from "reactstrap";

const WhetherHomepage = (props) => {
  const [searchCity, setSearchCity] = useState("");
  let whetherinfo = props.whetherData;

  let a = new Date(
    parseFloat(whetherinfo.sys ? whetherinfo.sys.sunrise : "") * 1000
  );
  console.log(a.getHours(), a.getMinutes());
  console.log(a);

  return (
    <div className="sunny">
      <div className="d-flex justify-content-between m-4">
        <div className="ml-4">
          <h1>Today Weather Forcast</h1>
          <div className="whethericon">
           {props.icon}
          </div>
        </div>
        <div className="m-4 search">
          <FormGroup>
            <Label className="h4">City</Label>
            <Input
            placeholder="enter city name"
              type="text"
              name="city"
             
              onChange={(e) => {
                return setSearchCity(e.target.value);
              }}
            />
            <button
              onClick={() => {
                props.cityName(searchCity);
              }}
            >
              Search
            </button>
          </FormGroup>
        </div>
      </div>
      <div className="m-4">
        <h1>
          {whetherinfo.name}, {whetherinfo.sys ? whetherinfo.sys.country : ""}
        </h1>
        <h3>mostly {whetherinfo.weather ? whetherinfo.weather[0].main : ""}</h3>
        <div className="temperature">
          {props.allTemp.convertKtoC} <sup>o</sup>C
        </div>
      </div>
      <div className="d-flex justify-content-start">
        <div className="ml-4">
          <h4>Wind</h4>
          <h5>Speed :{whetherinfo.wind ? whetherinfo.wind.speed : ""} Km/h</h5>
          <h5>
            Degree :{whetherinfo.wind ? whetherinfo.wind.deg : ""} <sup>0</sup>
          </h5>
          <h4>Visibility : {props.allTemp.visibility} Km</h4>
        </div>
        <div className="ml-4">
          <h5>SunSet And Rise</h5>
          <h5>
            Sun Rise : {props.sunriseAndSunset.sunRise.getHours()}:
            {props.sunriseAndSunset.sunRise.getMinutes()} Am
          </h5>
          <h5>
            Sun Set : {props.sunriseAndSunset.sunset.getHours()}:
            {props.sunriseAndSunset.sunset.getMinutes()} Pm
          </h5>
        </div>
      </div>
      <div className="table ml-4">
        <Table bordered>
          <thead>
            <tr>
              <th>Day</th>
              <th>Max temperature</th>
              <th>Min temoperature</th>
              <th>Humidity</th>
              <th>Pressure</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Day 1</th>
              <td>
                <h4>
                  {props.allTemp.maxTemp}
                  <sup>o</sup>C
                </h4>
              </td>
              <td>
                <h4>
                  {" "}
                  {props.allTemp.minTemp}
                  <sup>o</sup>C{" "}
                </h4>
              </td>
              <td>
                <h4> {whetherinfo.main ? whetherinfo.main.humidity : ""} % </h4>
              </td>
              <td>
                <h5>
                  {" "}
                  {whetherinfo.main ? whetherinfo.main.pressure : ""} hPa
                </h5>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default WhetherHomepage;

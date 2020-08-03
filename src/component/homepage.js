import React,{ useState, useEffect} from "react";
import * as Yup from "yup";
import "./homepage.css";
import { Formik } from "formik";
import { Table, FormGroup, Label, Input } from "reactstrap";

const WhetherHomepage = (props) => {
  const[backimage,setBackimage]=useState("")
  const whetherinfo = props.whetherData;

 useEffect(()=>{
  let weather=whetherinfo.weather?whetherinfo.weather[0].main:""

  if(weather==="Rain"){
    return(
      setBackimage("rain")
    )
  }else if(weather==="Thunderstorm"){
    return(
      setBackimage("thunderstom")
    )
  }else if(weather==="Drizzle"){
    return(
      setBackimage("drizzle")
    )
  }else if(weather==="Snow"){
    return(
      setBackimage("snow")
    )
  }else if(weather==="Atmosphere"){
    return(
      setBackimage("atmospheric")
    )
  }else if(weather==="Clear"){
    return(
      setBackimage("clear")
    )
  }else if(weather==="Clouds"){
    return(
      setBackimage("cloudus")
    )
  }
 },[whetherinfo.weather])

 console.log("hello"); // test for how many time function run
  return (
    <div className={backimage}>
      <Formik
        initialValues={{
          city: "",
        }}
        onSubmit={(values, actions) => {
          props.cityName(values);
        }}
        validationSchema={Yup.object().shape({
          city: Yup.string()
            .min(3, "too shot")
            .max(20, "too long")
            .required("required"),
        })}
      >
        {({
          touched,
          errors,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <div>
            <div className="ml-4">
              <div className="d-flex justify-content-start ">
                <div className="">
                  <h1>Today Weather Forcast</h1>
                </div>

                <div className=" search ">
                  <FormGroup>
                    <Label className="h4">City</Label>
                    <Input
                      placeholder="enter city name"
                      type="text"
                      name="city"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.city && errors.city && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.city}
                      </span>
                    )}
                    <br />
                    <button
                      type="button"
                      onClick={() => {
                        handleSubmit();
                      }}
                    >
                      Search
                    </button>
                  </FormGroup>
                </div>
              </div>
              <div>
              <h5>Date & time when weather data is taken</h5>
                <h3>Today Date :{props.sunriseAndSunset.recenttime.toDateString()} </h3>
                <h3>Time :{props.sunriseAndSunset.recenttime.toTimeString()} </h3>

              </div>
            </div>

            <div className="weatherdeatil">
              <div className="whethericon">
                {props.iconarray.map((arg, index) => {
                  return <img key={index} src={arg ? arg.img : ""} alt="" />;
                })}
              </div>
              <h1>
                {whetherinfo.name},
                {whetherinfo.sys ? whetherinfo.sys.country : ""}
              </h1>
              <h3>
                mostly {whetherinfo.weather ? whetherinfo.weather[0].main : ""}
              </h3>
              <div className="temperature">
                {props.allTemp.convertKtoC} <sup>o</sup>C
              </div>
              <div> <h4> Feel like :{ props.allTemp.feellike} <sup>o</sup>C </h4></div>
            </div>

            <div className="  d-flex flex-wrap d-flex bothtable ">
              <Table bordered className="table">
                <tbody>
                  <tr>
                    <td className="h5">Max temp</td>
                    <td>
                      <h4>
                        {props.allTemp.maxTemp}
                        <sup>o</sup>C
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <td className="h5">Min temp</td>
                    <td>
                      <h4>
                        {props.allTemp.minTemp}
                        <sup>o</sup>C
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <td className="h5">Humidity</td>
                    <td>
                      <h4>
                        {whetherinfo.main ? whetherinfo.main.humidity : ""} %{" "}
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <td className="h5">Pressure</td>
                    <td>
                      <h5>
                        {whetherinfo.main ? whetherinfo.main.pressure : ""} hPa
                      </h5>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table bordered className="table">
                <tbody>
                  <tr>
                    <td className="h5">Sun rise</td>
                    <td>
                      <h4>
                        {props.sunriseAndSunset.sunRise.getHours()}:
                        {props.sunriseAndSunset.sunRise.getMinutes()} Am
                      </h4>
                    </td>
                  </tr>

                  <tr>
                    <td className="h5">Sun set</td>
                    <td>
                      <h5>
                        {props.sunriseAndSunset.sunset.getHours()}:
                        {props.sunriseAndSunset.sunset.getMinutes()} Pm
                      </h5>
                    </td>
                  </tr>
                  <tr>
                    <td className="h5">Wind Speed</td>
                    <td>
                      <h4>
                        {whetherinfo.wind ? whetherinfo.wind.speed : ""} Km/h
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <td className="h5">Wind Degree</td>
                    <td>
                      <h4>
                        {whetherinfo.wind ? whetherinfo.wind.deg : ""}
                        <sup>o</sup>
                      </h4>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default WhetherHomepage;

import SearchBox from "./SearchBox"
import ShowWeather from "./ShowWeather"
import { useState } from "react"

export default function WeatherApp(){
  let [weatherInfo,setWeatherInfo]=useState({
    city:"Rudrapur",
    temparature:27.29,
    Max_temp:27.90,
    Min_temp:27.29,
    feels_like: 27.73,
    weather:"broken clouds",
    humidity:41,
  });
  let updateInfo=(result)=>{
    setWeatherInfo(result);
  }
  return(
    <>
      <h1 className="text-center mt-4">Weather App</h1>
      <SearchBox updateInfo={updateInfo}/>
      <ShowWeather data={weatherInfo}/>
    </>
  )
}
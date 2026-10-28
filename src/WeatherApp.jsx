import SearchBox from "./SearchBox"
import ShowWeather from "./ShowWeather"

export default function WeatherApp(){
  return(
    <>
      <h1 className="text-center mt-4">Weather App</h1>
      <SearchBox/>
      <ShowWeather/>
    </>
  )
}
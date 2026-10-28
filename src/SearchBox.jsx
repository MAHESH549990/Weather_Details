import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import { useState } from 'react';

export default function SearchBox(){
  const API_URL="https://api.openweathermap.org/data/2.5/weather";
  
  let [city,setCity]=useState("");
  const API_KEY = import.meta.env.VITE_API_KEY;
  let fetchData=async()=>{
        const response = await fetch(
           `${API_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
        );

        const data = await response.json();
         let result={
             temparature:data.main.temp,
             max_temp:data.main.temp_max,
             min_temp:data.main.temp_min,
             feelsLike:data.main.feels_like,
             weather:data.weather[0].description
          }
        console.log(data);
        console.log(result);
    
  }

  let searchCity=(event)=>{
     setCity(event.target.value);
  }

  let cityDetail=(event)=>{
    event.preventDefault();
    console.log(import.meta.env.VITE_API_KEY);
    const API_KEY = import.meta.env.VITE_API_KEY;

    console.log("API key loaded:", Boolean(API_KEY));
    console.log(city);
    setCity("");
    fetchData();
  }
  return(
    <>
    <div className="container card mt-5 p-5">
     <form onSubmit={cityDetail}>
     
      <TextField id="city" label="City Name..." variant="outlined" required className='m-2' value={city} onChange={searchCity}/>
      
      <Button variant="contained" endIcon={<AdsClickIcon />} type="submit" className='mt-3'>
        Search
      </Button>
    </form>
    </div>
    </>
  )
}
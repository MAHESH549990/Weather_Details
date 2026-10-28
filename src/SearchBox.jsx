import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
  const API_URL="https://api.openweathermap.org/data/2.5/weather";
  
  let [city,setCity]=useState("");
  let [error,setError]=useState(false);
  const API_KEY = import.meta.env.VITE_API_KEY;
  let fetchData=async()=>{
    try{
        const response = await fetch(
           `${API_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
        );

        const data = await response.json();
         let result={
             city:data.name,
             temparature:data.main.temp,
             max_temp:data.main.temp_max,
             min_temp:data.main.temp_min,
             feelsLike:data.main.feels_like,
             weather:data.weather[0].description
          }
        console.log(data);
        console.log(result);
        return result;
    }catch(err){
      throw err;
    }
  }

  let searchCity=(event)=>{
     setCity(event.target.value);
  }

  let cityDetail=async(event)=>{
    try{
    event.preventDefault();
    setCity("");
    let res=await fetchData();
    updateInfo(res);
    }catch(err){
      setError(true);
    }
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
    {error && <p className='text-danger m-3'>This place not exist in our API</p>}
    </div>
    </>
  )
}

import { useCallback, useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import ShowWeather from "./ShowWeather";
import { fetchWeather } from "./weather";
import CloudQueueRoundedIcon from "@mui/icons-material/CloudQueueRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

const seasons = [
  ["Cold & crisp","WINTER","https://images.unsplash.com/photo-1478265409131-1f65c88f965c?auto=format&fit=crop&w=900&q=85","Cool air and quiet mornings."],
  ["Summer skies","SUMMER","https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85","Long, bright days outdoors."],
  ["Monsoon mood","RAINY SEASON","https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=900&q=85","Soft rain and fresh greens."],
  ["Spring color","SPRING","https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85","Fresh blooms and warmer air."]
];
function AreaMap({weather}) {
  const p = weather && weather.coordinates;
  const src = p ? "https://www.openstreetmap.org/export/embed.html?bbox="+(p.lon-.06)+"%2C"+(p.lat-.04)+"%2C"+(p.lon+.06)+"%2C"+(p.lat+.04)+"&layer=mapnik&marker="+p.lat+"%2C"+p.lon : "";
  return <section className="map-card" id="location"><div className="section-heading map-heading"><div><span className="eyebrow">YOUR AREA</span><h2>Weather on the map</h2></div><span className="map-pin"><MapOutlinedIcon /></span></div>
    {src ? <><div className="map-frame"><iframe title={"Map centered on "+weather.city} src={src} loading="lazy" /></div><div className="map-caption"><span><LocationOnOutlinedIcon /> {weather.city}{weather.country?", "+weather.country:""}</span><a href={"https://www.openstreetmap.org/?mlat="+p.lat+"&mlon="+p.lon+"#map=12/"+p.lat+"/"+p.lon} target="_blank" rel="noreferrer">Open full map ↗</a></div></> : <div className="map-empty"><MapOutlinedIcon /><p>Search for a city to see it on the map.</p></div>}
  </section>;
}
export default function WeatherApp() {
  const [weather,setWeather]=useState(null), [loading,setLoading]=useState(true), [error,setError]=useState("");
  const search=useCallback(async city=>{setLoading(true);setError("");try{setWeather(await fetchWeather(city));}catch(e){setError(e.message||"Something went wrong. Please try again.");}finally{setLoading(false);}},[]);
  useEffect(()=>{ let active=true; fetchWeather("Rudrapur").then(data=>{if(active)setWeather(data);}).catch(err=>{if(active)setError(err.message||"Something went wrong. Please try again.");}).finally(()=>{if(active)setLoading(false);}); return ()=>{active=false;}; },[]);
  return <main className="weather-app"><div className="weather-shell">
    <header className="topbar"><a className="brand" href="#top" aria-label="Skycast home"><span className="brand-mark"><CloudQueueRoundedIcon /></span><span>sky<span>cast</span><small>WEATHER, IN FOCUS</small></span></a><nav className="top-nav" aria-label="Main navigation"><a href="#today">Today</a><a href="#seasons">Seasons</a><a href="#location">Explore map</a></nav><div className="local-status"><span/> LIVE CONDITIONS</div></header>
    <section className="welcome-row" id="top"><div><span className="eyebrow"><WbSunnyOutlinedIcon/> YOUR DAILY WEATHER BRIEFING</span><h1>A clearer view<br/>of <em>what’s outside.</em></h1></div><p>Current conditions, local details, and a little inspiration for wherever the day takes you.</p></section>
    <SearchBox onSearch={search} loading={loading}/>{error&&<div className="error-banner" role="alert">{error}</div>}
    {loading&&!weather?<section className="weather-loading"><span className="loading-orb"/> Loading local weather…</section>:weather&&<div id="today"><ShowWeather data={weather} loading={loading}/></div>}
    <div className="lower-grid"><AreaMap weather={weather}/><section className="season-section" id="seasons"><div className="section-heading season-heading"><div><span className="eyebrow">AROUND THE YEAR</span><h2>Every season, a new scene.</h2></div><p>Little snapshots of the weather we love.</p></div><div className="season-grid">{seasons.map((s,i)=><article className="season-card" key={s[1]}><img src={s[2]} alt={s[0]+" landscape"} loading="lazy"/><div className="season-shade"/><div className="season-content"><span>{"0"+(i+1)+" · "+s[1]}</span><h3>{s[0]}</h3><p>{s[3]}</p></div></article>)}</div></section></div>
    <footer className="weather-footer"><a className="brand footer-brand" href="#top"><span className="brand-mark"><CloudQueueRoundedIcon/></span><span>sky<span>cast</span></span></a><p>Look up. Step out. Make the most of today.</p><span>Weather data by OpenWeather · Map © OpenStreetMap</span></footer>
  </div></main>;
}

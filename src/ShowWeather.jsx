
import "./ShowWeather.css";
const scenes={
 rain:"https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=1800&q=90",
 snow:"https://images.unsplash.com/photo-1478265409131-1f65c88f965c?auto=format&fit=crop&w=1800&q=90",
 clear:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=90",
 clouds:"https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=1800&q=90",
 default:"https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1800&q=90"
};
function scene(d){const w=d.weather.toLowerCase();if(w.includes("rain")||w.includes("drizzle")||w.includes("thunder"))return scenes.rain;if(w.includes("snow")||d.temperature<7)return scenes.snow;if(w.includes("clear"))return scenes.clear;if(w.includes("cloud"))return scenes.clouds;return scenes.default;}
function time(value,offset){if(!value)return "—";return new Intl.DateTimeFormat("en",{hour:"numeric",minute:"2-digit",timeZone:"UTC"}).format(new Date((value+offset)*1000));}
export default function ShowWeather({data,loading}){
 return <section className={"weather-overview"+(loading?" is-refreshing":"")} aria-live="polite"><article className="current-card" style={{"--weather-image":"url("+scene(data)+")"}}><div className="current-card-overlay"/>
  <div className="current-topline"><span className="live-pill"><i/> CURRENT WEATHER</span><span className="current-date">{new Intl.DateTimeFormat("en",{weekday:"long",month:"short",day:"numeric"}).format(new Date())}</span></div>
  <div className="current-main"><div className="current-location"><span className="current-label">RIGHT NOW IN</span><h2>{data.city}<small>{data.country}</small></h2><p>{data.description}</p></div><div className="temperature-block"><img src={"https://openweathermap.org/img/wn/"+data.icon+"@2x.png"} alt={data.weather}/><strong>{data.temperature}<sup>°</sup></strong><span>Feels like {data.feelsLike}°</span></div></div>
  <div className="current-bottomline"><span>High <b>{data.maxTemp}°</b></span><span className="bottom-divider"/><span>Low <b>{data.minTemp}°</b></span><span className="bottom-spacer"/><span className="coordinates">{data.coordinates.lat.toFixed(2)}°, {data.coordinates.lon.toFixed(2)}°</span></div></article>
  <aside className="details-column"><div className="details-heading"><span className="eyebrow">AT A GLANCE</span><span>LOCAL DETAILS</span></div><div className="detail-tile"><span className="detail-icon">%</span><span className="detail-label">Humidity</span><strong>{data.humidity}<small>%</small></strong><div className="metric-track"><i style={{width:data.humidity+"%"}}/></div></div><div className="detail-tile"><span className="detail-icon wind-icon">↗</span><span className="detail-label">Wind speed</span><strong>{data.windSpeed}<small> km/h</small></strong><p>Measured near the surface</p></div><div className="sun-times"><div><span>☼</span><small>SUNRISE</small><b>{time(data.sunrise,data.timezone)}</b></div><div><span>☾</span><small>SUNSET</small><b>{time(data.sunset,data.timezone)}</b></div></div></aside>
 </section>;
}

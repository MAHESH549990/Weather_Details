
import { useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
export default function SearchBox({onSearch,loading}) {
  const [city,setCity]=useState("");
  function submit(e){e.preventDefault();const query=city.trim();if(query){onSearch(query);setCity("");}}
  return <form className="search-bar" onSubmit={submit} role="search"><span className="search-icon"><NearMeOutlinedIcon/></span><label className="visually-hidden" htmlFor="city-search">Search a city</label><input id="city-search" type="search" placeholder="Search a city or town…" value={city} onChange={e=>setCity(e.target.value)} autoComplete="off"/><button type="submit" disabled={loading||!city.trim()}><SearchRoundedIcon/><span>{loading?"Loading…":"Find weather"}</span></button></form>;
}

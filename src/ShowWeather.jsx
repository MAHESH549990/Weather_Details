import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./ShowWeather.css";

let COLD_URL="https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
let HOT_URL="https://images.unsplash.com/photo-1586793064296-2658fa260cbe?q=80&w=1262&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
let RAIN_URL="https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

export default function ShowWeather({data}){
  return(
    <>
    <div className="Card-div">
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={data.humidity>80?RAIN_URL : data.temparature>15?HOT_URL:COLD_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <p>
            Temparature: <b>{data.temparature}&deg;C</b><br/>
            Max Temp: <b>{data.max_temp}&deg;C</b><br/>
            Min Temp: <b>{data.min_temp}&deg;C</b><br/>
            Weather is <b>{data.weather}</b> feels like <b>{data.feelsLike} and Himidity {data.humidity}&deg;C</b>
          </p>
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    </div>
    </>
  )
}
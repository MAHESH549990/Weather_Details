import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./ShowWeather.css";

export default function ShowWeather(){
  let data={
    city:"Rudrapur",
    temparature:27.29,
    Max_temp:27.90,
    Min_temp:27.29,
    feels_like: 27.73,
    weather:"broken clouds",
  }
  return(
    <>
    <div className="Card-div">
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://images.unsplash.com/photo-1767372396847-ae34edaa048e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <p>
            Temparature: {data.temparature}&deg;<br/>
            Max Temp: {data.Max_temp}&deg;<br/>
            Min Temp: {data.Min_temp}&deg;<br/>
            Weather is <b>{data.weather}</b> feels like <b>{data.feels_like}&deg;</b>
          </p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    </>
  )
}
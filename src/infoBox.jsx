
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "./InfoBox.css";
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1666720825304-67db37d44908?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   
const HOT_URL = "https://images.unsplash.com/photo-1606745979565-31b327b092b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdCUyMHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D";
const COLD_URL = "https://media.istockphoto.com/id/1128660321/photo/woman-with-inhaler-suffering-asthma-attack.webp?a=1&b=1&s=612x612&w=0&k=20&c=cCSMR5adAYCaGpL4-MBCcR4ax6ESD8qrIO7Z3JWjqMk=";
const RAIN_URL = "https://media.istockphoto.com/id/105934727/photo/rain.webp?a=1&b=1&s=612x612&w=0&k=20&c=Z-21JImEjaPh55Ek00YRctuv1VNPwKJnlSDfySyonYw=";
    return (
        <div className="InfoBox">
            {/* <h1>WeatherInfo - {info.weather}</h1> */}
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
  {info.city}{" "}
  {info.humidity > 80 ? (
    <ThunderstormIcon />
  ) : info.temp > 15 ? (
    <SunnyIcon />
  ) : (
    <SevereColdIcon />
  )}
</Typography>

        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Temperature ={info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>Min Temp = {info.tempMin}&deg;C</p>
         <p>Max Temp = {info.tempMax}&deg;C</p>
         <p>The weather is described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    
    </Card>
    </div>
        </div>
    );
}

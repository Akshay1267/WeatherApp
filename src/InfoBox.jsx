import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "./InfoBox.css";
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ info }) {
  const hotIcon = <SunnyIcon />;
  const coldIcon = <AcUnitIcon />;
  const rainIcon = <ThunderstormIcon />;

  const rainURL = "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.jpg?s=2048x2048&w=is&k=20&c=X8ecxMSWW5AaLFBxlzhxvzKSnCy_9apOlhvlJCOp-YU=";
  const hotURL = "https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.jpg?s=612x612&w=is&k=20&c=LzGX1eZTBvpNMvXXFs5wfYQCzf7ThvKb4cVUZCkirKk=";
  const coldURL = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const weatherIcon = info.humidity > 70 ? rainIcon : info.temp > 15 ? hotIcon : coldIcon;
  const weatherImage = info.humidity > 70 ? rainURL : info.temp > 15 ? hotURL : coldURL;

  return (
    <div className="InfoBox">
      <br/>
      <Card sx={{ maxWidth: 600, margin: "auto" }}>

        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image={weatherImage}
            alt="weather"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: "26px", fontWeight: "bold" }}>
  {info.city} {weatherIcon}
</Typography>

<Typography component="span" variant="body2" sx={{ fontSize: "18px", color: 'text.secondary' }}>
  <p>Temperature: {info.temp}°C</p>
  <p>Feels Like: {info.feelsLike}°C</p>
  <p>Humidity: {info.humidity}%</p>
  <p>Max Temp: {info.tempMax}°C</p>
  <p>Min Temp: {info.tempMin}°C</p>
  <p>Condition: {info.weather}</p>
</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

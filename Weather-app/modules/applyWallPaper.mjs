import weatherData from './weatherData.mjs';
import getSeason from './getSeason.mjs';

function applyWallpaper(season, result) {
  const weatherMain = result.weather[0].main;
  const colorBg = document.querySelector('#container');
  const body = document.body;

  const wallpapersForSeason = weatherData.wallpapers[season];

  switch (weatherMain) {
    case 'Clear':
      body.style.backgroundImage = wallpapersForSeason[0];
      colorBg.style.backgroundColor = '#5bb1d8';
      break;
    case 'Clouds':
      body.style.backgroundImage = wallpapersForSeason[1];
      colorBg.style.backgroundColor = '#a0a19b';
      break;
    case 'Drizzle':
      body.style.backgroundImage = wallpapersForSeason[2];
      colorBg.style.backgroundColor = '#4b687c';
      break;
    case 'Rain':
      body.style.backgroundImage = wallpapersForSeason[3];
      colorBg.style.backgroundColor = '#4b687c';
      break;
    case 'Thunderstorm':
      body.style.backgroundImage = wallpapersForSeason[4];
      colorBg.style.backgroundColor = '#31304D';
      break;
    case 'Snow':
      body.style.backgroundImage = wallpapersForSeason[5];
      colorBg.style.backgroundColor = '#25316D';
      break;
    default:
      body.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1549863897-3aa27a8b31da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
      colorBg.style.backgroundColor = '#90A17D';
      break;
  }
}

export default applyWallpaper;

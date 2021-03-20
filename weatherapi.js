const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&lang=en&appid=6efd870e4a59aec575c6b814bbf3d4f2";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  
  document.getElementById('currently').textContent = jsObject.weather[0].description;
  document.getElementById('temperature').textContent = jsObject.main.temp;
  document.getElementById('humidity').textContent = jsObject.main.humidity;
  document.getElementById('wind-speed').textContent = jsObject.wind.speed;
  
  
let t = parseFloat(document.getElementById('temperature').textContent);
let s = parseFloat(document.getElementById('wind-speed').textContent);

let wc = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);

if (t <= 50 && s > 3) {
     wc = Math.round(wc);
  } 
else {
     wc = "N/A";
  }

document.getElementById('wind-chill').innerHTML = wc;


  
  });



const apiFiveURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&lang=en&appid=6efd870e4a59aec575c6b814bbf3d4f2";

fetch(apiFiveURL)
  .then((response) => response.json())
  .then((jsObject) => {
  

  let day = 0;
  const dayofWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  
  const thefive = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));

  
  thefive.forEach ( x => {
  
    let d = new Date (x.dt_txt);
  
    document.getElementById(`dayofweek${day+1}`).textContent = dayofWeek[d.getDay()];
    document.getElementById(`forecast${day+1}`).textContent = Math.round(x.main.temp);

    
    
    const imagesrc = 'https://openweathermap.org/img/w/' + x.weather[0].icon + '.png';
    const desc = x.weather[0].description;
    
    document.getElementById(`icon${day + 1}`).setAttribute('src', imagesrc); 
    document.getElementById(`icon${day + 1}`).setAttribute('alt', desc);
    
    
  
    day++;

    
  });
  


    
  });




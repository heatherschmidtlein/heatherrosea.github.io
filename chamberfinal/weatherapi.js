const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=44.081&lon=-103.231&units=imperial&lang=en&appid=6efd870e4a59aec575c6b814bbf3d4f2";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  
  document.getElementById('currently').textContent = jsObject.current.weather[0].description;
  document.getElementById('temperature').textContent = jsObject.current.feels_like;
  document.getElementById('humidity').textContent = jsObject.current.humidity;
  

  
  });


const apiFiveURL = "https://api.openweathermap.org/data/2.5/onecall?lat=44.081&lon=-103.231&units=imperial&lang=en&appid=6efd870e4a59aec575c6b814bbf3d4f2";

fetch(apiFiveURL)
  .then((response) => response.json())
  .then((jsObject) => {
  

  let day = 0;
  const dayofWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  
  const thefive = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));

  
  thefive.forEach ( x => {
  
    let d = new Date (x.dt_txt);
  
    document.getElementById(`dayofweek${day+1}`).textContent = dayofWeek[d.getDay()];
    document.getElementById(`forecast${day+1}`).textContent = Math.round(x.current.feels_like);

    
    
    const imagesrc = 'https://openweathermap.org/img/w/' + x.weather[0].icon + '.png';
    const desc = x.current.weather[0].description;
    
    document.getElementById(`icon${day + 1}`).setAttribute('src', imagesrc); 
    document.getElementById(`icon${day + 1}`).setAttribute('alt', desc);
    
    
  
    day++;

    
  });
  


    
  });

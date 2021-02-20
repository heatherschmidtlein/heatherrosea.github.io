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

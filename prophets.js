const requestURL = 'byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
  for (let i = 0; i < prophets.length; i++ ) {
  });

const prophets = jsonObject['prophets'];

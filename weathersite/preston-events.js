const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })

    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
          for (let i = 0; i < towns.length; i++) {
            
            let card = document.createElement('section');
            let events1 = document.createElement('p');
            let events2 = document.createElement('p');
            let events3 = document.createElement('p');

           if (towns[i].name == "Preston") {
             
               events1.textContent = towns[i].events[0];
               events2.textContent = towns[i].events[1];
               events3.textContent = towns[i].events[2];

               card.appendChild(events1);
               card.appendChild(events2);
               card.appendChild(events3);

           document.querySelector('div.events').appendChild(card);
             
            }
    }
    })

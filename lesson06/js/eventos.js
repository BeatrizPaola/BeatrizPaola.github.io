const requestURL ="https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];


let preston =document.createElement('section');
let h3=document.createElement('h3');
h3.textContent=towns[6].events
preston.appendChild('h3');
document.querySelector('div.event').appendChild(preston)});
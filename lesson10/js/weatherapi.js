const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=b6484089823f16bdebaea0a6869f13ce";

const fcURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=b6484089823f16bdebaea0a6869f13ce";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    document.getElementById("currentlyW").textContent = jsObject.weather[0].description;
    document.getElementById('current-temp').textContent = jsObject.main.temp + '°F';
    document.getElementById("humid").textContent = jsObject.main.humidity + '%';
    document.getElementById("speed").textContent = jsObject.wind.speed + 'mph';

    
	
    const imagesrc = 'https://openweathermap.org/img/w/'+jsObject.weather[0].icon +'.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);
    
  });

  fetch(fcURL)
  .then(function (response) {
	return response.json();
  })
  .then(function (jsonObject) {
	// console.table(jsonObject); // temporary checking for valid response and data parsing
	const forecasts = jsonObject["list"].filter((forecast) => {
		if(forecast.dt_txt.includes(" 18:00:00")) {
			return forecast;
		}
	});

	const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	for (let i = 0; i < forecasts.length; i++) {
		// Create card (div element)
		let card = document.createElement("div");
		card.setAttribute("class", "flex-col");

		// Forecast Day
		let spanDay = document.createElement("span");
		spanDay.setAttribute("class", "col-head");
		const d = new Date(forecasts[i].dt_txt);
		spanDay.textContent = weekday[d.getDay()];
		card.appendChild(spanDay)
		
		// Image
		let image = document.createElement("img");
		let imagesrc = "https://openweathermap.org/img/w/" + forecasts[i].weather[0].icon + ".png";
		let desc = forecasts[i].weather[0].description;
		image.setAttribute("class", "image-day");
		image.setAttribute("src", imagesrc);
		image.setAttribute("alt", desc);
		card.appendChild(image);

		// Forecast Current Temperature
		let spanTemp = document.createElement("span");
		spanTemp.setAttribute("class", "data");
		let floatTemp = parseFloat(forecasts[i].main.temp);
		let roundTemp = Math.round(floatTemp);
		spanTemp.textContent = roundTemp + "°F";
		card.appendChild(spanTemp);

		// Add card (div element) to class "flex" div element
		document.querySelector("div.flex").appendChild(card);
	}
  });




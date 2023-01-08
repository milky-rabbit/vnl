const API_KEY = '1eb19d3bb906332faf6252b9d6b0d3ec';

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    console.log(url);

    fetch(url)
        .then(response => response.json()
        .then(data => {
            console.log(data);
            const weather = document.querySelector("#weather .current-temp");
            const city = document.querySelector("#weather div:last-child span");
            const icon = document.querySelector("#weather .weather-icon");

            city.innerText = data.name;
            //weather.innerText = data.weather[0].main + "/" + data.main.temp;
            weather.innerText =  ` ${data.main.temp}° `;
            //icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            icon.alt = data.weather[0].main;
            icon.title = data.weather[0].main;
        }));

}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
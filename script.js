

const weatherapi = {
    key:"b8eca395f0e478fa62c057cb9e5317ec",
    baseurl:"https://api.openweathermap.org/data/2.5/weather",
}

const searchbox = document.getElementById('search-bar');
const searchbutton = document.getElementById('btn');


searchbox.addEventListener('keypress',(event)=>{
         
          if(event.keyCode == 13){
              console.log(searchbox.value);
              getreport(searchbox.value);
          }
})

const getreport = (city) => {
         fetch(`${weatherapi.baseurl}?q=${city}&appid=${weatherapi.key}`).then((weather) => {
               return weather.json();
         }).then(showWeatherReport);
}

const showWeatherReport = (weather) => {
           console.log(weather);  
           
           let city = document.getElementById("city");
           city.innerText = `Temprature in ${weather.name}`;

           let temp = document.getElementById("temp");
           temp.innerHTML = `${Math.round(weather.main.temp)-273}&deg;C`;

           let wind = document.getElementById("wind");
           wind.innerText = `Wind speed : ${weather.wind.speed}`

           let weathertype = document.getElementById("all");
           weathertype.innerText = `Weathertype : ${weather.weather[0].main}`;

           let humidity = document.getElementById("humid");
           humidity.innerText = ` Humidity : ${weather.main.humidity}`;
}

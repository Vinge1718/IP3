var apiKey = require("./../.env").apiKey;

function Weather(){

}

Weather.prototype.getweather = function(city, displayFunction){
  $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey).then(function(response){
    displayFunction(city, response.main.humidity);
    $(".showWeather").text("The humidity in " + city + " is " + response.main.humidity + "%");
  }).fail(function(error){
    $(".showWeather").text(error.responseJSON.message);
  });
}

exports.weatherModule = Weather;

var Weather = require("./../JS/weather.js").weatherModule;
var displayHumidity = function(city, humidityData){
  $(".showWeather").text("The humidity in " + city + " is " + humidityData + "%")
}

$(document).ready(function(){
  var currentWeatherObject = new Weather();
  $("#weatherLocation").click(function(){
    var city = $("#location").val();
    $("#location").val("");
    currentWeatherObject.getweather(city, displayHumidity);
    });

  });

//FRONT END LOGIC
var Calculator = require("./../JS/script.js").calculatorModule;

$(document).ready(function(){    //waiting till the DOM has fully loaded in order to fully function with the interface elements

//enables the refresh-btn to refresh the page.

  $(".refresh-btn").on("click", function(){location.reload();});

  // prompt the ping pong action from the click event imposed on the input button
  $("#button").click(function() {                 // wrapper holding the object describing the functions triggered by the click function.

    var userNumber = parseInt($("#input").val());   //local innititalisation of the userNumber as the user-entered number
    var simpleCalculator = new Calculator("hot Pink");

     /*innitialising the variable "results" and assigning it the the "output"-function (the function used to populate the array in the last business-logic code block)
     with the input variable from the user (userNumber) as the parameter passed into the function */

    var results = simpleCalculator.output(userNumber);               //innitialises the "input" parameter used in the loop (in the function block above) therefore declaring it as the value the user enters... (i.e replacing the "input" paramaeter with the "userNumber" parameter)
    var displayResults = $(".displayResults");      //Naming the the area where the results will be displayed and converting it into a function (calling it by CLASS - this is to be used later to attach append function)
    for (var i = 0; i < results.length; i++) {      // loop logic setting the limits to the range of integers that will be be operated on by the above functions

    // call the objects in the array and display them (append) as a list item called by class through append-function

      displayResults.append('<li>' + results[i] + '</li>');  //concatnation of the already populated array "result[i]" to the list and then appended to the div-tag referenced above by it's class-name
    }
  });

});

$(document).ready(function(){
  $("#signup").submit(function(event){
    event.preventDefault();
    var email = $("#email").val();
    $("#signup").hide();
    $("#gameOutput").prepend("<p>Thank you, " + email + " has been added to our list!</p>");
  });
});

$(document).ready(function(){
  $("#time").text(moment());
});

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

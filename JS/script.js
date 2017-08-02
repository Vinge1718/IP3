$(document).ready(function(){


//convert the string into an integer and innitialise the user input number locally i.e within the function "ready"


  var userNumber = parseInt($("#input").val());

/*creating a function that is going to test out the user input number
(Note the use of type-Number input field to control user input data-type)
*/
//innitialising the function (a.k.a - naming)
var divisibilityTest = function(userNumber){

// Multiple Condition testing using the "if...else if"

  if (userNumber % 3 ===0 && userNumber % 5 === 0){
    return "pingpong";
  }
  else if (userNumber % 3 === 0) {
    return "ping";
  }
  else if (userNumber % 5 === 0) {
    return "pong";
  }
  else {
    return userNumber;
  }
};
/*
  function pingpong() {
    $("")


    $("#mainwrapper").append(result);
  }
*/


});

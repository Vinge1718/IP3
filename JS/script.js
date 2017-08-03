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

// Creating the storage (memory/array) in which the results/output will be stored as the function above generates them

var output = function(userNumber) {                        //innitialising/ naming the function that is supposed to incrementally
  var results = [];                                                                 //innitalising an empty array with the name results

  for (var defaultNumber = 1; defaultNumber <= userNumber; defaultNumber++){
    results.push(divisibilityTest(defaultNumber));
  }
return results;
};


// prompt the ping pong action from the onlick function imposed on the input button
$("#button").click(function){
  var results = output(userNumber);
  var
}

});

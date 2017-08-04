
//BACK-END / BUSINESS LOGIC



$(document).ready(function(){


/*creating a function that is going to test out the user input number
(Note the use of type-Number input field to control user input data-type)
*/



//innitialising/assigning the function a reference term (a.k.a - naming)
var divisibilityTest = function(i){



// Multiple Condition testing using the "if...else if" logic

  if (i % 3 === 0 && i % 5 === 0){ //combined two logic using the operator and --- the other option is to use fifteen since as shown in the alternative logic loop below
    return "pingpong";
  }
  else if (i % 3 === 0) {         // remainder test with three set to output the string "ping" if the modulus result is zero
    return "ping";
  }
  else if (i % 5 === 0) {         // remainder test with five set to output the string "pong" if the modulus result is zero
    return "pong";
  }
  else {
    return i;                     // default setting to output the user-dealt input if none of the above set conditions are met
  }
};




//using for loop to display the same result
/*
----USING "FOR" LOOP TO DISPLAY THE SAME RESULT----- but since it has a "document.write" function
it over-writes the whole DOM in displaying the result and replaces the page sdt-up with your answer.

var pingPongTest = function(i) {
 var userNumber = parseFloat($('#userNumber').val());
   for (i = 1; i <= userNumber; i++) {
       if (i % 15 === 0) {
           document.write ("pingpong<br>");                         //modulus test combining both the modulus 3 and 5 in one resultant test
           continue;
       };

       if (i % 3 === 0) {
           document.write ("ping<br>");                             //same as the related test in the above "else if" code block
           continue;
       };

       if (i % 5 === 0) {
           document.write ("pong<br>");
           continue;
       };

       document.write (i + "<br>");
   }
};
*/








// Creating the storage (memory/array) in which the results/output will be stored as the function above generates them

var output = function(input) {                        //innitialising/ naming the function that is supposed to incrementally
  var results = [];                                   //innitalising an empty array and naming it results (so to access the array we'll ust call the variable "results")

  for (var i = 1; i <= input; i++) {
    results.push(divisibilityTest(i));                // using the push method to add elements to the "results-array" innitialised above through calling the divisibility-test function
  }
return results;                                       // dispaly the now-populated array
};


//FRONT END LOGIC



// prompt the ping pong action from the click event imposed on the input button
$("#button").click(function() {                 // wrapper holding the object describing the functions triggered by the click function.
  var userNumber = parseInt($("#input").val());   //local innititalisation of the userNumber as the user-entred number
  var results = output(userNumber);               //innitialising the variable "results" ans assigning it the the "output"function (the function used to populate the array in the previous code block) with the input value fromvthe user as the parameter to use
  var displayResults = $(".displayResults");      //Naming the the area where the results will be displayed and converting it into a function (calling it by CLASS - this is to be used later to attach append function)
  for (var i = 0; i < results.length; i++) {      // loop logic setting the limits to the range of integers that will be be operated on by the above functions


    // call the objects in the array and display them (append) as a list item called by class through append-function

    displayResults.append('<li>' + results[i] + '</li>');  //concatnation of the already populated array "result[i]" to the list and then appended to the div-tag referenced above by it's class-name
  }
});

});

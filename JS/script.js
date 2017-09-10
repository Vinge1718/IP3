//BACK-END / BUSINESS LOGIC

function Calculator(skinName){
  this.skin = skinName;
}


// Creating the storage (memory/array) in which the results/output will be stored as the function described above is called WITHIN to generate those results.

Calculator.prototype.output = function(input) { //innitialising the function that is supposed to introduce an array and populate it through a loop and push functions whilst applying the ping pong test to the looped variables.

  /*creating a function that is going to test out the user input number
  (Note the use of type-Number input field to control user input data-type)
  */

  //innitialising/assigning the function a reference term (a.k.a - naming) NOTE the "return" keyword is used to return the output in order to help re-usability of the results in other functions later on
  var divisibilityTest = function(i){           // this declaration of the function and naming it 'divisibility test'  NOTE:(function divisibilityTest(i){...} - could work as well)

  // Multiple Condition testing using the "if...else if" logic

    if (i % 3 === 0 && i % 5 === 0){ //combined two logic using the operator and --- the other option is to use fifteen since as shown in the alternative logic loop below
      return "pingpong";
    }
    else if (i % 3 === 0) {         // remainder test with three set to return the string "ping" if the modulus result is zero
      return "ping";
    }
    else if (i % 5 === 0) {         // remainder test with five set to return  the string "pong" if the modulus result is zero
      return "pong";
    }
    else {
      return i;                     // default setting to output the user-dealt input if none of the above set conditions are met
    }
  };

  var results = [];                                   //innitalising an empty array and naming it results (so to access the array we'll just call its variable name "results")

  for (var i = 1; i <= input; i++) {                  //using the "for" loop method...where loop is set to start at "1" iterate with increments of "1" and end when the variable is
    results.push(divisibilityTest(i));                // using the push method to add items/elements to the "results-array" from its end. The divisibility-test function is called within the push method to act as a filter to evaluate the value entered by the user (ping pong tester)
  }                                                   //the push and divisibility test will run in every loop till the loop conditions are fulfilled
return results;                                       // output the now-populated array for re-use when called from anothr function.NOTE( We can't display the array at this point because the parameter "input" is undefined) it will be defined by the user input value
};

exports.calculatorModule = Calculator;

//using for loop to display the same result
/*
----USING "FOR" LOOP TO DISPLAY THE SAME RESULT----- but since it has a "document.write" function
it over-writes the whole DOM in displaying the result and replaces the page sdt-up with your answer. You can go ahead and debug that if you wish


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


//ANOTHER VERSION
function pingPong(input) {
  var output = [];
  for (var i = 1; i <= input; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
}
*/

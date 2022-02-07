// Make a global variable to track if the payment has been calculated (successfully or unsuccessfully) yet
var calculated = false;

/* Function: vlidFirstName
  
*/
function validFirstName(firstname) {
  let pattern = /^[a-z]*$/ig;
  let str = firstname.value;
  let isValid = pattern.test(str);
  if (isValid) {
    document.getElementById('firstNameError').style.visibility = "hidden";
    return true;
  } else {
    document.getElementById('firstNameError').style.visibility = "visible";
    document.getElementById('firstNameError').innerHTML = "Error: Numbers or Special Characters are not accepted.";
    return false;
  }

}


/* Function: vlidLastName
  
*/
function validLastName(lastname) {
  let pattern = /^[a-z]*$/ig;
  //console.log.(lastname.value);
  let str = lastname.value;
  let isValid = pattern.test(str);
  //console.log(isValid);
  if (isValid) {
    document.getElementById('lastNameError').style.visibility = "hidden";
    return true;
  } else {
    document.getElementById('lastNameError').style.visibility = "visible";
    document.getElementById('lastNameError').innerHTML = "Error: Numbers or Special Characters are not accepted.";
    return false;
  }

}


/* Function: validPhoneNumber
  
*/
function validPhoneNumber(phoneNumber) {
  let pattern = /^\d{3}[\-]\d{3}[\-]\d{4}$/;
  //console.log.(phonenumber.value);
  let str = phoneNumber.value;
  let isValid = pattern.test(str);
  //console.log(isValid);
  if (isValid) {
    document.getElementById('phoneError').style.visibility = "hidden";
    return true;
  } else {
    document.getElementById('phoneError').style.visibility = "visible"
    document.getElementById('phoneError').innerHTML = "Error: Please enter the number in this format: xxx-xxx-xxxx";
    return false;
  }

}


/* Function: isCCNumValid

*/
function isCCNumValid(cardnum) {
  let patternA = /^\d{16}$/;
  let patternB = /^\d{4} \d{4} \d{4} \d{4}$/;
  let patternC = /^\d{4}\-\d{4}\-\d{4}\-\d{4}$/;
  //console.log.(cardnum.value);
  let str = cardnum.value;
  let isPatternAValid = patternA.test(str);
  let isPatternBValid = patternB.test(str);
  let isPatternCValid = patternC.test(str);
  //console.log(isValid);
  if (isPatternAValid || isPatternBValid || isPatternCValid) {
    document.getElementById('CCNumError').style.visibility = "hidden";
    return true;
  } else {
    document.getElementById('CCNumError').style.visibility = "visible"
    document.getElementById('CCNumError').innerHTML = "Error: Please enter the card number in this format: xxxx xxxx xxxx xxxx";
    return false;
  }

}

/* Function: isExpDateValid

*/
function isExpDateValid(expdate) {
  let pattern = /^(0?[1-9]|1[0-2])\/202[0-9]$/;
  let str = expdate.value;
  let isPatternValid = pattern.test(str);

  //console.log(isValid);
  if (isPatternValid) {
    document.getElementById('expDateError').style.visibility = "hidden";
    return true;
  } else {
    document.getElementById('expDateError').style.visibility = "visible"
    document.getElementById('expDateError').innerHTML = "Error: Please enter the month and the year in this format: XX/XX";
    return false;
  }

}

/* Function: isCVCValid

*/
function isCVCValid() {
  let patternA = /\d\d\d/;
  let patternB = /\d\dS\d\d/;
  let cvc = document.getElementById('cvc');

  let isPatternAValid = patternA.test(cvc.value);
  let isPatternBValid = patternB.test(cvc.value);
  //console.log(isValid);
  if (isPatternAValid || isPatternBValid) {
    document.getElementById('cvcError').style.visibility = "hidden";
    return true;
  } else {
    document.getElementById('cvcError').style.visibility = "visible";
    document.getElementById('cvcError').innerHTML = "Error: Please enter CVC in this format: xxx or  xxxx";
    false
  }

}

/* Function: possiblyCalculate
  If the Calculate button has been previously pressed, this fires off the calculatePayment function any time an input is changed. 
*/
function possiblyCalculate() {
  if (calculated) {
    calculatePayment();
  }
  else {
    // do nothing
  }
}



/* Function: calculatePayment
  Calculates the amount that needs to be paid
    Input: none
*/
function calculatePayment() {
  // we have pressed the button!
  calculated = true;

  // First get our variables
  var itemZero = document.getElementById("item_0").value;
  //console.log.(item0);
  var itemOne = document.getElementById("item_1").value;
  var itemTwo = document.getElementById("item_2").value;
  var itemThree = document.getElementById("item_3").value;
  var itemFour = document.getElementById("item_4").value;
  var itemFive = document.getElementById("item_5").value;

  var totalAmonnt = itemZero * 25.95 + itemOne * 20.95 + itemTwo * 30.95
    + itemThree * 25.95 + itemFour * 20.95 + itemFive * 25.95;

  if (calculated) {
    payment = payment.toFixed(2);
    document.getElementById("payment").value = totalAmonnt
  } else {
    document.getElementById("payment").value = "--";
  }

}


/* Function: resetFields
  Resets all fields in the form and returns focus to APR. Note that the input type is reset so we don't have to clear values, just any error text
    Input: none
*/
function resetFields() {
  // now set focus to first name
  document.getElementById("first_name").focus();

  // finally, clear the automatic calculation of the payment.
  calculated = false;
}


/* Function: myFunction
  
*/
function myFunction() {
  alert("Your purchase was submitted!");
}
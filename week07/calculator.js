// Make a global variable to track if the payment has been calculated (successfully or unsuccessfully) yet
var calculated = false;

/* Function: commafy
  Takes in a string and returns a commafied version of the string (e.g. 5000 becomes 5,000)
    Input: 
    str - string to be commafied (should be a number pattern)
*/
function commafy(num) {
  // first remove any commas
  num = num.replace(/,/g,"");

  // now add commas in
  var parts = num.split(".");  // split at decimal if it exists
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");  // commafy first part
  var commaNum = parts.join(".");

  return commaNum;
}

/* Function: aprIsValid
  Ensures that APR is between 0 and 0.25 (inclusive)
    Input: 
    num - number to be validated
    message - error message id
*/
function aprIsValid(num, message) {
  num = Number(num); // Input is a string, so make it a number
  if(num >= 0 && num <= 25.00) {
    document.getElementById(message).style.visibility="hidden";
    return true;
  } else {
    document.getElementById(message).style.visibility="visible";
    return false;
  }
}

/* Function: termIsValid
  Ensures that term is an integer greater 0 and less than or equal to 40
    Input: 
    num - number to be validated
    message - error message id
*/
function termIsValid(num, message) {
  num = Number(num);
  if((num > 0 && num <= 40) && Number.isInteger(num)) {
    document.getElementById(message).style.visibility="hidden";
    return true;
  } else {
    document.getElementById(message).style.visibility="visible";
    return false;
  }
}

/* Function: amountInput
  Displays amount with commas for better readability
    Input: 
    num - number (a string) to be commafied (the input)
*/
function amountInput(num) {
  document.getElementById("amount").value = commafy(num);
}

/* Function: amountIsValid
  Ensures that the loan amount is not negative
    Input: 
    num - number to be validated
    message - error message id
*/
function amountIsValid(num, message) {
  // first remove any commas
  num = num.replace(/,/g,"");
  // then convert to number explicitly
  num = Number(num);
  if(num > 0) {
    document.getElementById(message).style.visibility="hidden";
    return true;
  } else {
    document.getElementById(message).style.visibility="visible";
    return false;
  }
}

/* Function: calculatePayment
  Calculates the monthly payment based on the inputed values
    Input: none
*/
function calculatePayment() {
  // we have pressed the button!
  calculated = true;

  // First get our variables
  var apr = document.getElementById("apr").value;
  var term = document.getElementById("term").value;
  var amount = document.getElementById("amount").value;
  // use the nifty &= assignment operator to make sure each validate function gets run
  var canCompute = aprIsValid(apr, "aprValid");
  canCompute &= termIsValid(term, "termValid");
  canCompute &= amountIsValid(amount, "amountValid");

  // we need to remove commas from amount
  amount = amount.replace(/,/g, "");

  // convert apr from percentage, and also to monthly, and change term to months
  apr = apr / 100 / 12;
  term = term * 12;
  if (canCompute)
  {
    // make sure we don't divide by zero
    if (apr == 0) {
      var payment = amount / term;
    } else {
      var payment = amount * (apr * Math.pow(1 + apr, term)) / (Math.pow(1 + apr, term) - 1);
    }
    payment = payment.toFixed(2);
    document.getElementById("payment").value = commafy(payment);
  } else {
    document.getElementById("payment").value = "--";
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

/* Function: resetFields
  Resets all fields in the form and returns focus to APR. Note that the input type is reset so we don't have to clear values, just any error text
    Input: none
*/
function resetFields() {
  // turn off error messages
  document.getElementById("aprValid").style.visibility="hidden";
  document.getElementById("termValid").style.visibility="hidden";
  document.getElementById("amountValid").style.visibility="hidden";

  // now set focus to APR field
  document.getElementById("apr").focus();

  // finally, clear the automatic calculation of the payment.
  calculated = false;
}
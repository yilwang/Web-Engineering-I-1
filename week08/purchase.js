

//Define item price
let priceList ={
  item_0: 20.95,
  item_1: 25.95,
  item_2: 30.95,
  item_3: 25.95,
  item_4: 20.95,
  item_5: 25.95
}

//define element handles 
let formElement = document.getElementById('mForm'); 
let phoneElement = document.getElementById('phone') ;
let ccNumElement = document.getElementById('cardnumber');
let expDateElement = document.getElementById('expdate'); 
let saleItemsElement = document.getElementById('product');
let totalElement = document.getElementById('total') 



//Register event listeners
formElement.addEventListener("submit", submitForm);
phoneElement.addEventListener("change", validPhoneNumber);
ccNumElement.addEventListener("change", isCCNumValid);
expDateElement.addEventListener("change", isExpDateValid);


// validate First Name
function validFirstName(firstname) {
  let pattern = /[a-z]/ig;
  //console.log.(firstname.value);
  let str = firstname.value;
  let isValid = pattern.test(str);
  //console.log(isValid);
  if(isValid){
      document.getElementById('firstNameError').style.visibility = "hidden";
      return true;
  }else{
    document.getElementById('firstNameError').style.visibility = "visible";
    document.getElementById('firstNameError').innerHTML = "Error: Numbers or Special Characters are not accepted.";
    return false;
  }
}


// validate Last Name
function validLastName(lastname) {
  let pattern = /^[a-z]*$/ig;
 
  let str = lastname.value;
  let isValid = pattern.test(str);

  if(isValid){
      document.getElementById('lastNameError').style.visibility = "hidden";
      return true;
  }else{
    document.getElementById('lastNameError').style.visibility = "visible";
    document.getElementById('lastNameError').innerHTML = "Error: Numbers or Special Characters are not accepted.";
    return false;
  }

}


function isCVCValid(){
  let patternA = /\d\d\d/;
  let patternB = /\d\dS\d\d/;
  let cvc = document.getElementById('cvc');
 
  let isPatternAValid = patternA.test(cvc.value);
  let isPatternBValid = patternB.test(cvc.value);
  //console.log(isValid);
  if(isPatternAValid || isPatternBValid){
      document.getElementById('cvcError').style.visibility = "hidden";
      return true;
  }else{
    document.getElementById('cvcError').style.visibility  = "visible";
    document.getElementById('cvcError').innerHTML = "Error: Please enter CVC in this format: xxx or  xxxx";
    false
  }

}

//validate Phone Number
function validPhoneNumber() {
  let phonePattern = /^\d{3}[\-]\d{3}[\-]\d{4}$/;

  if(phonePattern.test(phoneElement.value)){
      document.getElementById('phoneError').style.visibility = "hidden";
      return true;
  }else{
    document.getElementById('phoneError').style.visibility  = "visible";
    return false;
  }

}


// Validate Credit Card Number 
function isCCNumValid() {
  let ccNumPattern = /^\d{4} \d{4} \d{4} \d{4}$/;
  if(ccNumPattern.test(ccNumElement.value)){
      document.getElementById('CCNumError').style.visibility = "hidden";
      return true;
  }else{
    document.getElementById('CCNumError').style.visibility  = "visible";
    return false;
  }

}

// Validate Credit Card's Expiration Date
function isExpDateValid() {
  let ccDatePattern = /^(0?[1-9]|1[0-2])\/202[0-9]$/;
  
  if(ccDatePattern.test(expDateElement.value)){
      document.getElementById('expDateError').style.visibility = "hidden";
      return true;
  }else{
    document.getElementById('expDateError').style.visibility  = "visible";
    return false;
  }

}

function calculateTotal(){
  let total = 0;

  let cakeElements = document.querySelectorAll('input[type=checkbox]:checked');

  for( cake of cakeElements){
      total += priceList[cake.name];
  }
  return total;
}

function getTotal(){
  totalElement.value = "$" +  calculateTotal().toFixed(2);

}




function Submitted(){
  alert("The form was submitted");
}

/* Function: resetFields
  Resets all fields in the form and returns focus to APR. Note that the input type is reset so we don't have to clear values, just any error text
    Input: none
*/
function resetFields() {
  // now set focus to first name
  document.getElementById("first_name").focus();
}



//Checks input fields for validity before submit the form 
function submitForm(event){
  
  //prevent the browser submitting the form
  event.preventDefault();

  //Validate all the fields
  if(!validPhoneNumber()){
    //focus on the phone number input
    phoneElement.focus();
  }else if(!isCCNumValid()){
    //focus on the credit card number input
    ccNumElement.focus();
  }else if(!isExpDateValid()){
    //focus on the credit card's expiration date input
    ccNumElement.focus();
  }else{
    //Everything is valid, submit the form
    formElement.submit();
  }


}

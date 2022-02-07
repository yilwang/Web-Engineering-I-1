
//define element handles 
let formElement = document.getElementById('mForm');
let performElement= document.getElementsByName('performance');
let IDElement = document.getElementById('student_id');
console.log("Hello");
console.log(performElement);
console.log("I am nextline");

//Register event listeners

formElement.addEventListener("submit", submitForm);
IDElement.addEventListener("change", validStudentID);

//Perform Type
function performanceType() {
  if(formElement.value === "duet"){
    document.getElementByid('student_2').style.visibility = "visible";
  }
  else{
    document.getElementByid('student_2').style.visibility = "hidden";
  }
}



// validate First Name
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

// validate Last Name
function validLastName(lastname) {
  let pattern = /^[a-z]*$/ig;
  let str = lastname.value;
  let isValid = pattern.test(str);

  if (isValid) {
    document.getElementById('lastNameError').style.visibility = "hidden";
    return true;
  } else {
    document.getElementById('lastNameError').style.visibility = "visible";
    document.getElementById('lastNameError').innerHTML = "Error: Numbers or Special Characters are not accepted.";
    return false;
  }

}

//validate Student ID
function validStudentID() {
  let IDPattern = /^\d{2}[\-]\d{4}[\-]\d{3}$/;

  if (IDPattern.test(IDElement.value)) {
    document.getElementById('studentIDError').style.visibility = "hidden";
    return true;
  } else {
    document.getElementById('studentIDError').style.visibility = "visible";
    document.getElementById('studentIDError').innerHTML = "Error: Please enter a student ID in this format: XX-XXXX-XXX";
    return false;
  }

}

/* Function: resetFields
  Resets all fields in the form and returns focus to APR. Note that the input type is reset so we don't have to clear values, just any error text
    Input: none
*/
function resetFields() {
  // now set focus to first name
  document.getElementById("first_name").focus();
  document.getElementById('firstNameError').style.visibility = "hidden";
  document.getElementById('lastNameError').style.visibility = "hidden";
  document.getElementById('studentIDError').style.visibility = "hidden";
}


//Checks input fields for validity before submit the form 
function submitForm(event) {

  //prevent the browser submitting the form
  event.preventDefault();

  //Validate all the fields
  if (!validStudentID()) {
    //focus on the phone number input
    phoneElement.focus();
  } else {
    //Everything is valid, submit the form
    //console.log("Howdy");
    formElement.submit();
  }
}


document.getElementById("register").addEventListener("click", info);

function info() {
  let myURL = document.getElementById("register").value;
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          let myJSON = JSON.parse(this.responseText);
          document.getElementById("output2").innerHTML = "";
          let a = 0;
          while (myJSON.students[a] != null) {
              document.getElementById("output2").innerHTML += "<div class=\"item\"> Student Name: " +
              myJSON.students[a].first + " " + myJSON.students[a].last +
              "<br> Address: " + myJSON.students[a].address.city + " " + myJSON.students[a].address.state + " " +
              myJSON.students[a].address.zip + " " +
              "<br> Major: " + myJSON.students[a].major + " GPA: " + myJSON.students[a].gpa + "<br> <br>" + "</div>";
              a++;
          }
      }
  };
 
  xhttp.open("GET", myURL, true)
  xhttp.send();
}
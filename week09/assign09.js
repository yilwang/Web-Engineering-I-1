document.getElementById("choices_country").addEventListener("change", info);
document.getElementById("url_sub_btn").addEventListener("click", info2);

function info(event) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById("output1").innerHTML = "<pre>" + this.responseText + "</pre>";
        }
    };
    let test = event.target.value;
    xhttp.open("GET", test, true);
    xhttp.send();
}

function info2() {
    let myURL = document.getElementById("url_input").value;
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
// add input event listeners to form fields, which would call the checkTextField method below

document.getElementById("fname").addEventListener("blur", checkTextField);
document.getElementById("lname").addEventListener("blur", checkTextField);
document.getElementById("tel").addEventListener("blur", checkTextField);
document.getElementById("email").addEventListener("blur", checkTextField);
document.getElementById("address").addEventListener("blur", checkTextField);
document.getElementById("checkInTime").addEventListener("blur", checkTextField);
document.getElementById("checkOutTime").addEventListener("blur", checkTextField);
document.getElementById("guests").addEventListener("blur", checkTextField);

// check whether the input entered in a text field is valid
function checkTextField(event){
    if (((event.target.id == "fname" ||
            event.target.id == "lname" ||
            event.target.id == "tel" ||
            event.target.id == "email" ||
            event.target.id == "address" ||
            event.target.id == "checkInTime" ||
            event.target.id == "checkOutTime" ||
            event.target.id == "guests") &&
            event.target.value == '')
    ){
        event.target.classList.remove("valid");
        event.target.classList.add("error");
    } else {
        event.target.classList.remove("error");
        event.target.classList.add("valid");
    }

    // enable reset and submit buttons when all required inputs are accomplished
    var inputs = document.querySelectorAll("#contact input, #checkInTime, #checkOutTime, #guests");
    var valid = 0;

    inputs.forEach(function(item){
        if (item.classList.value === "valid"){
            valid++;
        }
    });

    if (valid === inputs.length){
        document.getElementById("btnSubmit").disabled = false;
    } else{
        document.getElementById("btnSubmit").disabled = true;
    }
}

// confirm reset when button is clicked
let reserveForm = document.forms[0]

reserveForm.addEventListener("reset", function(event) {
   if (confirm("Clear information?")) {
     reserveForm.reset();
     document.getElementById("btnSubmit").disabled = true; //re-disable submit button when reset
   }
   else {
      event.preventDefault();
   }
});

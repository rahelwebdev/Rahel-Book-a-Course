/*
<!DOCTYPE html>
<html>
<head>
<script>
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
</script>
</head>
<body>

<h2>JavaScript Validation</h2>

<form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
  Name: <input type="text" name="fname">
  <input type="submit" value="Submit">
</form>

</body>
</html>
*/

function validateForm() {
    let vorname = document.getElementById("fname").value;
    if (!vorname) {
        alert ("Bitte tragen Sie Ihren Vornamen ein!");
        return false;
    }


    let nachname = document.getElementById("lastName").value;
    if(!nachname) {
        alert("Bitte tragen Sie Ihren Nachnamen ein!");
        return false;
    }

    let telefon = document.getElementById("phone").value;
    if(!telefon) {
        alert("Bitte tragen Sie Ihre Telefonnummer ein!");
        return false;
    }

    let email = document.getElementById("email").value;
    if(!email) {
        alert ("Bitte tragen Sie Ihre E-mail-Adresse ein!")
        return false;
    }

    let kurse = document.getElementById("kurse").value;
    if (!kurse) {
        alert ("Bitte geben Sie einen Kurs an!")
        return false;
    }
}




 

    /*name required - inside the same function*/
    /*
    <script>
function onSubmit() { 
    let fname = document.getElementById("fname").value;
    
    if (!fname) {
        alert("Please fill your name");
        return false;
    }

    let lastName = document.getElementById("lastName").value;
    if(!lastName) {
        alert("Bitte trage deinen Nachnamen ein.");
        return false;
    }

    sessionStorage.setItem("fname", fname);
}
</script> 
   const firstname = sessionStorage.getItem("firstname");
        const email = sessionStorage.getItem("email");
document.getElementById("confirmation").innerHTML =
            `<h3>Thanks for registering!</h3><br>
                Full Name: ${firstname}<br>
                Email: ${email}<br> */
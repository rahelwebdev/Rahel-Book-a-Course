
function validateForm() {
    let vorname = document.getElementById("fname").value;
    if (!vorname) {
        alert("Bitte tragen Sie Ihren Vornamen ein!");
        return false;
    }


    let nachname = document.getElementById("lastName").value;
    if (!nachname) {
        alert("Bitte tragen Sie Ihren Nachnamen ein!");
        return false;
    }

    let telefon = document.getElementById("phone").value;
    if (!telefon) {
        alert("Bitte tragen Sie Ihre Telefonnummer ein!");
        return false;
    }

    let email = document.getElementById("email").value;
    if (!email) {
        alert("Bitte tragen Sie Ihre E-mail-Adresse ein!")
        return false;
    }

    let kurse = document.getElementById("kurse").value;
    if (!kurse) {
        alert("Bitte geben Sie einen Kurs an!")
        return false;
    }
}

    const firstname = sessionStorage.getItem("fname");
    const lastname = sessionStorage.getItem("lastName");
    const telefon = sessionStorage.getItem("phone");
    const email = sessionStorage.getItem("email");
    const kurs = sessionStorage.getItem("kurse");

    document.getElementById("demo").innerHTML =
        `<h3>Thanks for registering!</h3><br>
    Vorname: ${firstname}<br>
    Nachname: ${lastname}<br>
    Telefon: ${telefon}<br>
    E-mail: ${email}<br>
    Kurs: ${kurs}`;


/*

<h2>The sessionStorage Object</h2>

<p>Person Name is:</p>
<p id="demo"></p>

<script>
sessionStorage.setItem("lastname", "Smith");
let personName = sessionStorage.getItem("lastname");
document.getElementById("demo").innerHTML = personName;
</script>

</body>
</html>


/*</script>
   const firstname = sessionStorage.getItem("firstname");
        const email = sessionStorage.getItem("email");
document.getElementById("confirmation").innerHTML =
            `<h3>Thanks for registering!</h3><br>
                Full Name: ${firstname}<br>
                Email: ${email}<br> */
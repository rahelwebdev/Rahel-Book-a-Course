
<script>
function onSubmit() {

    /*name required - inside the same function*/
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
  /*  const firstname = sessionStorage.getItem("firstname");
        const email = sessionStorage.getItem("email");
document.getElementById("confirmation").innerHTML =
            `<h3>Thanks for registering!</h3><br>
                Full Name: ${firstname}<br>
                Email: ${email}<br> */
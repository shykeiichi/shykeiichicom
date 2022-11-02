function isEmail(emailAdress){
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailAdress.match(regex)) 
    return true; 

   else 
    return false; 
}

function isStrongPassword(password) {
    var regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if(password.match(regex)) {
        return true;
    } else {
        return false;
    }
}

async function login() {
    console.log("login")
    let emailInput = document.getElementById("login-email")
    let passwordInput = document.getElementById("login-password")

    if(emailInput.value == "" || passwordInput == "") {
        document.getElementById("login-error").innerHTML = "Not all required fields are filled!"
        return;
    }

    if(!isEmail(emailInput.value)) {
        document.getElementById("login-error").innerHTML = "Invalid email address!"
        return;
    }

    let password = await sha256(passwordInput.value)

    document.getElementById("login-error").innerHTML = "";

    const response = await fetch(`https://22widi.ssis.nu/api/v1/user/login`, {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({
            "email": emailInput.value,
            "password": password
        })
    });
    
    let json = await response.json();

    if(response.status != 201) {
        document.getElementById("login-error").innerHTML = json;
    } else {
        localStorage.setItem("sessionid", json)
        window.location.href = "./index.html";
        emailInput.value = ""
        passwordInput.value = ""
    }
}

async function signup() {
    console.log("signup")
    let usernameInput = document.getElementById("signup-username")
    let emailInput = document.getElementById("signup-email")
    let passwordInput = document.getElementById("signup-password")

    if(usernameInput.value == "" || emailInput.value == "" || passwordInput == "") {
        document.getElementById("signup-error").innerHTML = "Not all required fields are filled!"
        return;
    }

    if(!isEmail(emailInput.value)) {
        document.getElementById("signup-error").innerHTML = "Invalid email address!"
        return;
    }

    if(!isStrongPassword(passwordInput.value)) {
        document.getElementById("signup-error").innerHTML = "Password is not secure!<br/>Must contain 1 lowercase character<br/>Must contain 1 uppercase character<br/>Must contain 1 numeric character<br/>Must contain 1 special character<br/>Must be 8 characters or longer"
        return;
    }

    let password = await sha256(passwordInput.value)

    document.getElementById("signup-error").innerHTML = "";

    const response = await fetch(`https://22widi.ssis.nu/api/v1/user/create`, {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({
            "username": usernameInput.value,
            "email": emailInput.value,
            "password": password
        })
    });
    
    let json = await response.json();

    if(response.status != 201) {
        document.getElementById("signup-error").innerHTML = json;
    } else {
        usernameInput.value = ""
        emailInput.value = ""
        passwordInput.value = ""
    }
}
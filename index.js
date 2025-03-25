/* Run this code only for once

var sample = {
    username: "Ali",
    email: "ali@gmail.com",
    password: "12345"
}

localStorage.setItem("sample", JSON.stringify(sample));

*/


// Signup form start

const signupForm = document.getElementById("signup");
const username = document.getElementById("username");
const email = document.getElementById("email");

function clearMsg(elemntId) {
    const msg = document.getElementById(elemntId)

    if(msg) {
        msg.remove();
    }
}

username.addEventListener("keyup", function() {
    clearMsg("username-note")
    this.style.outline = "none"
})


email.addEventListener("keyup", function() {
    clearMsg("email-note")
    this.style.outline = "none"

})



signupForm.addEventListener("submit", function(e) {
    e.preventDefault()


    const password = document.getElementById("password").value;
    const getSample = localStorage.getItem("sample");
    const sample = JSON.parse(getSample);


    var usernameNote = document.getElementById("username-note")
    var emailNote = document.getElementById("email-note")


    if(sample.username === username.value && !usernameNote) {
        username.insertAdjacentHTML("afterend", "<p class='red-note' id='username-note'>*This username already exist! </p>")
        username.style.outline = "2px solid red"
    }

    if(sample.email === email.value && !emailNote) {
        email.insertAdjacentHTML("afterend", "<p class='red-note' id='email-note'>*This username already exist! </p>")
        email.style.outline = "2px solid red"
    }

    if(sample.username !== username.value && sample.email !== email.value) {
        const newUser = {
            username: username.value,
            email: email.value,
            password: password
        }

        localStorage.setItem(username.value, JSON.stringify(newUser))

        alert("Success")

        window.location.href = "/welcome.html"
    }
    
})


// Signup form ends



// Login form start

const loginForm = document.getElementById("login");
const passwordLogin = document.getElementById("password-login");
const emailLogin = document.getElementById("email-login");

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const storedData = localStorage.getItem("Sam")
    const data = JSON.parse(storedData)

  

    if(emailLogin.value === data.email && passwordLogin.value === data.password) {
        alert("Success")

        window.location.href = "/welcome.html"
    }

    else {
        var loginNote = document.getElementById("login-note");
        if(!loginNote) {
            emailLogin.insertAdjacentHTML("beforebegin", "<p class='red-note' id='login-note'>*Email or password are not correct! </p>")
            emailLogin.style.outline = "2px solid red"
            passwordLogin.style.outline = "2px solid red"
        }
       
    }
})


emailLogin.addEventListener("keyup", function() {
    clearMsg("login-note")
    this.style.outline = "none"
    passwordLogin.style.outline = "none"
})


passwordLogin.addEventListener("keyup", function() {
    clearMsg("login-note")
    this.style.outline = "none"
    emailLogin.style.outline = "none"

})


// Login form ends




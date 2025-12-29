

let logipage = document.querySelector("#showLogin")
let registerpage = document.querySelector("#showRegister")

let myform = document.querySelector("#registeredForm")
let mylogin = document.querySelector("#loginForm")

let registerBtn = document.querySelector("#registerBtn");
let loginBtn = document.querySelector("#loginBtn");

let msg = document.querySelector("#msg")

let togglePassword = document.querySelector("#togglePassword")
let toggleConfirmPassword = document.querySelector("#toggleConfirmPassword")
let logpas = document.querySelector("#loginpassword")

const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");
const loginP = document.querySelector("#login_password")





logipage.addEventListener("click", () => {
    myform.style = "display: none"
    mylogin.style = "display : block"
})

showRegister.addEventListener("click", () => {
    myform.style = "display: block"
    mylogin.style = "display : none"
})


// register_form

registerBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let name = document.querySelector("#name").value.trim();
    let email = document.querySelector("#email").value.trim();
    let password = document.querySelector("#password").value.trim();
    let confirmPassword = document.querySelector("#confirm_password").value.trim();

    if (!name || !email || !password || !confirmPassword) {
        msg.innerText = "Please enter complete information";
        msg.style.color = "red";
        return;
    }

    if (password.length < 6) {
        msg.innerText = "Password must be at least 6 characters";
        msg.style.color = "red";
        return;
    }

    if (password !== confirmPassword) {
        msg.innerText = "Confirm password does not match";
        msg.style.color = "red";
        return;
    }


    let users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.some(user => user.email === email)) {
        msg.innerText = "Email already registered!";
        msg.style.color = "red";
        return;
    }
  

    users.push({
        name,
        email,
        password
    });

 
    localStorage.setItem("users", JSON.stringify(users));

    msg.innerText = "Registration successful!";
    msg.style.color = "green";


    

    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#password").value = "";
    document.querySelector("#confirm_password").value = "";
});




// login_form
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();


    let email = document.querySelector("#login_email").value.trim();
    let password = document.querySelector("#login_password").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];
 

    if (!email || !password) {
        msg.innerText = "Please enter complete information";
        msg.style.color = "red";
        return;
    }

 
    let foundUser = users.find(user => 
        user.email === email && user.password === password
    );

    if (foundUser) {
        msg.innerText = `Login successful! Welcome ${foundUser.name}`;
        msg.style.color = "green";
    } else {
        msg.innerText = "Invalid email or password";
        msg.style.color = "red";
    }
});

// icon_toggle
togglePassword.addEventListener("click", () => {

    if (password.type === "password") {
        password.type = "text"
        togglePassword.classList.remove("fa-eye")
        togglePassword.classList.add("fa-eye-slash")
    }
    else {
        password.type = "password"
        togglePassword.classList.remove("fa-eye-slash")
        togglePassword.classList.add("fa-eye")
    }

})
toggleConfirmPassword.addEventListener("click", () => {
    if (confirmPassword.type === "password") {
        confirmPassword.type = "text"
        toggleConfirmPassword.classList.remove("fa-eye")
        toggleConfirmPassword.classList.add("fa-eye-slash")
    }
    else {
        confirmPassword.type = "password"
        toggleConfirmPassword.classList.remove("fa-eye-slash")
        toggleConfirmPassword.classList.add("fa-eye")
    }
})
logpas.addEventListener("click", () => {
    if (loginP.type === "password") {
        loginP.type = "text"
        loginpassword.classList.remove("fa-eye")
        loginpassword.classList.add("fa-eye-slash")
    }
    else {
        loginP.type = "password"
        loginpassword.classList.remove("fa-eye-slash")
        loginpassword.classList.add("fa-eye")
    }
})
 


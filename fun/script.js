// const loginForm = document.getElementById("login-form");

// loginForm.addEventListener("submit", (e) => {
//   e.preventDefault();z
//   //   console.log('working')
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   console.log(email);
//   console.log(password);
//   if (email && password) {
//     // Store user's credentials in local storage
//     localStorage.setItem("email", email);
//     localStorage.setItem("password", password);
//     alert("Login successful!");
//   } else {
//     alert("Please enter both email and password!");
//   }
// });

// document
//   .getElementById("tutor-profile-btn")
//   .addEventListener("click", function () {
//     alert("Tutor's Profile button clicked!");
//   });

//sign up
function signUp() {
  const fullName = document.getElementById("full-name").value;
  const guardian = document.getElementById("guardian").value;
  const guardianPhoneNumber = document.getElementById(
    "guardian-phone-number"
  ).value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!fullName || !password || !guardian || !guardianPhoneNumber || !email) {
    return alert("all input field required");
  }
  const userData = {
    fullName,
    guardian,
    guardianPhoneNumber,
    password,
    email,
  };

  

  alert("Sign up successful!");
  window.location.href = "login.html";
}

//login
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const savedToLocal = JSON.parse(localStorage.getItem("userData"));

  if (
    savedToLocal &&
    password === savedToLocal.password &&
    email === savedToLocal.email
  ) {
    alert("login successful");
  } else if (!savedToLocal) {
    alert("no user data found please sign up first");
  } else if (
    email !== savedToLocal.email &&
    password !== savedToLocal.password
  ) {
    alert("both email and password are incorrect");
  } else if (email !== savedToLocal.email) {
    alert("email is incorrect");
  } else if (password !== savedToLocal.password) {
    alert("password is incorrect");
  }

  //   if (email !== storedEmail.email && password !== storedPassword.password) {
  //    return alert("Incorrect info")
  //   } else {
  //     alert("Login successful!");
  //     window.location.href = "protected-page.html";

  //   }
}

// function register() {
//   const registerEmail = document.getElementById("register-email").value;
//   const registerPassword = document.getElementById("register-password").value;

//   localStorage.setItem("email", registerEmail);
//   localStorage.setItem("password", registerPassword);

//   alert("Registration successful!");
// }


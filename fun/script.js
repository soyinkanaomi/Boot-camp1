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


function logIn() {
  const username = document.getElementById("loginUser").value;
  const password = document.getElementById("loginPass").value;

  const savedToLocal = JSON.parse(localStorage.getItem("user"));

  if (
    savedToLocal &&
    username === savedToLocal.username &&
    savedToLocal &&
    password === savedToLocal.password
  ) {
    alert("login successful");
  } else if (
    savedToLocal &&
    username !== savedToLocal.username &&
    savedToLocal &&
    password !== savedToLocal.password
  ) {
    alert("pls fill out the correct information");
  } else if (savedToLocal && username !== savedToLocal.username) {
    alert("username not correct");
  } else if (savedToLocal && password !== savedToLocal.password) {
    alert("password not correct");
  }
}
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
//   console.log('working')
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email);
  console.log(password);
  if (email && password) {
    // Store user's credentials in local storage
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    alert("Login successful!");
  } else {
    alert("Please enter both email and password!");
  }
});

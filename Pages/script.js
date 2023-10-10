var inputPassword = document.getElementById("inputPassword");
var inputEmail = document.getElementById("inputEmail");
var inputToggle = document.getElementById("showbtn");
var showData = document.querySelector(".notification");

//userLogin Show or Hide
setInterval(() => {
  showData.classList.toggle("show");
}, 1000);

setTimeout(() => {
  showData.classList.toggle("hide");
}, 5000);
//register page extra
var inputName = document.getElementById("inputName");
function resetLogin() {
  inputEmail.value = "";
  inputPassword.value = "";
}
function resetRegister() {
  inputEmail.value = "";
  inputName.value = "";
  inputPassword.value = "";
}
function password() {
  if (inputPassword.type === "text") {
    inputToggle.textContent = "Show";
    inputPassword.type = "password";
  } else {
    inputToggle.textContent = "Hide";
    inputPassword.type = "text";
  }
}
function login() {
  if (inputEmail.value == "") {
    alert("Enter Email");
  } else if (inputPassword.value == "") {
    alert("Enter Password");
  } else {
    const user = JSON.parse(localStorage.getItem("user"));
    const userEmail = user ? user.email : "test";
    const userPassword = user ? user.password : "1234";
    if (inputEmail.value !== userEmail) {
      alert("Enter Correct Email");
    } else if (inputPassword.value !== userPassword) {
      alert("Enter Correct Password");
    } else {
      alert("login successfully");
      resetLogin();
      window.location.href = "../index.html";
    }
  }
}
function register() {
  if (inputEmail.value == "") {
    alert("Enter Email");
  } else if (inputName.value == "") {
    alert("Enter Name");
  } else if (inputPassword.value == "") {
    alert("Enter Password");
  } else {
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: inputName.value,
        email: inputEmail.value,
        password: inputPassword.value,
      })
    );

    alert("Register successfully");

    resetRegister();
    window.location.href = "../index.html";
  }
}

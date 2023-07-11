const userName = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS_NAME = "hidden";
const USER_NAME_KEY = "username";

function submitForm() {
  const username = userName.value;
  localStorage.setItem(USER_NAME_KEY, username);
}

const saveUsername = localStorage.getItem(USER_NAME_KEY);

if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASS_NAME);
  loginForm.addEventListener("submit", submitForm);
} else {
  greeting.innerText = `Hello ${saveUsername}`;
  greeting.classList.remove(HIDDEN_CLASS_NAME);
}

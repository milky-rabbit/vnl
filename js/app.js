const greeting = document.querySelector("#login-form #greeting");
const login = document.querySelector("#login-form #login");
const todoForm = document.querySelector("#todo-form");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const USER_NAME = "username";
const HIDDEN_CLASSNAME = "display-none"

function onLogin(event) {
    event.preventDefault();
    const username = loginInput.value;

    if(username === "") {
        alert("Please write your name");
    } else if(username.length > 15) {
        alert("Your name is too long");
    } else {
        localStorage.setItem(USER_NAME, username);
        displayName(`${username}`);
    }
}

function displayName(name) {

    if(name == null || name === "") {
        login.classList.remove(HIDDEN_CLASSNAME);
        greeting.classList.add(HIDDEN_CLASSNAME);
        todoForm.classList.add(HIDDEN_CLASSNAME);
    } else {
        login.classList.add(HIDDEN_CLASSNAME);
        greeting.classList.remove(HIDDEN_CLASSNAME);
        todoForm.classList.remove(HIDDEN_CLASSNAME);

        let message = "";
        const date = new Date();

        if(date.getHours() >= 6 && date.getHours() < 12) {
            message = "Good morning, ";
        } else if(date.getHours() >= 12 && date.getHours() < 17) {
            message = "Good afternoon, ";
        } else {
            message = "Good evening, ";
        }
        greeting.querySelector(".message").innerText = message;
        greeting.querySelector(".name").innerText = name;

    }
}

function welcome() {
    const username = localStorage.getItem(USER_NAME);

    displayName(username);
}

welcome();
loginForm.addEventListener("submit", onLogin);
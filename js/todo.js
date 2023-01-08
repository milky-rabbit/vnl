const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");
const TODOS_KEY = "toDos";

let toDos = [];

function deleteToDo(event) {
    if(event.target.localName === 'span') {
        const li = event.target.parentElement;
        toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
        li.remove();
        saveToDos();
    } else if(event.target.localName === 'svg') {
        const li = event.target.parentElement.parentElement;
        toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
        li.remove();
        saveToDos();
    }
}
    

function printToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.id = newToDo.id;
    span.innerText = newToDo.text;
    
    const delIconSpan = document.createElement("span");
    delIconSpan.innerHTML = '<svg  viewBox="0 0 212.982 212.982" xmlns="http://www.w3.org/2000/svg" class="dropdown-list-icon icon icon-delete"><path xmlns="http://www.w3.org/2000/svg" d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z"></path></svg>';
    delIconSpan.addEventListener("click", deleteToDo);
    //const button = document.createElement("button");
    //button.innerText = "❌";
    //button.type = "button";
    //button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(delIconSpan);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    if(newToDo.trim() === "") return;
    const newToDoObj = {id:Date.now(), text:newToDo};
    toDos.push(newToDoObj);
    toDoInput.value = "";
    printToDo(newToDoObj);
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(element => {
        printToDo(element);
    });
}
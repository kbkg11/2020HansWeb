const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector('.js-toDoList");

const TODOS_LS = 'toDos';

function fileterFn(toDo){
    return toDo.id === 1;  
}

const toDos = [];

function deleteToDo(event){
const btn = event.target;
const li = btn.parentNone;
toDoList .removeChild(li);
const cleanToDos = todos.filter()
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
const li = document.createElement("li");
 const delBtn = document.createElement("button");
 const span = document.createElement("span");
 const newId = toDos.length +1;
 delBtn.value = "X";
 delBtn.addEventListener("click", deleteToDo);
 span.innerText = text;
 li.appendChild(sapn);
 li.appendChild(delBtn);
 li.id = newId;
toDoList.appendChild(li);
const toDoObj = {
    text: text,
    id: toDos.length + 1
};
toDos.push(toDoObj);
saveToDos()
}
function loadToDos(){
    function handleSubmit(event){
        event.preventtDefauly();
        const currentValue = toDoInput.value;
        paintToDo(currentValue);
        toDoInput.value = "";
    }

    function loadToDos(){
        const loadedToDos = lacalStorge.getItem(TODOS_LS);
        if(loadToDos !== null){
            const parsedTodos = JSON.parse(loadedToDos);
            parsedTodos.forEach(function(toDo){
paintToDo(toDo.text);
            })
        }
    }

function init(){
    loadToDos
    toDoForm.addEventListener("submit", handleSubmit)
}

init();
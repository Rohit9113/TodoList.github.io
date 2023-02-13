// Initiliztion
const inputtdl = document.querySelector('.textarea');
const buttontdl = document.querySelector('.buttoninput');
const listtdl = document.querySelector('.todolist');
var count = 0;


function clickButton(e) {
    e.preventDefault();
    addTodo();
}

// adding todoList
function addTodo() {
    const itemall = document.createElement('div');
    count = count+1;;
    // document.getElementById("taskcount").innerHTML="Task:"+count;
    document.getElementById("taskcount").innerHTML="Task: ".concat(count);
    itemall.classList.add('itemall');
    
    const item = document.createElement('p');
    item.classList.add('item');
    item.innerText = inputtdl.value;
    itemall.appendChild(item);

    if (inputtdl.value === '') return

    const checkbutton = document.createElement("button");
    checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkbutton.classList.add("check-button");
    itemall.appendChild(checkbutton);

    const trashbutton = document.createElement("button");
    trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trashbutton.classList.add("trash-button");
    itemall.appendChild(trashbutton);

    listtdl.appendChild(itemall);
    inputtdl.value = '';
}

// checking and delete todoList 
function okdel(e) {
    const item = e.target;

    // check
    if (item.classList[0] === 'check-button') {
        const todolist = item.parentElement;
        todolist.classList.toggle('checklist');
    }

    // delete
    if (item.classList[0] === 'trash-button') {
        const todolist = item.parentElement;
        todolist.remove();
        count--;
        if(count==0){
            document.getElementById("taskcount").innerHTML="No Task";
        }else{
            document.getElementById("taskcount").innerHTML="Task: ".concat(count);
        }
    }
}

buttontdl.addEventListener('click', clickButton);
listtdl.addEventListener('click', okdel);
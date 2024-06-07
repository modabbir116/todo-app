let inputBox = document.querySelector(".inputBox");
let btn = document.querySelector(".btn");
let error = document.querySelector(".error");
let listItem = document.querySelector(".listItem");

let todoArr = [];

let arrIndex ;

btn.addEventListener("click", () =>{
    if(!inputBox.value){
        error.innerHTML = "please enter your item";
        inputBox.style.border = '2px solid red';
    }else{
        error.innerHTML = "";
        inputBox.style.border = '';
        if(btn.innerHTML === "Add"){
            todoArr.push(inputBox.value);
            todo()
            inputBox.value = ""
        }else{
            todoArr[arrIndex] = inputBox.value;
            todo()
            btn.innerHTML = "add"
            inputBox.value = ""
            error.innerHTML = "";
            inputBox.style.border = '';
        }
    }



})

const todo = () =>{
    listItem.innerHTML = ""
    todoArr.map((item) =>{
        listItem.innerHTML += `<li>${item} <button class="edit"><i class="fa-solid fa-pen-to-square"></i> </button> <button class="delete"><i class="fa-solid fa-trash-can"></i></button></li>`;
        // delete btn operation start
        let deleteBtn = document.querySelectorAll(".delete");
        let deleteArr = Array.from(deleteBtn);
        deleteArr.map((deleteItem, index) =>{
            deleteItem.addEventListener("click", function(){
                todoArr.splice(index, 1);
                todo()

            })
        })
        // delete btn operation start

        // Edit operation start 
        let editBtn = document.querySelectorAll(".edit");
        let editBtnArr = Array.from(editBtn);
        editBtnArr.map((editItem, index) =>{
            editItem.addEventListener("click", function(){
                btn.innerHTML = "update";
                inputBox.value = todoArr[index]
                arrIndex = index
            })
        })
        // Edit operation end
    })
}
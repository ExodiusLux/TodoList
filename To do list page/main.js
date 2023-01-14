window.addEventListener('load', () =>{
const form = document.querySelector("#Todo-list-entry"); //getting the form 
const input = document.querySelector("#Todo-input");   //getting the input
const list = document.querySelector("#list-items") //getting items of TodoList

form.addEventListener('submit', (e) => {
    e.preventDefault(); //prevent reloading page when submiting
    const item = input.value;

    if(!item){
        alert("Please enter an item");
        return;
    }
    //adding divider for whole list item (checkbox + text + delete button)
    const TodoListItems = document.createElement("div");
    TodoListItems.classList.add("item")

    //adding strikethrough checkbox and appending to outer div
    const TodoListCheckbox = document.createElement("input");
    TodoListCheckbox.classList.add("strikethrough-check");
    TodoListCheckbox.setAttribute("type", "checkbox");
    
    TodoListItems.appendChild(TodoListCheckbox); //adding the checkbox to the whole item divider

    //adding input to outer divider
    const TodoListInput = document.createElement("input");
    //setting aspects of the input
    TodoListInput.className = "item-text";
    TodoListInput.type = "text";

    TodoListInput.value = item;//input becomes this texts value

    TodoListInput.setAttribute("readonly", "readonly"); //set text value to readonly

    TodoListItems.appendChild(TodoListInput); //append as second child to main div

    //adding delete button
    const TodoListDelete = document.createElement("button");
    //setting aspects of delete
    TodoListDelete.classList.add("Delete"); //give it class id Delete
    TodoListDelete.innerHTML = "Delete";    //give it the name Delete

    TodoListItems.appendChild(TodoListDelete); //adding Delete button as 3rd child to item div

    list.appendChild(TodoListItems);

    input.value = ""; //reset value of text box for next value
    
    //checkbox event clicked
    TodoListCheckbox.addEventListener('click', ()=>{
        if(TodoListCheckbox.checked == false){
           TodoListInput.style.textDecoration = "none";
        }
        else {
            TodoListInput.style.textDecoration = "line-through";
        } 
    });
    //Delete event button click
    TodoListDelete.addEventListener('click', ()=>{
        list.removeChild(TodoListItems);
    });

    });
});
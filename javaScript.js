const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type = 'text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const todoTask = todoInput.value;
    const newLi = document.createElement("li");
    const newTodoInnerHTML = `<span class="text">${todoTask}</span>
            <div class="todo-buttons">
                <button class="todo-btn done">Done</button>
                <button class="todo-btn remove">Remove</button>
            </div>`;
    newLi.innerHTML = newTodoInnerHTML;
    todoList.append(newLi);
    todoInput.value = "";
});

todoList.addEventListener("click", (e)=>{
    // console.log(e.target);
    if(e.target.classList.contains("remove")){
        // console.log("you want to remove something ?");
        const removingTask = e.target.parentNode.parentNode;
        removingTask.remove();
    }
    if(e.target.classList.contains("done")){
        const liSpan = e.target.parentNode.previousElementSibling;
        // console.log(liSpan);
        liSpan.style.textDecoration = "line-through";
    }
});
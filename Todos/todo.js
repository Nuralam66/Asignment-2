function handleTodo(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res=> res.json())
    .then(data=>displayTodo(data))
}
function displayTodo(todos){
    let todoContainer = document.getElementById('todobox')
for (let todo of todos){
    // console.log(todo)
    let div = document.createElement('div')
    div.classList.add('todoStyle')
    div.innerHTML=`
    <h2>Id:${todo.id}</h2>
    <h3>Title:${todo.title}</h3>
    <p>  Completed:${todo.completed} </p>

    
    `;
    todoContainer.appendChild(div)
    console.log(todo)
}
}
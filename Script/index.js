document.querySelector("#form").addEventListener("submit",todo)
todoArr=JSON.parse(localStorage.getItem("todolist"))||[]
function todo(){
  event.preventDefault();
  
  todObj={
      name:document.querySelector("#name").value,
      qty:document.querySelector("#qty").value,
      priority:document.querySelector("#priority").value,
  }
  todoArr.push(todObj);
  localStorage.setItem("todolist",JSON.stringify(todoArr))

}


const ul = document.getElementById("todo-list");
const addBtn = document.getElementById("btn");
const input = document.getElementById("input");

addBtn.addEventListener("click", () => {
  if (input.value.trim().length == 0) {
    alert("Inputga nimadir yozing!");
    input.value = ""
  } else {
    const li = document.createElement("li");
    li.innerHTML = `  <div>
                        <i class="fa-regular fa-circle" id="circle" onclick="completedTodo(this)" ></i>
                        <i class="fa-regular fa-circle-check" id="check" onclick="nocompletedTodo(this)"></i>
                        <p>${input.value}</p>
                    </div>
                    <button class="delete" onclick="deleteTodo(this)"><i class="fa-solid fa-trash-can"></i></button>`;

    ul.appendChild(li);
    input.value = "";
  }


});


function completedTodo(shavkat) {
shavkat.parentNode.children[0].style="display:none"
shavkat.parentNode.children[1].style="display:block"
shavkat.parentNode.children[2].style="text-decoration:line-through; color:green "
}
function deleteTodo(knopka){
knopka.parentNode.parentNode.removeChild(knopka.parentNode)
  

}
function nocompletedTodo(johon) {
  johon.parentNode.children[0].style="display:block"
  johon.parentNode.children[1].style="display:none"
  johon.parentNode.children[2].style="text-decoration:none; color:black "
}




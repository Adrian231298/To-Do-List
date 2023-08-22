const input = document.querySelector("#input-task");
const exampleElement = document.querySelector("li");
const tasks = document.querySelector("#task-list");


function action() {
    let clone = exampleElement.cloneNode(true);
    let arr = clone.children;
    let text = input.value;
    for (let i = 0; i< arr.length; i++) {
        if (arr[i].className == "task") {
            arr[i].textContent = text;
        }
    }
    tasks.appendChild(clone);
    input.value = "";

}

function deleteTask(element) {
    let li = element.parentElement;
    li.remove();
}

const line = "line";
function isDone(element) {
    if (element.checked == true) {
        element.nextElementSibling.classList.add(line);
    } else {
       if (element.nextElementSibling.classList.contains(line))  {
           element.nextElementSibling.classList.remove(line);
       }
    }
}


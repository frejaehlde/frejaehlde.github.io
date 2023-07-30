const inputBox = document.getElementById("input__box");
const listContainer = document.getElementById("list__container");

function addTask() {
    if(inputBox.value === '') {
        alert('Write something!')
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
}
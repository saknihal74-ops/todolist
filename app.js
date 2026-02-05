const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if(inputBox.value.trim() === ""){
    alert("You must write something");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;

    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // ×
    li.appendChild(span);

    listContainer.appendChild(li);
    saveData(); // Save after adding
  }
  inputBox.value = "";
}

// Click events for checking or deleting
listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData(); // Save after checking/unchecking
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
}, false);

// Save tasks to localStorage
function saveData(){
  localStorage.setItem("data", listContainer.innerHTML)
}

// Load tasks from localStorage
function showTask(){
  const data = localStorage.getItem("data");
  if(data){
    listContainer.innerHTML = data;
  }
}

// Call showTask when page loads
showTask();

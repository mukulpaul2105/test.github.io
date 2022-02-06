
var todoListElement = document.querySelector(".todo_list");

var form = document.querySelector(".input_form");

var input_head = document.getElementById("head");
var input_desc = document.getElementById("desc");

form.addEventListener("submit", addTodoItem);

function addTodoItem(e) {
   e.preventDefault();

   if((input_head.value !== "") && (input_desc.value !== "")) {
     state1.head_memory.push(input_head.value); 
     printItemToScreen(input_head.value); 
      input_head.value = ""; 
      
      state2.desc_memory.push(input_desc.value); 
      printItemToScreen(input_desc.value); 
      input_desc.value = ""; 
   } else {
      alert("Your content is empty");
   }
   console.log(state1.head_memory);
   console.log(state2.desc_memory);
}

function printItemToScreen(todoItem) {
   
   var todoHTML = `<div class="todo_item"  >
   <span id="item-${todoItem}">${todoItem}</span>
   <button onclick="editItem('${todoItem}')">Edit</button>
   <i onclick="deleteItem('${todoItem}')" class="fa fa-trash-o style="font-size:20px;color:red""></i>
 </div>`;

   todoListElement.innerHTML += todoHTML;
}



var state1 = {
   head_memory : [],
};

var state2 = {
   desc_memory : [],
};

function deleteItem(item) {
   var index1 = state1.head_memory.indexOf(item);
   state1.head_memory.splice(index1, 1);
   
   var index2 = state2.desc_memory.indexOf(item);
   state2.desc_memory.splice(index2, 1);
   renderArray();
   console.log(state1.head_memory);
   console.log(state2.desc_memory);
}

function renderArray() {
   todoListElement.innerHTML = "";
   for(i in state1.head_memory) {
      printItemToScreen(state1.head_memory[i]);
   }
   for(i in state2.desc_memory) {
      printItemToScreen(state2.desc_memory[i]);
   }
}

function editItem(item){
   var editIndex = state1.head_memory.indexOf(item);

   input_head.value = state1.head_memory[editIndex];
   state1.head_memory.splice(editIndex, 1);
   
   
   var editIndex2 = state2.desc_memory.indexOf(item);

   input_desc.value = state2.desc_memory[editIndex2];
   state2.desc_memory.splice(editIndex2, 1);

   renderArray();
 }

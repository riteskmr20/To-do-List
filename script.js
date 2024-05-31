const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

let editTodo = null;


const  addTodo =  ()=>{
   const inputText = inputBox.value.trim();
   if(inputText.length <= 0){
    alert("Right Something!");
    return false;
   }
  

   if(addBtn.value ==="Edit"){
      editTodo.target.previousElementSibling.innerHTML = inputText;
      addBtn.value = "Add";
      inputBox.value = "";
   }
   else{
      // enter some text which have to be added in To-do
   const li = document.createElement("li");
   const p =document.createElement("p");
   p.innerHTML = inputText;
   li.appendChild(p);

   
   //create a edit button
   const editBtn = document.createElement("button");
   editBtn.innerHTML = "Edit";
   li.appendChild(editBtn);
   editBtn.classList.add("btn","editBtn");  //add class to the edit btn


   
   //creating delete button
   const deleteBtn = document.createElement("button");
   deleteBtn.innerHTML = "Remove";
   li.appendChild(deleteBtn);
   deleteBtn.classList.add("btn","deleteBtn");  //add class to the delete btn also


   todoList.appendChild(li);
   inputBox.value = "";
   }

  

}

//e will give our value here where we will click on to do
const updateTodo = (e)=>{
   // console.log(e.target);  
   if(e.target.innerHTML ==="Remove"){
      todoList.removeChild(e.target.parentElement);
   } 

   if(e.target.innerHTML ==="Edit"){
      inputBox.value = e.target.previousElementSibling.innerHTML;// click on edit then it reflect into input box

      inputBox.focus();
      addBtn.value="Edit";
      editTodo = e;
   }

} 








addBtn.addEventListener('click',addTodo);
todoList.addEventListener('click',updateTodo);



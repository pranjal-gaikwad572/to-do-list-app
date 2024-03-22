
// we have targetted the ids or class names with the help of methods of class: 

const taskInput = document.getElementById("taskInput");

const taskList = document.getElementById("taskList");

const mark = document.getElementsByClassName(".mark");

//receiving data from a web server, the data is always a string. 
// Parse the data with JSON.parse() , and the data becomes a JavaScript object.
//localStorage object to retrieve the data stored under key tasks
// and if there is no data stored under the keyt tasks inside localStorage then it will initialize an empty array.
//if any data stored iyt will get parse in an array.

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];




// we have created one function here :  
// taskInput.value = retrieves the current value entered in that input field.
// trim is used to remove white spaces.
// We have declared on efunction addTask() here:

// we are ytaking all the working in one variable i.e taskText 
//and we are also using const bcoz e cannot redeclare or redefine the value with the helpof const keyword:

function addTask()
{
    const taskText = taskInput.value.trim();


    // return exists the current function 
    // if variable is " " means empty then then code executes the return statement.
    // taskText is empty, the function will not proceed further and will exit early.

    if(taskText === "") 
    return ;

    // if(taskText === "")
    // {
    //     alert("you should write something bro");
    // }


    // we have created a constant named task = in which 
    // The value of the text property is assumed to be stored in the variable taskText.

    //   object  property variable
    const task = {text: taskText};

    // pushes the task object into an array named tasks.
    tasks.push(task);


    //localStorage = it allows web application to store the data = which will not expire even when the browser is closed.
// json.stringify = it is used to convert JS object or value to JSON string.
// set iotem = methods takes key and values in so taking that

// in localStriorage the data will get stored in  string form: for which we use jsonstringify
    // property  method   key    obj to string   array with objects
    localStorage.setItem("tasks",JSON.stringify(tasks));

    taskInput.value = "";

    saveData();

    displayTasks();




}

// one function foe deleting the tasks both from desktop and local storage:
function deleteTask(index)
{

// This line removes one element from the tasks array at the specified index. 
// It uses the splice() method which can add or remove elements from an array. 
// In this case, it removes one element starting from the index specified.
    tasks.splice(index,1);

    // removing that list from the local storage also when we click on that delete button:
    localStorage.setItem("tasks",JSON.stringify(tasks));

    // and again after performing such methods lastly it calls display method again:

    saveData();

// calls a function named displayTasks() to update the user interface (UI) with the modified task list.
    displayTasks();

}

function editTask(index)
{
    // Prompt the user to edit the task text
    const newTaskText = prompt("Edit the task: ", tasks[index].text);

    //Check if the user entered new text or canceled the prompt
    if(newTaskText !== null)
    {
        // Update the task text if the user entered new text:
      tasks[index].text = newTaskText;
    
// his line stores the updated tasks array in the browser.
    localStorage.setItem("tasks",JSON.stringify(tasks));

    saveData();

    displayTasks();
}
}
 
// 1:
// function markTask() 
// {
//     var element = document.getElementsByClassName(".mark-button");
//     element.classList.toggle("green");
//   }



// 2:
// To target the listtttttttt:

function markTask(index)
{
   index.target.style.backgroundColor = "green";

   saveData();
}

taskList.addEventListener( "click", markTask);


// // 3:
// function markTask() 
// {
//     document.getElementsByClassName(".mark-button").style.background="lime"; 
    
// }
// mark.markTask();




// function for displaying the task as a taskLists:
function displayTasks()
{

// innerHTML => we can use it to get the internal HTML content of any element as an HTML string.
//we can also set or change elements' innerHTML content.

    // ID    property 
    // taskList.innerHTML = "";

    taskList.innerHTML = localStorage.getItem("data");





//forEach() loop method takes one function as an argument.
// here it is taking array function which takes 2 arguments: objects with indexes
// array  loop-method

//Iterates through each task in the tasks array. For each task, it executes the provided callback function.
    tasks.forEach((task,index) =>
    {


        // we have created one direct element inside the html document:
        // reason is it is unknown for anyone not decided:

        // Creates a new list item element (<li>) for each task.
        const li = document.createElement("li");

        // used to get the data inside the li id in string format:
        li.innerHTML = `
        
        
        <span>${task.text}</span>

        <hr>

    <button class ="edit-button" onclick = "editTask(${index})">Edit</button>

    <button class ="delete-button" onclick = "deleteTask(${index})">Delete</button> 
    
    <button class ="mark-button" onclick = "markTask(${index})">Mark </button> `;


    // ;list which is printing as an output : Appends the newly created list item to the taskList element.
    // add a new child node to an existing parent node.
    // means we can add new inputs to already existing list.
        taskList.appendChild(li);

        // window.onload = tasks;
    });

     
}


function saveData()
{
    localStorage.setItem("data", taskList.innerHTML);
}

displayTasks();

// select the elements
const todolist = document.getElementById("todolist")
getElementById("todolist")
const input = document.getElementById("input")
const addBtn = document.getElementById("button")
getElementById("button")

// initialise an empty array
let arr =[];

// first function
addBtn.addEventListener("click",()=>{
    // add to the array
    arr.push(input.value);
    console.log(arr)
    input.value =""
    // call the showlist function
    ShowList()
})

// second function
function ShowList(){
//     everytime the function runs , we have to clear the container first
// 
todolist.innerHTML = "";
// HOF  - foreach  - append all the list items from the array
arr.forEach((el,i)=>{
    let listItem = document
})
}
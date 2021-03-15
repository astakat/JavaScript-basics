let btn = document.querySelector(".btn-alert");

btn.addEventListener("click", function(e){
    console.log(alert("button clicked"))
});

let backbtn = document.querySelector(".btn-color");
console.log(backbtn);
let backgroundAdd = document.querySelector("body")


const togglePageRed = () => {
    backgroundAdd.classList.toggle("red-background");
}

backbtn.addEventListener("click", togglePageRed);
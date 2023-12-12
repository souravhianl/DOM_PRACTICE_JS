//Selecting one element from the DOM

// const a = document.querySelector("h1")
// a.style.color="blue"
// a.innerHTML="DO NOT HELLO WORLD"
// a.addEventListener('click',()=>{
//     a.style.backgroundColor="red"
// })

// const a = document.querySelectorAll("h1");
// console.log(a)
// a.forEach((h)=>{
// h.style.color="purple"
// })

// let element = document.getElementById("myElement")
// console.log(element);

// //Toggle a class named active 
// element.classList.toggle('active')
document.addEventListener('DOMContentLoaded',(event)=>{
    function toggleClass(elementId,className){
        const element = document.getElementById(elementId)
        if(element){
            element.classList.toggle(className)
        }
        else{
            console.log(`Element with id : ${elementId} is not found`)
        }
    
    }
    toggleClass("srv","active")
})

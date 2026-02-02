const btn_add=document.querySelector(".add-button");
const form = document.querySelector(".form")
const overlay = document.querySelector(".overlay");
const cancel = document.querySelector(".huy");
const cancel1=document.querySelector(".can-button");
const save = document.querySelector(".save-button")
console.log(btn_add,form,overlay);
btn_add.addEventListener("click",()=>{
    form.classList.add("ghost");
    overlay.classList.add("active");
})
cancel.addEventListener("click",()=>{
    form.classList.remove("ghost");
    overlay.classList.remove("active");
})
cancel1.addEventListener("click",()=>{
    form.classList.remove("ghost");
    overlay.classList.remove("active");
})
overlay.addEventListener("click",()=>{
    form.classList.remove("ghost");
    overlay.classList.remove("active");
})
save.addEventListener("click",()=>{
    form.classList.remove("ghost");
    overlay.classList.remove("active");
})
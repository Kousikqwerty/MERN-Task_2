"use strict"
document.querySelector(".submit").addEventListener('click',function(){
    const name=document.querySelector(".name").value;
    const email=document.querySelector(".mail").value;
    confirm(`Have you entered\nName:${name} \n Email:${email}`);
});
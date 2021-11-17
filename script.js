let changeBg=document.querySelector('#btn');
let txt=document.querySelector('#txt')
function changeColor(){
    document.body.style.backgroundColor='rgb('+Math.round(Math.random()*255)+
    ','+Math.round(Math.random()*255)+
    ','+Math.round(Math.random()*255)+')'
    txt.textContent=document.body.style.backgroundColor
}

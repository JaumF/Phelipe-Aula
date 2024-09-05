//f2a12954671f8507cdb03aeb847faacf

const input =  document.querySelector("input");
const button = document.querySelector("button");
const img = document.querySelector("img");

const city = document.getElementById("cidade");
const degree = document.getElementById("graus");

const content = document.getElementsByClassName("content");

button.addEventListener("click", ()=>{
    if(!input.value) return;
    obterDadosClima();
} )
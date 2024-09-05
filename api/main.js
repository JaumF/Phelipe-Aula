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

async function obterDadosClima(){
    let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input.value)}&units=metric&appid=f2a12954671f8507cdb03aeb847faacf`;

    try{
        const resposta = await fetch(urlApi);
        const dados = await resposta.json();
        carregarInfoClima(dados);

    }catch(error){
        alert(error);
    }
}

function carregarInfoClima(dados){
    city.innerHTML = `${dados.name}, ${dados.sys.country}`;
    degree.innerHTML = `Temperatura: ${Math.floor(dados.main.temp)} °C`;
    img.src = `http://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`;
}
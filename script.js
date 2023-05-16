
const name = document.querySelector("#nome");
const heigth = document.querySelector("#altura");
const weight = document.querySelector("#peso");
const results = document.querySelector(".result");


function calculateIMC(){
    const names = name.value;
    const imc = Number(heigth.value) * weight.value
    const message =`${names} seu índice de massa corporal é ${imc}.`;
    results.innerHTML = message;
}


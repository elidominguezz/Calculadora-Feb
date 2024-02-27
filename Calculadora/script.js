let button = document.getElementById("calcular");

button.addEventListener("click",calcular);
function calcular() {
    const input = document.getElementById("peso");
    const peso = input.value;

if (peso <=30) {
console.log(hollidaySegar(peso));

} else {
    console.log(superficieCorporal(peso));
}
}
function hollidaySegar(peso){
    return "holliday";
}

function superficieCorporal(peso){
    return"superficie";
}

const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    if (DATO > 0){
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})
function calcFlujo(peso){
    let resto = peso;
    let flujo = 0;
    if (resto>20){
        let aux = resto-20;
        flujo += aux*1;
        resto -= aux;
    } 
    if (resto>10){
        let aux = resto-10;
        flujo += aux*2;
        resto -= aux;
    }
    flujo += resto*4;
    return flujo;
}
function calcFlujo(peso){
    let resto = peso;
    let flujo = 0;
    if (resto > 30) {
        let aux = resto - 30;
        flujo += ((aux * 4) + 7) / (aux + 90);
        resto -= aux;
    }
    flujo += resto * 1500;
    return flujo;
}
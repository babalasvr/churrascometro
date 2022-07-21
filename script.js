// Carne - 400gr por pessoa + de 6 horas - 650
// Cerveja - 1200ml por pessoa + de 6 horas - 2000ml
// Refrigerante/agua - 1000ml porr pessoas + de 6 horas - 1500ml
// Crianças valem por 0,5

function calcular(){

    let adulto = document.getElementById("adultos");
    let crianca = document.getElementById("criancas");
    let hora = document.getElementById("horas");
    let h3P = document.getElementById("primeiro");
    let h3S = document.getElementById("segundo");
    let h3T = document.getElementById("terceiro");

    c = Number(crianca.value) / 2;
    let pessoas = Number(adulto.value) + c;

    c1 = Number(crianca.value) / 2;
        let pessoas1 = Number(adulto.value) + c1;

    if(hora.value <= 6)
    {        
        h3P.innerHTML = ((400 * pessoas) / 1000) + "Kg de carne!"
    }
    else
    {
        h3P.innerHTML = ((650 * pessoas) / 1000) + "Kg de carne!"
    }

    if(hora.value <= 6)
    {
        h3S.innerHTML =  Math.ceil((1200 * Number(adulto.value)) / 375) + " Latas de 375ml Cerveja!"
    }
    else
    {
        h3S.innerHTML =  Math.ceil((2000 * Number(adulto.value)) / 375) + "Latas de 375ml Cerveja!"
    }

    if(hora.value <= 6)
    {        
        h3T.innerHTML = Math.ceil((1000 * pessoas1) / 1000) + " Garrafas de 2L de Refri/Agua!!"
    }
    else
    {
        h3T.innerHTML = Math.ceil((1500 * pessoas1) / 1000) + " Garrafas de 2L de Refri/Agua!!"
    }
}
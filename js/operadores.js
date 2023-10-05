/* Operadores aritméticos */

/* 
    + suma 
    - resta 
    * multiplicación
    / división
*/

function sumar() {
    let valor1 = document.getElementById('valor1').value; // se guardan como string
    let valor2 = document.getElementById('valor2').value;
    let resultado = Number(valor1) + Number(valor2);
    document.getElementById('res').innerHTML = resultado;
}

function restar() {
    let valor1 = document.getElementById('valor1').value; // se guardan como string
    let valor2 = document.getElementById('valor2').value;
    let resultado = Number(valor1) - Number(valor2);
    document.getElementById('res').innerHTML = resultado;
}

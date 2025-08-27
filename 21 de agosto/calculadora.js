function suma() {
    const elemento1 = document.getElementById("suma1")
    const elemento2 = document.getElementById("suma2")
    const resultado = document.getElementById("resultadoSuma")
    resultado.innerHTML=elemento1.value + elemento2.value;
}
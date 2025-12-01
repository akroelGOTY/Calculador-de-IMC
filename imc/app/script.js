function calcularImc() {
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let calcular = peso / (altura * altura);

    // transformar em número:
    altura = Number(altura);
    peso = Number(peso);

    document.getElementById("result").textContent = `${calcular.toFixed(2)} IMC`;
    console.log(calcular)
}
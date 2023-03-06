function inverter() {
    let palavra = document.getElementById("input").value;
    let invertida = "";
    for (let i = palavra.length - 1; i >= 0; i--) {
      invertida += palavra[i];
    }
    document.getElementById("output").innerHTML = invertida;
  }
var numero = "";
var numero2 = "";

console.log("Digite o primeiro número:");

process.stdin.on("data", function (data) {
  if (!numero) {
    numero = data.toString().trim();
    console.log("Digite o segundo número e clique em 'enter':");
  } else if (!numero2) {
    numero2 = data.toString().trim();
  } else {
    let maior = Math.max(numero, numero2);
    let menor = Math.min(numero, numero2);
    var mmc = maior;
    while (mmc % menor != 0) {
      mmc += maior;
    }
    while (numero2 !== 0) {
      let temp = numero2;
      numero2 = numero % numero2;
      numero = temp;
    }
    var mdc = numero;
    console.log("O MDC entre estes números é: " + mdc);
    console.log("O MMC é: " + mmc);
    process.exit();
  }
});

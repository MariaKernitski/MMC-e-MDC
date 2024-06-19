var numero = "";
var numero2 = "";

console.log("Digite o primeiro número:");

process.stdin.on("data", function (data) {
    if (!numero) {
        numero = data.toString().trim();
        console.log("Digite o segundo número e clique em 'enter':")
    }
    else if (!numero2) {
        numero2 = data.toString().trim();
    }
    else {
        let maior = Math.max(numero, numero2);
        let menor = Math.min(numero, numero2);
        var mmc = maior;
        while (mmc % menor != 0) {
            mmc += maior;
        }
        console.log(mmc);
        process.exit()
    }
})
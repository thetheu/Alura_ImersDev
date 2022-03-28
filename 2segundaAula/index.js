function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    //console.log(valorEmDolarNumerico);

    var valorEmReal = valorEmDolarNumerico * 5;
    var valorEmBitCoin = valorEmDolarNumerico * 41904;
    console.log(valorEmReal);
    console.log(valorEmBitCoin);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var elementoValorConvertidoEmBitCoin = document.getElementById("valorConvertidoBitCoin");
    var valorConvertido = "O resultado em real é R$" + valorEmReal;
    var valorConvertidoBitCoin = "O resultado em BitCoin é de " + valorEmBitCoin;
    elementoValorConvertido.innerHTML = valorConvertido;
    elementoValorConvertidoEmBitCoin.innerHTML = valorConvertidoBitCoin
};

console.log("Passei por aqui")
function Chutar() {
    var numeroSecreto = parseInt(Math.random() * 11);
    var elementoResultado = document.getElementById("resultado")
    var chute = parseInt(document.getElementById("valor").value)    // variavel que pega o valor e coloca como inteiro (parseInt()), pega o elemento pelo Id (getElementeById("valor")) e somente o valor dentro dele (.value)
    console.log(chute);     // Exibe o valor da variavel "chute"

        // Se o chute por igual ao númeroSecreto (If(chute == numeroSecreto)) exiba no console Acertou se não(else) Errouuu
    if(chute == numeroSecreto){
        elementoResultado.innerHTML = "Acertou";
    }else if (chute > 10 || chute < 0){
        elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
    } else {
        elementoResultado.innerHTML = "Errouuuu, o número era " + numeroSecreto;
    }

}
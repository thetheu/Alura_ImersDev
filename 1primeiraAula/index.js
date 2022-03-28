var nome = "matheus";

var notaDoPrimeiroBimestre = 9.5;
var notaDoSegundoBimestre = 7.6;
var notaDoTerceiroBimestre = 5.8;
var notaDoQuartoBimestre = 8.2;

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + 
notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4;
// Ou soma tudo e depois divide por 4:
// var notaSomada = notaDoPrimeiroBimestre + notaDoSegundoBimestre + 
// notaDoTerceiroBimestre + notaDoQuartoBimestre
// var notaFinal2 = notaFinal / 4; 

var notaFixada = notaFinal.toFixed(1)

console.log("Bem vindo " + nome);
console.log(notaFixada);
console.log((notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre 
+ notaDoQuartoBimestre) / 4);
//console.log(notaFinal2);

// Revisão
// Variáveis, strings, console.log, toFixed, operações matematicas,
// concatenação;
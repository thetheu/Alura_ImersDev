var listaFilmes = ["Yesterday ", "A chegada ", "Escola de Rock ", "Harry Potter "];
// Elementos dentro de uma lista começam a ser contados pelo número 0 em diante.

listaFilmes.push("Senhor dos Aneis");
listaFilmes.push("Harry Potter 2");
console.log(listaFilmes.length);

var filme1 = "Yesterday";
var filme2 = "A chegada";
var filme3 = "Escola de Rock";
var filme4 = "Harry Potter";



// indice ++. Soma variavel a 1.
// length  = tamanho da lista.
//  valor inicial.   condição.   expressão final
for(var indice = 0; indice < listaFilmes.length; indice ++) {
    document.write("<p> " + listaFilmes[indice] + "</p>")
    // document.write("<p> " + indice + "</p>")
};


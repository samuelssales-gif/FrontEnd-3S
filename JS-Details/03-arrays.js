let frutasVermelhas = new Array();
let frutasCitricas = ["Limao", "Abacaxi", "Maracuja", "Tanjerina", "Acerola"];

// frutaCitricas[0] = "Morango"
frutasVermelhas.push("Morango");
frutasVermelhas.push("Maça");
frutasVermelhas.push("Framboesa");
frutasVermelhas.push("Acerola");
frutasVermelhas.push("Tomate");

console.log(frutasVermelhas);
//console.log(frutasVermelhas);

//let frutasRemovida = frutasVermelhas.pop();//Remove o ultimo item ds lista 
//console.log(frutasRemovida);
consolr.log(frutasVermelhas);
let fuitRemovedFromFirstArray = frutasVermelhas.shift();
console.log(`${fuitRemovedFromFirstArray} foi removida da cesta!`);
console.log(frutasVermelhas);
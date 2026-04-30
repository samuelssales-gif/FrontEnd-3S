const numeros = [
    50,
    200,
    250,
    800,
    992,87,
    800,
    500,
    9875,
    99,
    134
];
const novosNumeros = numeros.map ((num) => {
 return num * 2;
})
novosNumeros.forEach((num) => {
console.log(num);
});

console.log(`Array Modificado:`);
console.log();

let textoResultado = "";
novosNumeros.forEach((num) => {
textoResultado += `${num} |`;
});

textoResultado = textoResultado.substring(0, textoResultado.length -2);
console.log(textoResultado);


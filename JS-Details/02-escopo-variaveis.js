const nome = `Samuel`;

let sobrenome = "Sousa";
{
    const nome = "Henrique";
    let sobrenome = "do";
    console.log(`nome completo: ${nome} ${sobrenome}`);
}

sobrenome = 600.97;
sobrenome = NaN;

console.log(`Nome completo: ${nome} ${isNaN(sobrenome)}`);

const nomes = ["Samuel", "Maria"];
for (var i = 0; i < nomes.length; i++) {
    console.log(`Nome ${i}: ${nomes[i]}`);
}

console.log(i);
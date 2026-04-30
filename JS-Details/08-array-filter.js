const numeros = [5, 10, 14];

const numeroEncontrado = numeros.filter((n)=>{
return n == 10;
});
  const nomes = [
    "Henrique", "Murilo", "Bruno", "Pedro", "James", "Fontes", 
    "Hugo", "Joao", "davi", "Marcos", "Gustavo",
  ];

  pessoasLegais = nomes.filter((nome) =>{
    const primeiraLetra = nome.substring(0,1);
    return primeiraLetra == "H" || primeiraLetra == "M";
  })
console.log(pessoasLegais);
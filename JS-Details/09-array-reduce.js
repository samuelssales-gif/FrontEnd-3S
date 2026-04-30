const produtos = [
  {
    descricao : "camisa da Lacoste",
    cor: "vermelha",
    preco: 159.99,
    perfil: "F",
    quantidade: 10,
    promocao : false
  },
  {
    descricao : "camisa da Lacoste",
    cor: "Azul",
    preco: 169.99,
    perfil: "M",
    quantidade: 7,
    promocao : true
  },
  {
    descricao : "camisa da Lacoste",
    cor: "Verde",
    preco: 199.99,
    perfil: "M",
    quantidade: 12,
    promocao : true
  },
  {
    descricao : "camisa da Lacoste",
    cor: "preta",
    preco: 179.99,
    perfil: "F",
    quantidade: 5,
    promocao : false
  },
];


 const totalPreco = estoque.reduce((total, produto) => {
  return total + produto.preco;
}, 0)
 const totalEstoque = estoque.reduce((total, produto) => {
  return total + produto.quantidade;
}, 0)

console.log(`voce tem um total de ${totalEstoque} produtos no estoque`);
console.log(`o valor total do seu estoque é R$${totalPreco.toFixed(2)}` );
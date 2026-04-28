function calcular()
{
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    

    console.log(nome);
    console.log(peso);

    // verificar se tem campo sem preencher
    // dar mensagem se etiver faltando sem preencher
  if(nome.trim().length == 0 || isNaN(altura) || isNaN(peso)){
        alert("Por favor, precisa todos os campos.");
        return false;
    }
    // alert("preencher todos os campos");
}
  
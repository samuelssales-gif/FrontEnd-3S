    // Esta função recebe os dados do formulário em um objeto
    // JavaScript e em seguida chama a api para cadastrar
    async function cadastrarContato(objetoContato) {
        console.log(objetoContato)
        const resposta = await fetch("http://localhost:3000/contatos", {
            method: "POST",
            body: JSON.stringify(objetoContato),
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            }
        });

        return await resposta;
    }

    async function buscarEndereco(cep) {
        // Quando o cep não vier preenchido, exibe um alerta e para a função
        if (cep.trim().length < 8) {
            alert("O CEP deve conter 8 dígitos!");
            return false;
        }

        //buscar o cep la na ViaCEP
        try {
            aguardandoCampos();

            let retorno = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            let dados = await retorno.json();

            //preencehndo os campos do formulário com os dados retornados
            document.getElementById("rua").value = dados.logradouro;
            document.getElementById("bairro").value = dados.bairro;
            document.getElementById("cidade").value = dados.localidade;
            document.getElementById("estado").value = dados.estado;

        } catch (error) {
            console.log(error);
        }
    }

    function aguardandoCampos() {
        document.getElementById("rua").value = "Aguardando...";
        document.getElementById("bairro").value = "Aguardando...";
        document.getElementById("cidade").value = "Aguardando...";
        document.getElementById("estado").value = "Aguardando...";
    }


    // ==========================================
    // FUNÇÃO PRINCIPAL
    // Essa função valida se os campos do formulário
    // foram preenchidos antes de enviar.
    // ==========================================
    function validarFormulario() {

        let quantidadesErros = 0;

        let nome = document.getElementById("nome").value;
        let sobrenome = document.getElementById("sobrenome").value;
        // let email = document.getElementById("email").value;
        // let pais = document.getElementById("telefone_pais").value;
        // let ddd = document.getElementById("telefone_ddd").value;
        // let telefone = document.getElementById("telefone_numero").value;
        // let cep = document.getElementById("cep").value;
        // let rua = document.getElementById("rua").value;
        // let numero = document.getElementById("numero").value;
        // let complemento = document.getElementById("complemento").value;
        // let bairro = document.getElementById("bairro").value;
        // let cidade = document.getElementById("cidade").value;
        // let estado = document.getElementById("estado").value;
        // let mensagem = document.getElementById("mensagem").value;

        if (nome.trim() === "") {
            formError("nome");
            quantidadesErros++;
        } else {
            reiniciaBordas("nome");
        }

        // SOBRENOME
        if (sobrenome.trim() === "") {
            formError("sobrenome");
            quantidadesErros++;
        } else {
            reiniciaBordas("sobrenome");
        }

        // EMAIL
        // if (email.trim() === "") {
        //     formError("email");
        //     quantidadesErros++;
        // } else {
        //     reiniciaBordas("email");
        // }

        // // PAÍS / DDI
        // if (telefone_DDI.trim() === "") {
        //     formError("telefone_pais");
        //     quantidadesErros++;
        // } else {
        //     reiniciaBordas("telefone_pais");
        // }

        // // DDD
        // if (telefone_ddd.trim() === "") {
        //     formError("telefone_ddd");
        //     quantidadesErros++;
        // } else {
        //     reiniciaBordas("telefone_ddd");
        // }

        // // TELEFONE
        // if (telefone.trim() === "") {
        //     formError("telefone_numero");
        //     quantidadesErros++;
        // } else {
        //     reiniciaBordas("telefone_numero");
        // }

        // // CEP
        // if (cep.trim() === "") {
        //     formError("cep");
        //     quantidadesErros++;
        // } else {
        //     reiniciaBordas("cep");
        // }

        // // RUA
        // if (rua.trim() === "") {
        //     formError("rua");
        //     quantidadesErros++;
        // } else {
        //     reiniciaBordas("rua");
        // }

        // // NÚMERO
        // if (numero.trim() === "") {
        //     formError("numero");
        //     quantidadesErros++;
        // } else {
        //     reiniciaBordas("numero");
        // }

        // // COMPLEMENTO
        // if (complemento.trim() === "") {
        //     formError("complemento");
        //     quantidadesErros++;
        // } else {
        //     reiniciaBordas("complemento");
        // }

        // // BAIRRO
        // if (bairro.trim() === "") {
        //     formError("bairro");
        //     quantidadesErros++;
        // } else {
        //     reiniciaBordas("bairro");
        // }

        // // CIDADE
        // if (cidade.trim() === "") {
        //     formError("cidade");
        //     quantidadesErros++;
        // } else {
        //     reiniciaBordas("cidade");
        // }

        // // ESTADO
        // if (estado.trim() === "") {
        //     formError("estado");
        //     quantidadesErros++;
        // } else {
        //     reiniciaBordas("estado");
        // }

        // // MENSAGEM
        // if (Anotacoes.trim() === "") {
        //     formError("mensagem");
        //     quantidadesErros++;
        // } else {
        //     reiniciaBordas("mensagem");
        // }

        if (quantidadesErros > 0) {
            alert("Existem campos obrigatórios que não foram preenchidos!");
        } else {
            let objetoContato = {
                nome: nome,
                sobrenome: sobrenome
            }

            let cadastro = cadastrarContato(objetoContato);

            reiniciaTodasAsBordas();
        }
    }


    // ==========================================
    // FUNÇÃO formError()
    // Serve para pintar o campo de vermelho
    // quando estiver errado ou vazio
    // ==========================================
    function formError(idCampo) {
        document.getElementById(idCampo).style.border = "2px solid red";
    }


    // ==========================================
    // FUNÇÃO reiniciaBordas()
    // Pinta de verde quando o campo está certo
    // ==========================================
    function reiniciaBordas(idCampo) {
        document.getElementById(idCampo).style.border = "2px solid green";
    }


    // ==========================================
    // FUNÇÃO reiniciaTodasAsBordas()
    // Limpa todas as bordas depois do envio
    // ==========================================
    function reiniciaTodasAsBordas() {

        // Seleciona todos os inputs e textarea
        let campos = document.querySelectorAll("input, textarea");

        campos.forEach(function (campo) {
            campo.style.border = "";
        });
    }
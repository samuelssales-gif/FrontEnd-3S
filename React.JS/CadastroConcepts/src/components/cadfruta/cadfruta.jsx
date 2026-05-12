import './cadfruta.css';
import React, { useState } from 'react'; // 1. Importação correta

function CadFruta() {
  // 2. Inicializar o estado do input como string vazia
  const [fruta, setFruta] = useState(''); 
  const [quantidade, setQuantidade] = useState(''); 
  const [arrFruta, setArrFruta] = useState([
    { id: 1, nome: 'Maçã', quantidade: 5 },
    { id: 2, nome: 'Banana', quantidade: 10 }
  ]);

function Cadastrar(e) {
  e.preventDefault();
  alert("Funação de cadastro acionada!");
  setArrFruta([...arrFruta, { 
              id: Date.now(),
              nome: fruta,
              quantidade: quantidade // Definindo uma quantidade padrão
              }]);
              return false; // Evitar recarregamento da página
}


function limparFormulario() {
  setFruta('');
  setQuantidade(0);
}

  return (
    <>
      <section className="sessao-cadastro">
        <h1>Cadastro de Frutas</h1>
        <form action="" method="post" onSubmit={Cadastrar}>
        <fieldset className="Cadastro">
          <label htmlFor="nomeFruta">Digite o nome da fruta:</label>
          <input
            type="text"
            id="nomeFruta"
            className="cadastro__entrada"
            placeholder="Nome da fruta"
            onChange={(e) => { setFruta(e.target.value) }}
          />
          <label htmlFor="nomeFruta">Digite a quantidade da fruta:</label>
          <input
            number="text"
            id="nomeFruta"
            className="cadastro__entrada"
            placeholder="Quantidade da fruta"
            onChange={(e) => { setQuantidade(e.target.value) }}
          />
          <button
            className="cadastro_btn-cadastrar"
            type="submit"
          >
            Cadastrar
          </button>
        </fieldset>

            </form>
        <ul className="lista-frutas">
          {arrFruta.map((f) => {
            return (
              <li key={f.id}>
                {f.nome} | Quantidade: {f.quantidade}
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default CadFruta;

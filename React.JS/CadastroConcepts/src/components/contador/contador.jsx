import { useState } from "react"
import "./contador.css"

const Contador = ()=> {
    const[valor, setValor] = useState(0)

    function incremento(){
        if (valor >= 10) {
            return alert("Valor não permitido (máximo 10)");
        }
        setValor(valor < 10 ? valor + 1 : 10)
    }

    function decremento(){
    // Se já estiver no limite mínimo (0), alerta e sai
    if (valor <= 0) {
        return alert("Valor não permitido (mínimo 0)");
    }
    
    // Diminui 1
    setValor(valor - 1);
}


    return(
        <>
        <p>contagem: {valor}</p>
        <button onClick={incremento}>++</button>

        <button onClick={decremento}>--</button>
        </>
    )
}

export default Contador;
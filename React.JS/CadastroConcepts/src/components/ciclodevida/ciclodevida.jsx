import { useEffect } from "react";
import "./ciclodevida.css"

export default function CicloDeVida() {
const [contador, setContador] = useState(0);
useEffect(() =>{
    console.log("Componente MONTADO");

    return () => {
        console.log("Componente DESMONTADO");
    }
}, [])

useEffect(() => {
    console.log("componente ATUALIZADO")
    console.log('vallr do contador ${contador}');

    
})
  return (
    <>
    <h1>Contador: {Contador}</h1>
    <button onClick={()=> {
        setContador(contador + 1);
    }}>contar</button>
    </>
  );
}
import { useContador } from "../hooks/useContador";

function Contador() {
  const { contador, incrementar, decrementar, resetear } = useContador(5);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador: {contador}</h2>
      <button onClick={incrementar}>+</button>
      <button onClick={decrementar}>-</button>
      <button onClick={resetear}>Reset</button>
    </div>
  );
}

export default Contador;

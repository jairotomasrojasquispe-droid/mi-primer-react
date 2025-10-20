import { useState } from "react";

function ListaDinamica() {
  const [elemento, setElemento] = useState(""); // lo que escribes en el input
  const [lista, setLista] = useState([]); // lista de elementos agregados

  const agregarElemento = (e) => {
    e.preventDefault();
    if (elemento.trim() === "") return; // evita agregar vacío
    setLista([...lista, elemento]); // agrega el nuevo elemento
    setElemento(""); // limpia el input
  };

  const eliminarElemento = (index) => {
    const nuevaLista = lista.filter((_, i) => i !== index);
    setLista(nuevaLista);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Lista dinámica</h2>

      <form onSubmit={agregarElemento}>
        <input
          type="text"
          value={elemento}
          onChange={(e) => setElemento(e.target.value)}
          placeholder="Escribe un elemento"
        />
        <button type="submit">Agregar</button>
      </form>

      <ul>
        {lista.map((item, index) => (
          <li key={index} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span>{item}</span>
            <button onClick={() => eliminarElemento(index)}>❌</button>
          </li>
        ))}
      </ul>

      {lista.length === 0 && <p>No hay elementos aún.</p>}
    </div>
  );
}

export default ListaDinamica;

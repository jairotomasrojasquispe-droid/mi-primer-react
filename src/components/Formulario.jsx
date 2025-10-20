import { useState } from 'react';

function Formulario() {
  const [nombre, setNombre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Hola " + nombre);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Tu nombre"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
export default Formulario;
/*import { useState, useEffect } from "react";

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar posts");
        return res.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return <p>Cargando posts...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1>Listado de Posts</h1>
      {posts.slice(0, 5).map((post) => (
        <div key={post.id}>
          <h2 style={{ marginBottom: 4 }}>{post.title}</h2>
          <p style={{ marginTop: 0 }}>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

function App() {
  const [contador, setContador] = useState(0);
  const [texto, setTexto] = useState("Hola, soy un texto");
  const [nombre, setNombre] = useState("");

  return (
    <div style={{ fontFamily: "sans-serif", padding: 16 }}>
      <h1>{texto}</h1>
      <button onClick={() => setTexto("Otro texto")}>Cambiar texto</button>

      <h2 style={{ marginTop: 16 }}>Contador: {contador}</h2>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => setContador((c) => c + 1)}>Incrementar</button>
        <button onClick={() => setContador((c) => c - 1)}>Descontar</button>
        <button onClick={() => setContador(0)}>Reiniciar</button>
      </div>

      <div style={{ marginTop: 16 }}>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ingresar nombre"
        />
        <p>Hola, {nombre || "anónimo"}.</p>
      </div>

      <hr />

      <PostsList />
    </div>
  );
}

export default App;*/

/*import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Formulario from "./components/Formulario";
import ListaDinamica from "./components/ListaDinamica";
import UsuarioContext from "./context/UsuarioContext";


function App() {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: 20 }}>
        <Link to=
        "/">Inicio</Link> 
        | <Link to="/about">Acerca</Link> 
        | <Link to="/formulario">formulario</Link> 
        | <Link to="/listaDinamica">Lista Dinamica</Link>
        | <Link to="/usuarioContext">UsuarioContext</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/listaDinamica" element={<ListaDinamica />} />
        <Route path="/usuarioContext" element={<UsuarioContext />} />
      </Routes>
    </BrowserRouter>
  );
}*/


// App.jsx
import { UsuarioProvider } from './context/UsuarioContext';
import Perfil from './components/Perfil';
import Contador from './components/Contador';

function App() {
  return (
    <UsuarioProvider>
      <h1>App con Context jairo</h1>
      <Perfil />
      <Contador />
    </UsuarioProvider>
  );
}

export default App;

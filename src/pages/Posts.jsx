import { useEffect, useMemo, useState } from "react";
import { getPosts, createPost, deletePost } from "../services/posts";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [q, setQ] = useState("");
  const [nuevoTitulo, setNuevoTitulo] = useState("");

  useEffect(() => {
    getPosts().then(setPosts).catch(console.error);
  }, []);

  const filtrados = useMemo(() => {
    const t = q.toLowerCase();
    return posts.filter(p =>
      p.title.toLowerCase().includes(t) || p.body.toLowerCase().includes(t)
    );
  }, [posts, q]);

  const agregar = async (e) => {
    e.preventDefault();
    if (!nuevoTitulo.trim()) return;
    try {
      const created = await createPost({ title: nuevoTitulo.trim(), body: "(creado vía API)" });
      setPosts(prev => [created, ...prev]);
      setNuevoTitulo("");
    } catch (err) {
      console.error(err);
      alert("No se pudo crear el post");
    }
  };

  const borrar = async (id) => {
    try {
      await deletePost(id);
      setPosts(prev => prev.filter(p => p.id !== id));
    } catch (err) {
      console.error(err);
      alert("No se pudo borrar");
    }
  };

  return (
    <div style={{ maxWidth: 720, margin: "0 auto" }}>
      <h1>Posts</h1>
      <form onSubmit={agregar} style={{ display: "flex", gap: 8 }}>
        <input
          value={nuevoTitulo}
          onChange={(e) => setNuevoTitulo(e.target.value)}
          placeholder="Nuevo título…"
        />
        <button type="submit">Agregar</button>
      </form>

      <input
        style={{ marginTop: 12, width: "100%" }}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Filtrar por título o contenido…"
      />

      <ul>
        {filtrados.slice(0, 20).map(p => (
          <li key={p.id} style={{ margin: "12px 0" }}>
            <strong>{p.title}</strong>
            <p style={{ margin: "4px 0" }}>{p.body}</p>
            <button onClick={() => borrar(p.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { useEffect, useMemo, useState } from "react";
import { getPosts } from "../services/posts";
export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [q, setQ] = useState("");
  const [nuevo, setNuevo] = useState("");
  useEffect(() => { getPosts().then(setPosts).catch(console.error); }, []);
  const filtrados = useMemo(() => {
    const t = q.toLowerCase();
    return posts.filter(p => p.title.toLowerCase().includes(t) || p.body.toLowerCase().includes(t));
  }, [posts, q]);
  const agregar = e => {
    e.preventDefault();
    if (!nuevo.trim()) return;
    setPosts(p => [{ id: crypto.randomUUID(), title: nuevo.trim(), body: "(local)" }, ...p]);
    setNuevo("");
  };
  return (
    <div style={{ maxWidth: 720, margin: "0 auto" }}>
      <h1>Posts</h1>
      <form onSubmit={agregar} style={{ display: "flex", gap: 8 }}>
        <input value={nuevo} onChange={e => setNuevo(e.target.value)} placeholder="Nuevo título…" />
        <button>Agregar</button>
      </form>
      <input style={{ marginTop: 12, width: "100%" }} value={q} onChange={e => setQ(e.target.value)} placeholder="Filtrar…" />
      <ul>{filtrados.slice(0, 20).map(p => (<li key={p.id} style={{ margin: "12px 0" }}>
        <strong>{p.title}</strong><p style={{ margin: "4px 0" }}>{p.body}</p></li>))}</ul>
    </div>
  );
}

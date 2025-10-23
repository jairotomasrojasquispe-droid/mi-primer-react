// src/services/posts.js
const API = "/api/posts";

export async function getPosts() {
  const r = await fetch(API);
  if (!r.ok) throw new Error("Error cargando posts");
  return r.json();
}

export async function createPost({ title, body = "" }) {
  const r = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, body })
  });
  if (!r.ok) throw new Error("Error creando post");
  return r.json();
}

export async function deletePost(id) {
  const r = await fetch(`${API}?id=${id}`, { method: "DELETE" });
  if (!r.ok) throw new Error("Error borrando post");
}

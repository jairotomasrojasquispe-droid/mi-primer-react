// /api/posts.js — Vercel Serverless Function
// Nota: esto NO es persistente (se reinicia). Luego conectaremos una DB.

let MEMORY = [
  { id: 1, title: "Hola Vercel API", body: "Primer post desde serverless" },
  { id: 2, title: "React + Vite", body: "Frontend listo en producción" }
];

export default async function handler(req, res) {
  const { method } = req;

  if (method === "GET") {
    return res.status(200).json(MEMORY);
  }

  if (method === "POST") {
    const { title = "", body = "" } = req.body || {};
    if (!title.trim()) return res.status(400).json({ error: "title requerido" });

    const item = { id: Date.now(), title: title.trim(), body: body || "" };
    MEMORY = [item, ...MEMORY];
    return res.status(201).json(item);
  }

  if (method === "DELETE") {
    const id = Number(req.query.id);
    if (!id) return res.status(400).json({ error: "id requerido" });
    MEMORY = MEMORY.filter(p => p.id !== id);
    return res.status(204).end();
  }

  res.setHe
  
  
  ader("Allow", ["GET", "POST", "DELETE"]);
  return res.status(405).end(`Method ${method} Not Allowed`);
}

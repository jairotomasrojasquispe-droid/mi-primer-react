export async function getPosts() {
  const r = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!r.ok) throw new Error("Error cargando posts");
  return r.json();
}

import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import Posts from "../pages/Posts";
import * as api from "../services/posts";

test("filtra y agrega", async () => {
  vi.spyOn(api, "getPosts").mockResolvedValue([
    { id: 1, title: "hello world", body: "body" },
    { id: 2, title: "react vite", body: "body" },
  ]);
  render(<Posts />);
  // espera a que aparezca uno de los posts
  expect(await screen.findByText(/hello world/i)).toBeInTheDocument();
  // filtra
  fireEvent.change(screen.getByPlaceholderText(/filtrar/i), { target: { value: "react" }});
  expect(screen.queryByText(/hello world/i)).toBeNull();
  expect(screen.getByText(/react vite/i)).toBeInTheDocument();
  // agrega
  fireEvent.change(screen.getByPlaceholderText(/nuevo título/i), { target: { value: "nuevo" }});
  fireEvent.click(screen.getByText(/agregar/i));
  expect(screen.getByText(/nuevo/i)).toBeInTheDocument();
});

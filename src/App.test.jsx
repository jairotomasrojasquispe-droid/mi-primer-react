import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";   // <— esta línea
import App from "./App";

test("muestra el título", () => {
  render(<App />);
  expect(screen.getByText("App con Context jairo")).toBeInTheDocument();
});

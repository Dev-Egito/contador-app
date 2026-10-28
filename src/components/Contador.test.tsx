import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contador from "./Contador";

describe("tela do contador", () => {
  it("começa em 0", () => {
    render(<Contador />);
    expect(screen.getByTestId("valor")).toHaveTextContent("0");
  });

  it("soma 1 ao clicar em +1", async () => {
    render(<Contador />);
    await userEvent.click(screen.getByRole("button", { name: "+1" }));
    expect(screen.getByTestId("valor")).toHaveTextContent("1");
  });

  it("soma 10 ao clicar em +10", async () => {
    render(<Contador />);
    await userEvent.click(screen.getByRole("button", { name: "+10" }));
    expect(screen.getByTestId("valor")).toHaveTextContent("10");
  });

  it("volta pra 0 ao clicar em Zerar", async () => {
    render(<Contador />);
    await userEvent.click(screen.getByRole("button", { name: "+1" }));
    await userEvent.click(screen.getByRole("button", { name: "Zerar" }));
    expect(screen.getByTestId("valor")).toHaveTextContent("0");
  });
});

import { describe, it, expect } from "vitest";
import { incrementar, decrementar, zerar } from "./contador";

describe("lógica do contador", () => {
  it("incrementa em 1 por padrão", () => {
    expect(incrementar(0)).toBe(1);
  });

  it("decrementa em 1 por padrão", () => {
    expect(decrementar(5)).toBe(4);
  });

  it("aceita um passo diferente", () => {
    expect(incrementar(0, 10)).toBe(10);
  });

  it("zera o valor", () => {
    expect(zerar()).toBe(0);
  });
});

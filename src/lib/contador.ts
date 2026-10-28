export function incrementar(valor: number, passo = 1): number {
  return valor + passo;
}

export function decrementar(valor: number, passo = 1): number {
  return Math.max(0, valor - passo);
}

export function zerar(): number {
  return 0;
}

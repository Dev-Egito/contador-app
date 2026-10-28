"use client";

import { useState } from "react";
import { incrementar, decrementar, zerar } from "@/lib/contador";
import styles from "./Contador.module.css";

export default function Contador() {
  const [valor, setValor] = useState(0);

  return (
    <div className={styles.card}>
      <h1 className={styles.titulo}>Contador</h1>
      <p className={styles.valor} data-testid="valor">
        {valor}
      </p>
      <div className={styles.botoes}>
        <button onClick={() => setValor(decrementar(valor))}>-1</button>
        <button onClick={() => setValor(zerar())}>Zerar</button>
        <button onClick={() => setValor(incrementar(valor))}>+1</button>
        <button onClick={() => setValor(incrementar(valor, 10))}>+10</button>
      </div>
    </div>
  );
}

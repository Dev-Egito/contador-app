# Contador App

Projeto simples em Next.js + TypeScript: um contador com botões +1, -1 e Zerar.
Criado para praticar pipeline (GitHub Actions) e Git Flow.

## Como rodar

- `npm install` instala as dependências
- `npm run dev` sobe o projeto em http://localhost:3000
- `npm test` roda os testes (Vitest)
- `npm run build` gera o build de produção

## Pipeline

A cada push ou pull request, o GitHub Actions roda `lint`, `test` e `build`.

## Estrutura

- `src/lib/contador.ts`: lógica do contador
- `src/components/Contador.tsx`: tela do contador

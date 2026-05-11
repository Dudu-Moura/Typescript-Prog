# Biblioteca Front

Frontend em React + TypeScript para a [Biblioteca API](../04-biblioteca-api).

## Stack

- **React 18** + **Vite** + **TypeScript**
- **TailwindCSS** (tema escuro com vibe de biblioteca — slate + amber)
- **React Router** (navegação com rotas protegidas)
- **Axios** com interceptor JWT
- **React Hook Form + Zod** para formulários
- **Framer Motion** para animações
- **Lucide Icons** + **React Hot Toast**

## Estrutura

```
src/
├── api/           # Cliente Axios + funções de cada recurso (auth, livros, emprestimos)
├── components/    # Componentes reutilizáveis (Button, Input, Modal, Navbar, BookCard...)
├── contexts/      # AuthContext (login, logout, sessão JWT)
├── hooks/         # Hooks customizados
├── lib/           # Utilitários (jwt decode, error helper)
├── pages/         # Páginas (Home, Login, Register, Books, BookDetail, Loans, Error)
├── types/         # Tipos TypeScript compartilhados
├── App.tsx        # Rotas
└── main.tsx       # Entry point
```

## Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Configurar variável de ambiente
cp .env.example .env
# .env -> VITE_API_URL=http://localhost:3000

# 3. Subir o backend (em outra pasta)
# cd ../04-biblioteca-api && npx tsx src/index.ts

# 4. Subir o front
npm run dev
# Abre em http://localhost:5173
```

## Rotas

| Rota                | Descrição                          | Auth |
|---------------------|------------------------------------|------|
| `/`                 | Home / landing                     | —    |
| `/login`            | Login                              | —    |
| `/registrar`        | Cadastro                           | —    |
| `/livros`           | Listagem do acervo (com filtros)   | —    |
| `/livros/:id`       | Detalhes + ações do livro          | —    |
| `/emprestimos`      | Meus empréstimos + devolução       | ✅   |
| `/erro/404`         | Página não encontrada              | —    |
| `/erro/401`         | Não autorizado                     | —    |
| `/erro/409`         | Conflito                           | —    |

## Funcionalidades

- Autenticação via JWT (armazenado em `localStorage`), com detecção automática de expiração
- Interceptor 401 → redireciona para `/login` e limpa sessão
- Listagem de livros com busca por título/autor/ISBN e filtro por disponibilidade
- Detalhes do livro com botão de empréstimo e remoção (apenas autenticado)
- Listagem de empréstimos com filtro (todos/ativos/devolvidos) e botão de devolver
- Toast notifications para erros e ações
- Páginas de erro customizadas (404, 401, 409, genérico)
- Animações com Framer Motion (cards, modais, transições)
- Totalmente responsivo

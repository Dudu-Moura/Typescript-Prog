# Biblioteca API

API REST para gerenciamento de biblioteca, construída com TypeScript, Express e Prisma. Permite cadastrar livros, registrar empréstimos, devoluções e autenticação de usuários via JWT.

## Stack

- **Runtime:** Node.js + TypeScript 5
- **Framework:** Express 5
- **ORM:** Prisma 6 + PostgreSQL
- **Autenticação:** JWT + bcryptjs
- **Validação:** Zod
- **Futuro:** NestJS + Docker

## Arquitetura

```
src/
├── config/         # Variáveis de ambiente
├── controller/     # Handlers HTTP (livro, emprestimo, auth)
├── dtos/           # Schemas de validação Zod
├── errors/         # Classes de erro customizadas (AppError, NotFoundError...)
├── middlewares/    # Error handler, validação, auth JWT (em progresso)
├── repository/     # Acesso ao banco via Prisma
├── routes/         # Definição das rotas
├── service/        # Regras de negócio (BibliotecaService, AuthService)
└── container.ts    # Injeção de dependências manual
```

O fluxo segue: **Route → Controller → Service → Repository → Prisma**

## Modelos do banco

```prisma
Livro       (id, titulo, autor, descricao, isbn, disponivel, ativo, deletadoEm)
Emprestimo  (id, livroId, nomeUsuario, dataEmprestimo, dataDevolucao, devolvido)
Usuario     (id, nome, email, senha)
```

- Livros usam **soft delete** (`ativo = false` + `deletadoEm`)
- Empréstimo altera `disponivel` do livro automaticamente

## Pré-requisitos

- Node.js 18+
- PostgreSQL

## Configuração

```bash
# 1. Instalar dependências
npm install

# 2. Configurar variáveis de ambiente
cp .env.example .env
# Preencha o .env com os valores abaixo

# 3. Rodar as migrations
npx prisma migrate deploy

# 4. Iniciar em desenvolvimento
npx tsx src/index.ts
```

### Variáveis de ambiente

```env
PORT=3000
NODE_ENV=development
DATABASE_URL=postgresql://usuario:senha@localhost:5432/biblioteca
DIRECT_URL=postgresql://usuario:senha@localhost:5432/biblioteca
JWT_SECRET=seu_secret_aqui
JWT_EXPIRES_IN=7d
```

## Endpoints

### Autenticação — `/auth`

| Método | Rota              | Descrição          | Auth |
|--------|-------------------|--------------------|------|
| POST   | `/auth/registrar` | Cadastrar usuário  | Não  |
| POST   | `/auth/login`     | Login + token JWT  | Não  |

**Registro:**
```json
{
  "nome": "Eduardo",
  "email": "eduardo@email.com",
  "senha": "minhasenha123"
}
```

**Login / Resposta:**
```json
// request
{ "email": "eduardo@email.com", "senha": "minhasenha123" }

// response
{ "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." }
```

---

### Livros — `/livros`

| Método | Rota          | Descrição                          | Auth          |
|--------|---------------|------------------------------------|---------------|
| GET    | `/livros`     | Listar livros (`?disponivel=true`) | Em progresso  |
| GET    | `/livros/:id` | Buscar livro por ID                | Em progresso  |
| POST   | `/livros`     | Cadastrar livro                    | Em progresso  |
| DELETE | `/livros/:id` | Remover livro (soft delete)        | Em progresso  |

**Cadastrar livro:**
```json
{
  "titulo": "Clean Code",
  "autor": "Robert C. Martin",
  "descricao": "Guia de boas práticas de código",
  "isbn": "9780132350884"
}
```

---

### Empréstimos — `/emprestimos`

| Método | Rota                          | Descrição                           | Auth         |
|--------|-------------------------------|-------------------------------------|--------------|
| GET    | `/emprestimos`                | Listar (`?devolvido=false`)         | Em progresso |
| GET    | `/emprestimos/:id`            | Buscar empréstimo por ID            | Em progresso |
| POST   | `/emprestimos`                | Realizar empréstimo                 | Em progresso |
| PATCH  | `/emprestimos/:id/devolver`   | Registrar devolução                 | Em progresso |

**Realizar empréstimo:**
```json
{
  "livroId": 1,
  "nomeUsuario": "Eduardo"
}
```

## Validações e regras de negócio

- Não é possível emprestar um livro indisponível ou deletado
- Devolução registra `dataDevolucao` e marca `devolvido = true`, liberando o livro
- Livros com empréstimo ativo não podem ser deletados
- ISBN deve ter entre 10 e 13 caracteres
- Senha armazenada com bcrypt (10 rounds)
- Email único por usuário

## Erros

A API retorna erros padronizados:

```json
{ "message": "Livro não encontrado" }        // 404
{ "message": "Livro não está disponível" }   // 409
{ "message": "Token inválido ou expirado" }  // 401
{ "message": "Campo inválido", "errors": [] } // 400 (validação Zod)
```

## Roadmap

- [x] CRUD de livros com soft delete
- [x] Registro e devolução de empréstimos
- [x] Autenticação com JWT e bcrypt
- [ ] Middleware JWT nas rotas protegidas
- [ ] Migração para NestJS
- [ ] Containerização com Docker

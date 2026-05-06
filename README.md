<div align="center">

# 📘 TypeScript Studies

> Repositório pessoal de estudos e exercícios práticos para dominar o ecossistema TypeScript/Node.js — do básico ao avançado.

[![Status](https://img.shields.io/badge/status-em%20progresso-yellow?style=flat-square)](.)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

</div>

---

## 🗺️ Roadmap

Acompanhe o progresso dos módulos de estudo:

| Status | Módulo | Descrição |
|:------:|--------|-----------|
| ✅ | **TypeScript** | Tipos, interfaces, generics, utilitários |
| ✅ | **Assincronismo** | Promises, async/await, tratamento de erro async |
| ✅ | **Import / Export** | Módulos ES e CommonJS |
| ✅ | **Node.js Básico** | Módulos nativos: `fs`, `http`, variáveis de ambiente |
| ✅ | **HTTP Básico** | Verbos, status codes, headers, REST |
| ✅ | **Express** | Roteamento, middlewares, controllers |
| ✅ | **Variáveis de Ambiente** | `.env`, boas práticas de segurança |
| ⬜ | **Banco de Dados** | SQL básico + Prisma ORM |
| ⬜ | **Validação de Dados** | Zod integrado com TypeScript |
| ⬜ | **Autenticação** | JWT, sessions, bcrypt |
| ⬜ | **Tratamento de Erros** | Middleware de erro, erros customizados |
| ⬜ | **Estrutura de Projeto** | Rotas, controllers, services, repositories |
| ⬜ | **NestJS** | Framework opinativo para Node.js |
| ⬜ | **Docker** | Containers, imagens, compose |
| ⬜ | **Testes com Jest** | Unit, integration e e2e tests |
| ⬜ | **Decorators** | Metadata, class decorators, experimentais |

---

## 📁 Estrutura do Repositório

```
typescript-studies/
│
├── 01-typescript/
│   ├── tipos-basicos/
│   ├── interfaces-e-types/
│   ├── generics/
│   └── utility-types/
│
├── 02-assincronismo/
│   ├── base/
│   └── data_request/
│
├── 03-http_express/
│   └── index.ts
│
├── 04-biblioteca-api/
    ├── lib/
    ├── prisma/
    └── src/
```

---

## 🚀 Como usar

### Pré-requisitos

- [Node.js](https://nodejs.org/) >= 18
- [npm](https://www.npmjs.com/) ou [pnpm](https://pnpm.io/)

### Rodando os exercícios

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/typescript-studies.git
cd typescript-studies

# Instale as dependências (na pasta do módulo desejado)
cd 01-typescript
npm install

# Execute um exercício
npx ts-node exercicio.ts

# Ou compile e rode
npx tsc && node dist/exercicio.js
```

---

## 🛠️ Tecnologias & Ferramentas

<div>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white" />
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" />
  <img src="https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white" />
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
  <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" />
</div>

---

## 📝 Notas & Convenções

- Cada pasta de módulo contém seus próprios exercícios e um `README.md` com anotações pessoais.
- Os exercícios são incrementais — cada módulo assume conhecimento dos anteriores.
- Código comentado em português para facilitar revisão futura.
- Nenhuma credencial, chave de API ou `.env` real é commitada neste repositório.

---

## 📈 Progresso

```
[███████░░░░░░░░░]  7 / 16 módulos concluídos
```


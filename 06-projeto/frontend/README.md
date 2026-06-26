# MedAgenda — Frontend

Frontend do sistema de consultas médicas, construído em **React + Vite + TypeScript**.
Consome a API NestJS que está em [`../backend`](../backend).

## Stack

- **React 18** + **TypeScript**
- **Vite** (dev server e build)
- **React Router** (rotas protegidas por papel/role)
- CSS próprio (design system em [`src/styles/global.css`](src/styles/global.css)) — sem dependências de UI externas

## Funcionalidades

- **Autenticação JWT** — login e cadastro (paciente ou médico). O token é guardado no
  `localStorage` e o papel (role) é lido do próprio JWT.
- **Controle de acesso por papel**:
  - `PATIENT` — vê e agenda suas consultas, cancela.
  - `MEDIC` — vê as consultas marcadas com ele, confirma/conclui/cancela.
  - `ADMIN` — vê todas as consultas e a lista de usuários.
- **Consultas** — listagem, agendamento (modal), e transições de status conforme as
  regras de negócio do backend (`PENDING → CONFIRMED → COMPLETED`, ou `CANCELLED`).
- **Médicos** — catálogo com busca por nome/especialidade.
- **Usuários** — listagem (somente ADMIN).
- **Perfil** — edição dos próprios dados.
- Toasts de feedback, estados de carregamento e telas vazias.

## Como rodar

1. Suba o backend (porta `3000`):

   ```bash
   cd ../backend
   npm install
   npm run start:dev
   ```

   > O backend já tem **CORS habilitado** para `http://localhost:5173`
   > (configurável via variável `FRONTEND_URL`).

2. Em outro terminal, rode o frontend:

   ```bash
   npm install
   cp .env.example .env   # ajuste VITE_API_URL se necessário
   npm run dev
   ```

3. Acesse http://localhost:5173

## Variáveis de ambiente

| Variável       | Padrão                  | Descrição              |
| -------------- | ----------------------- | ---------------------- |
| `VITE_API_URL` | `http://localhost:3000` | URL base da API NestJS |

## Scripts

- `npm run dev` — servidor de desenvolvimento
- `npm run build` — type-check + build de produção
- `npm run preview` — pré-visualiza o build
- `npm run lint` — checagem de tipos (`tsc --noEmit`)

## Estrutura

```
src/
  api/         # cliente HTTP + endpoints
  components/  # Layout, rotas protegidas, UI compartilhada
  context/     # AuthContext (JWT/roles), ToastContext
  lib/         # decode de JWT, formatação
  pages/       # Login, Register, Dashboard, Appointments, Medics, Users, Profile
  styles/      # design system (global.css)
```

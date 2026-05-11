import 'dotenv/config'
import { env } from "./config/env";
import express  from "express"
import cors from "cors"
import livroRouter  from "./routes/livro.routes"
import emprestimoRouter from "./routes/emprestimo.routes"
import { errorMiddleware } from './middlewares/error.middleware';
import authRouter from "./routes/auth.routes"

const app = express();

app.use(cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true
}));

app.use(express.json());

app.use('/livros', livroRouter);
app.use('/emprestimos', emprestimoRouter);
app.use('/auth', authRouter);

app.use(errorMiddleware)

app.listen(Number(env.PORT), () => {
    console.log(`Servidor rodando em http://localhost:${env.PORT}`)
})

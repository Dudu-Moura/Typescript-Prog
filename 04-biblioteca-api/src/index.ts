import 'dotenv/config'
import { env } from "./config/env";
import express  from "express"
import { Request, Response, NextFunction } from "express";
import livroRouter  from "./routes/livro.routes"
import emprestimoRouter from "./routes/emprestimo.routes"
import { errorMiddleware } from './middlewares/error.middleware';
import authRouter from "./routes/auth.routes"

const app = express();

app.use(express.json());

app.use('/livros', livroRouter);
app.use('/emprestimos', emprestimoRouter);
app.use('/auth', authRouter);

app.use(errorMiddleware)

app.listen(Number(env.PORT), () => {
    console.log(`Servidor rodando em http://localhost:${env.PORT}`)
})

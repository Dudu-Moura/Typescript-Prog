import 'dotenv/config'
import { env } from "./config/env";
import express  from "express"
import { Request, Response, NextFunction } from "express";
import livroRouter  from "../server/routes/livro.routes"
import emprestimoRouter from "../server/routes/emprestimo.routes"

const app = express();

app.use(express.json());

app.use('/livros', livroRouter);
app.use('/emprestimos', emprestimoRouter);


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.message);
    res.status(500).json({ erro: err.message });
});

app.listen(Number(env.PORT), () => {
    console.log(`Servidor rodando em http://localhost:${env.PORT}`)
})

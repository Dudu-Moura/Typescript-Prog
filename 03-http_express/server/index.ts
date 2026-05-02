import express  from "express"
import { Request, Response, NextFunction } from "express";
import livroRouter  from "../server/routes/livro.routes"
import emprestimoRouter from "../server/routes/emprestimo.routes"

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/livros', livroRouter);
app.use('/emprestimos', emprestimoRouter);


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.message);
    res.status(500).json({ erro: err.message });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})

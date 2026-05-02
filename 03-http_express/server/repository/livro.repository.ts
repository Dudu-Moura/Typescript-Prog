import { CreateLivro, Livro, UpdateLivro } from "../types/livro";

export class LivroRepository{
    private data: Livro[] = [];
    private nextId: number = 1;

    listAll(): Livro[]{
        return [...this.data]
    }

    findById(id: number): Livro | undefined{
        return this.data.find(livro => livro.id == id)
    }

    create(livro: CreateLivro): Livro{
        const newLivro: Livro = {
            id: this.nextId++,
            disponivel: true,
            criadoEm: new Date(),
            ...livro
        }
        this.data.push(newLivro);
        return newLivro;
    }

    update(id:number, livro: Partial<Livro>): Livro | undefined{
        const index = this.data.findIndex(l => l.id == id);
        if(index < 0) return undefined;
        this.data[index] = { ...this.data[index], ...livro }
        return this.data[index];
    }

    delete(id: number): boolean{
        const before = this.data.length;
        this.data = this.data.filter(l => l.id != id);
        return before > this.data.length
    }

}
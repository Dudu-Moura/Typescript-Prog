import { Emprestimo, CreateEmprestimo } from "../types/emprestimo";

export class EmprestimoRepository {
    private data: Emprestimo[] = []
    private nextId: number = 1;

    listAll(): Emprestimo[]{
        return [...this.data]
    }

    findById(id: number): Emprestimo | undefined{
        return this.data.find(emprestimo => emprestimo.id == id);
    }

    create(emprestimo: CreateEmprestimo): Emprestimo{
        const newEmprestimo: Emprestimo = {
            id: this.nextId++,
            dataEmprestimo: new Date(),
            devolvido: false,
            ...emprestimo
        }
        this.data.push(newEmprestimo);
        return newEmprestimo;
    }

    update(id: number, emprestimo: Partial<Emprestimo>): Emprestimo | undefined{
        const index = this.data.findIndex(e => e.id == id);
        if(index < 0) return undefined;
        this.data[index] = {  ...this.data[index], ...emprestimo };
        return this.data[index];
    }
}
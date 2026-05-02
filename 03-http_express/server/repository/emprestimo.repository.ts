import { networkInterfaces } from "node:os";
import { Emprestimo, CreateEmprestimo } from "../types/emprestimo";

export class EmprestimoRepository {
    data: Emprestimo[] = []
    nextId: number = 0;

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
        this.data[index] = { ...emprestimo, ...this.data[index]};
        return this.data[index];
    }


}
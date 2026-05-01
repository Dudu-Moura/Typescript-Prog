import { Emprestimo, EmprestimoCreate } from "../types/emprestimo";

export class EmprestimoRepository {
    data: Emprestimo[] = []
    nextId: number = 0;

    listAll(): Emprestimo[]{
        return [...this.data]
    }

    findById(id: number): Emprestimo | undefined{
        return this.data.find(emprestimo => emprestimo.id == id);
    }

    create(emprestimo: EmprestimoCreate): Emprestimo{
        const data: Emprestimo = {
            id: this.nextId++,
            dataEmprestimo: new Date(),
            devolvido: false,
            ...emprestimo
        }
        this.data.push(data);
        return data;
    }

    update(id: number, emprestimo: Partial<Emprestimo>): Emprestimo | undefined{
        const index = this.data.findIndex(e => e.id == id);
        if(index < 0) return undefined;
        this.data[index] = { ...emprestimo, ...this.data[index]};
        return this.data[index];
    }

    delete(id: number): boolean{
        const before = this.data.length;
        this.data = this.data.filter(e => e.id != id);
        return before > this.data.length
    }

    
}
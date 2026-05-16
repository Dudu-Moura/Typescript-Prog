export function MedirTempo(target: any, key: string, descriptor: PropertyDescriptor){
    const funcaoOriginal = descriptor.value;

    descriptor.value = async function (...args: any[]) {
        const inicio = Date.now();
        const resultado = await funcaoOriginal.apply(this, args);
        const fim = Date.now();
        console.log(`${key} rodou em ${fim - inicio}ms`);
        return resultado;
    }
}
// @ts-nocheck
// Criando uma Promise manualmente
const promessa = new Promise<number>((resolve, reject) => {
    const sucesso = true;

    if (sucesso) {
        resolve(42); // fulfills com valor 42
    } else {
        reject(new Error("algo deu errado")); // rejects com erro
    }
});

interface Usuario{
    id: number,
    nome: string,
    email: string
    dataMatricula: Date
}

function buscarUsuario(id: number): Promise<Usuario> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, nome: "Ana", email: "ana@email.com", dataMatricula: new Date() });
        }, 1000);
    });
}

// async marca a função como assíncrona
// toda função async retorna Promise automaticamente
async function processarUsuario(id: number): Promise<void> {
    const usuario = await buscarUsuario(id); // espera aqui, sem travar
    console.log(usuario.nome);              // Ana
}


// Retorna uma Promise que resolve com Usuario
async function buscarUsuario2(id: number): Promise<Usuario> { }

// Retorna uma Promise que resolve com array de Aula
async function listarAulas(): Promise<Aula[]> { }

// Retorna uma Promise que resolve com ResultadoOperacao
async function inscrever(aulaId: number, alunoId: number): Promise<resultadoOperacao<Inscricao>> { }
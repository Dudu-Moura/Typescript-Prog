
export{}

function esperar(tempo: number): Promise<string>{
    return new Promise(resolve => {
        setTimeout(
            () => resolve(`${tempo} segundo passou`), tempo
        )}
    )
}

interface Produto{
    id: number,
    nome: string,
    preco: number
}

function buscarProduto(id: number): Promise<Produto | null>{
    return new Promise((resolve, reject) => {
        if(id < 1){
            reject(new Error(' Id não encontrado '));
        }
        else if(id == 1){
            resolve ({
                id: 1,
                nome: 'Produto1',
                preco: 2
            })
        }
        else{
            resolve(null)
        }
    })
}

interface Usuario{
    id: number,
    nome: string
}

type tema = 'escuro' | 'claro'

interface Config{
    tema: tema,
    versao: number,
    descricao: string
}

function buscarUsuario(id: number): Promise<Usuario>{
    return new Promise(resolve => {
        setTimeout(() => resolve({
            id: 0,
            nome: 'Teste1'
        }), 800);
    })
}

function buscarPermissoes(usuarioId: number): Promise<string[]>{
    return new Promise(resolve => {
        setTimeout(() => resolve(["ler", "escrever"]), 500);
    })
}

function buscarConfiguracoes(): Promise<Config>{
    return new Promise(resolve => {
        setTimeout(() => resolve({
            tema: 'escuro',
            versao: 2.00,
            descricao: 'Teste1'
        }), 300)
    })
}

async function carregarPerfilParelelo(){
    const inicio = Date.now();
    const resultado = await Promise.all([
        buscarUsuario(1),
        buscarPermissoes(1),
        buscarConfiguracoes()
    ])
    console.log(`Feito em ${Date.now() - inicio}ms`)
    return resultado;
}


async function carregarPerfilSequencial(){
    const inicio = Date.now();
    const resultado1 = await buscarUsuario(1);
    const resultado2 = await buscarPermissoes(1);
    const resultado3 = await buscarConfiguracoes();
    console.log(`Feito em ${Date.now() - inicio}ms`)
    return { resultado1, resultado2, resultado3 };
}

async function realizarTeste(funcao: Promise<unknown>): Promise<void>{
    try{
        const resultado = await funcao;
        console.log(resultado);
    }
    catch(ex){
        console.error("Algo deu errado " + ex);
    }
}

async function main(){
    realizarTeste(carregarPerfilParelelo());
    realizarTeste(carregarPerfilSequencial());
}

main();
// ╔══════════════════════════════════════════════════════════════════╗
// ║         📚 LISTA DE EXERCÍCIOS - OOP + Interfaces (TypeScript)  ║
// ║                                                                   ║
// ║  Tópicos: Interfaces, Classes, Generics, Access Modifiers,       ║
// ║           Abstract Classes, Type Guards, Design Patterns          ║
// ╚══════════════════════════════════════════════════════════════════╝

// ┌──────────────────────────────────────────────────────────────────┐
// │                    📊 PROGRESSO                                  │
// │                                                                  │
// │  Exercício 01: [ ] Interface básica + implementação              │
// │  Exercício 02: [ ] Access modifiers (public, private, protected) │
// │  Exercício 03: [ ] Interface com optional e readonly             │
// │  Exercício 04: [ ] Abstract class + template method              │
// │  Exercício 05: [ ] Generics com classes e interfaces             │
// │  Exercício 06: [ ] Interface como contrato de Design Pattern     │
// │  Exercício 07: [ ] Type Guards com instanceof e typeof           │
// │  Exercício 08: [ ] Extending Interfaces + Intersection Types     │
// │  Exercício 09: [ ] Utility Types (Partial, Required, Readonly)   │
// │  Exercício 10: [ ] Mini Projeto - Sistema de Pagamentos          │
// │                                                                  │
// │  Completos: 0/10                                                 │
// │  Última atualização:                                             │
// └──────────────────────────────────────────────────────────────────┘

// ============================================================
// EXERCÍCIO 01 - Interface básica + implementação
// Dificuldade: ⭐⭐
// ============================================================
// Em TypeScript, interfaces definem a FORMA de um objeto.
// Uma classe que implementa uma interface garante que terá
// todos os métodos e propriedades exigidos.
//
// Crie uma interface Veiculo com:
//   - marca: string
//   - modelo: string
//   - ano: number
//   - ligar(): string
//   - desligar(): string
//   - buzinar(): string
//
// Crie duas classes que IMPLEMENTAM a interface:
//   - Carro → implements Veiculo
//       ligar()   → "Carro [marca] ligado com chave 🔑"
//       desligar()→ "Carro desligado"
//       buzinar() → "Biiiip!"
//
//   - Moto → implements Veiculo
//       ligar()   → "Moto [marca] ligada com partida elétrica ⚡"
//       desligar()→ "Moto desligada"
//       buzinar() → "Fom Fom!"
//
// Crie uma função testarVeiculo(v: Veiculo): void
// que chama ligar(), buzinar() e desligar() em sequência e imprime os resultados.

// Seu código aqui:
interface Veiculo {
    marca: string;
    modelo: string;
    ano: number;
    ligar(): string;
    desligar(): string;
    buzinar(): string;
}

class Carro implements Veiculo {
    marca: string;
    modelo: string;
    ano: number;
    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    ligar(): string {
        return 'Carro ' + this.marca + ' ligado com chave 🔑';
    }
    desligar(): string {
        return 'Carro desligado';
    }
    buzinar(): string {
        return 'Biiiip!';
    }
}

class Moto implements Veiculo {
    marca: string;
    modelo: string;
    ano: number;
    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    ligar(): string {
        return 'Moto ' + this.marca + ' ligada com partida elétrica ⚡';
    }
    desligar(): string {
        return 'Moto desligada';
    }
    buzinar(): string {
        return 'Fom Fom!';
    }
}

function testarVeiculo(v: Veiculo): void {
    console.log(v.ligar());
    console.log(v.buzinar());
    console.log(v.desligar());
}
// Teste:
const carro = new Carro('Ford', 'Ka', 2022);
const moto = new Moto('Honda', 'CB 500', 2023);
//
testarVeiculo(carro);
// // "Carro Ford ligado com chave 🔑"
// // "Biiiip!"
// // "Carro desligado"
//
testarVeiculo(moto);
// // "Moto Honda ligada com partida elétrica ⚡"
// // "Fom Fom!"
// // "Moto desligada"

// ============================================================
// EXERCÍCIO 02 - Access modifiers: public, private, protected
// Dificuldade: ⭐⭐
// ============================================================
// TypeScript tem modificadores de acesso que JS não tem nativamente.
//   - public    → acessível de qualquer lugar (padrão)
//   - private   → acessível apenas dentro da PRÓPRIA classe
//   - protected → acessível na classe e nas SUBCLASSES
//   - readonly  → pode ser lido, mas não alterado após a criação
//
// Crie uma classe ContaBancaria com:
//   - readonly id: number (auto-incremento, nunca muda)
//   - public titular: string
//   - protected saldo: number (subclasses precisam acessar)
//   - private senha: string (ninguém fora acessa diretamente)
//   - private static proximoId = 1
//
//   - constructor(titular: string, saldoInicial: number, senha: string)
//   - depositar(valor: number): void
//   - sacar(valor: number, senha: string): boolean → true se saque ok
//   - getSaldo(senha: string): number | null
//   - toString(): string → "Conta #[id] - [titular]: R$ [saldo]"
//
// Crie uma classe ContaCorrente que HERDA de ContaBancaria:
//   - private limiteCredito: number
//   - constructor(titular, saldoInicial, senha, limiteCredito)
//   - Override de sacar() → pode sacar até saldo + limiteCredito
//   - getSaldoTotal(): number → saldo + limiteCredito

// Seu código aqui:
class ContaBancaria {
    readonly id: number;
    public titular: string;
    protected saldo: number;
    private senha: string;
    private static proximoId = 1;

    constructor(titular: string, saldoInicial: number, senha: string) {
        this.id = ContaBancaria.proximoId++;
        this.titular = titular;
        this.saldo = saldoInicial;
        this.senha = senha;
    }

    depositar(valor: number, senha: string): void {
        if (senha !== this.senha) {
            console.error('Senha incorreta');
            return;
        }
        this.saldo += valor;
    }

    sacar(valor: number, senha: string): void {
        if (senha !== this.senha) {
            console.error('Senha incorreta');
            return;
        }
        if (valor > this.saldo) {
            console.error('Não há saldo disponível');
            return;
        }
        this.saldo -= valor;
    }

    getSaldo(senha: string): number | null {
        if (senha !== this.senha) {
            console.error('Senha incorreta');
            return null;
        }
        return this.saldo;
    }

    toString(): string {
        return (
            'Conta #' + this.id + ' - ' + this.titular + ': R$ ' + this.saldo
        );
    }
}

class ContaCorrente extends ContaBancaria {
    private limiteCredito: number;
    constructor(
        titular: string,
        saldoInicial: number,
        senha: string,
        limiteCredito: number,
    ) {
        super(titular, saldoInicial, senha);
        this.limiteCredito = limiteCredito;
    }

    sacar(valor: number, senha: string): void {
        if (valor > this.saldo + this.limiteCredito) {
            console.error('Não há saldo e seu limite não cobre o valor!');
            return;
        }
        this.saldo -= valor;
    }

    getSaldoTotal(): number {
        return this.saldo + this.limiteCredito;
    }
}
// Teste:
const poupanca = new ContaBancaria('Eduardo', 1000, 'abc123');
console.log(poupanca.toString()); // "Conta #1 - Eduardo: R$ 1000"
poupanca.depositar(500, 'abc123');
console.log(poupanca.getSaldo('abc123')); // 1500
poupanca.sacar(200, 'abc123');
console.log(poupanca.getSaldo('abc123')); // 1300
console.log(poupanca.sacar(9999, 'abc123')); // false (sem saldo)
//
const corrente = new ContaCorrente('Ana', 500, 'pass', 1000);
corrente.sacar(1400, 'pass'); // true (usa limite)
console.log(corrente.getSaldoTotal()); // 100 (limite restante)

// ============================================================
// EXERCÍCIO 03 - Interface com optional (?) e readonly
// Dificuldade: ⭐⭐
// ============================================================
// Nem toda propriedade de uma interface é obrigatória.
// Use ? para tornar uma propriedade opcional.
// Use readonly para impedir reatribuição após criação.
//
// Crie a interface ConfiguracaoApp:
//   - readonly appId: string       (obrigatório, nunca muda)
//   - nome: string                 (obrigatório)
//   - versao: string               (obrigatório)
//   - debug?: boolean              (opcional, padrão false)
//   - maxConexoes?: number         (opcional, padrão 10)
//   - autor?: string               (opcional)
//   - temas?: ("claro" | "escuro" | "sistema")[]  (opcional)
//
// Crie uma classe Aplicativo que:
//   - Recebe uma ConfiguracaoApp no constructor
//   - Preenche os campos opcionais com seus padrões se não fornecidos
//   - método info(): string → mostra um resumo da configuração
//   - método alterarNome(novoNome: string): void → altera o nome
//   - método alterarId(): void → deve dar ERRO de compilação (readonly)

// Seu código aqui:
interface ConfiguracaoApp {
    readonly appId: string;
    nome: string;
    versao: string;
    debug?: boolean;
    maxConexoes?: number;
    autor?: string;
    temas?: ('claro' | 'escuro' | 'sistema')[];
}

class Aplicativo implements ConfiguracaoApp {
    readonly appId: string;
    nome: string;
    versao: string;
    debug?: boolean;
    maxConexoes?: number;
    autor?: string;
    temas?: ('claro' | 'escuro' | 'sistema')[];

    constructor(
        appId: string,
        nome: string,
        versao: string,
        debug: boolean,
        maxConexoes: number,
        autor: string,
        temas: ('claro' | 'escuro' | 'sistema')[],
    ) {
        ((this.appId = appId), (this.nome = nome));
        this.versao = versao;
        this.debug = debug ?? false;
        this.maxConexoes = maxConexoes ?? 10;
        this.autor = autor;
        this.temas = temas;
    }

    info(): string{

    }
}
// Teste:
const app = new Aplicativo({
    appId: 'app-001',
    nome: 'MeuApp',
    versao: '1.0.0',
    autor: 'Eduardo',
});
//
console.log(app.info());
// "MeuApp v1.0.0 (ID: app-001) | Autor: Eduardo | Debug: false | Max Conexões: 10"
//
app.alterarNome('SuperApp');
console.log(app.info()); // "SuperApp v1.0.0 ..."
//
app.config.appId = 'outro-id'; // ❌ Erro: appId é readonly!

// ============================================================
// EXERCÍCIO 04 - Abstract class + Template Method Pattern
// Dificuldade: ⭐⭐⭐
// ============================================================
// Classes abstratas definem uma ESTRUTURA base com métodos
// que subclasses DEVEM implementar (abstract methods).
// O Template Method define o algoritmo, as subclasses preenchem os passos.
//
// Crie uma abstract class Relatorio:
//   - abstract gerarCabecalho(): string
//   - abstract gerarCorpo(): string
//   - abstract gerarRodape(): string
//   - método concreto gerar(): string
//       → chama os 3 métodos acima e une com "\n\n"
//   - protected titulo: string (subclasses acessam)
//
// Crie 2 subclasses concretas:
//   - RelatorioVendas(mes: string, vendas: number[])
//       cabecalho: "=== RELATÓRIO DE VENDAS - [MES] ==="
//       corpo: lista cada venda com total e média
//       rodape: "Total geral: R$ XX | Gerado em: [data]"
//
//   - RelatorioUsuarios(usuarios: { nome: string; ativo: boolean }[])
//       cabecalho: "=== RELATÓRIO DE USUÁRIOS ==="
//       corpo: lista ativos vs inativos
//       rodape: "Total: X usuários | Ativos: Y | Inativos: Z"

// Seu código aqui:

// Teste:
// const relVendas = new RelatorioVendas("Fevereiro", [1500, 2300, 890, 4200]);
// console.log(relVendas.gerar());
// // === RELATÓRIO DE VENDAS - FEVEREIRO ===
// //
// // Venda 1: R$ 1.500,00
// // Venda 2: R$ 2.300,00
// // Venda 3: R$ 890,00
// // Venda 4: R$ 4.200,00
// // Média: R$ 2.222,50
// //
// // Total geral: R$ 8.890,00 | Gerado em: [data atual]
//
// const usuarios = [
//     { nome: "Eduardo", ativo: true },
//     { nome: "Ana", ativo: false },
//     { nome: "Lucas", ativo: true },
// ];
// const relUsers = new RelatorioUsuarios(usuarios);
// console.log(relUsers.gerar());

// ============================================================
// EXERCÍCIO 05 - Generics com classes e interfaces
// Dificuldade: ⭐⭐⭐
// ============================================================
// Generics permitem criar código reutilizável tipado.
// Em vez de usar 'any', você usa um tipo parametrizado <T>.
//
// Crie uma interface Repositorio<T> com:
//   - salvar(item: T): void
//   - buscarPorId(id: number): T | undefined
//   - listarTodos(): T[]
//   - deletar(id: number): boolean
//   - atualizar(id: number, dados: Partial<T>): T | undefined
//
// Crie uma classe RepositorioMemoria<T extends { id: number }>
// que IMPLEMENTA Repositorio<T> usando um Map internamente.
//
// Crie duas interfaces de domínio:
//   - Usuario { id: number; nome: string; email: string }
//   - Tarefa  { id: number; titulo: string; concluida: boolean; responsavel: string }
//
// Crie repositórios tipados para cada um e use-os.

// Seu código aqui:

// Teste:
// const usuarioRepo = new RepositorioMemoria<Usuario>();
// usuarioRepo.salvar({ id: 1, nome: "Eduardo", email: "edu@email.com" });
// usuarioRepo.salvar({ id: 2, nome: "Ana",     email: "ana@email.com" });
//
// console.log(usuarioRepo.buscarPorId(1)); // { id: 1, nome: "Eduardo", ... }
// console.log(usuarioRepo.listarTodos());  // [{ id: 1 ... }, { id: 2 ... }]
//
// usuarioRepo.atualizar(1, { nome: "Eduardo Moura" });
// console.log(usuarioRepo.buscarPorId(1)?.nome); // "Eduardo Moura"
//
// const tarefaRepo = new RepositorioMemoria<Tarefa>();
// tarefaRepo.salvar({ id: 1, titulo: "Estudar TypeScript", concluida: false, responsavel: "Eduardo" });
// console.log(tarefaRepo.listarTodos()); // [{ id: 1, titulo: "Estudar TypeScript" ... }]

// ============================================================
// EXERCÍCIO 06 - Interfaces como contrato de Design Pattern (Strategy)
// Dificuldade: ⭐⭐⭐⭐
// ============================================================
// O Strategy Pattern usa interfaces para trocar algoritmos em tempo de execução.
// Isso elimina IFs gigantes e torna o código extensível.
//
// Crie a interface EstrategiaDesconto:
//   - calcular(preco: number, quantidade: number): number (retorna o preço final)
//   - descricao: string
//
// Implemente 4 estratégias:
//   - SemDesconto: retorna o preço * quantidade sem alteração
//   - DescontoPercentual(percentual: number): desconto em % sobre o total
//   - DescontoProgressivo: 0% para < 5 unid., 10% para 5-9, 20% para 10+
//   - PrecoFixo(precoUnitario: number): ignora o preço original, usa precoFixo
//
// Crie uma classe CarrinhoTS:
//   - adicionarItem(nome: string, preco: number, qtd: number, estrategia: EstrategiaDesconto): void
//   - calcularTotal(): number
//   - exibirResumo(): void → mostra cada item com sua estratégia e desconto

// Seu código aqui:

// Teste:
// const carrinho = new CarrinhoTS();
//
// carrinho.adicionarItem("Livro TS", 80, 3, new SemDesconto());
// // Subtotal: R$ 240,00 (sem desconto)
//
// carrinho.adicionarItem("Curso Online", 200, 1, new DescontoPercentual(15));
// // Subtotal: R$ 170,00 (15% de desconto)
//
// carrinho.adicionarItem("Mouse", 100, 12, new DescontoProgressivo());
// // Subtotal: R$ 960,00 (20% por 12 unidades)
//
// carrinho.adicionarItem("Teclado", 0, 2, new PrecoFixo(150));
// // Subtotal: R$ 300,00 (preço fixo R$150 por unidade)
//
// carrinho.exibirResumo();
// console.log("Total:", carrinho.calcularTotal()); // R$ 1.670,00

// ============================================================
// EXERCÍCIO 07 - Type Guards com instanceof e typeof
// Dificuldade: ⭐⭐⭐
// ============================================================
// Type Guards permitem verificar o tipo de uma variável em tempo de execução,
// e o TypeScript refina o tipo dentro do bloco condicional automaticamente.
//
// Crie as seguintes classes/interfaces:
//   - interface Forma { area(): number; nome: string }
//   - class Circulo(raio: number) implements Forma
//   - class Retangulo(largura: number, altura: number) implements Forma
//   - class Triangulo(base: number, altura: number) implements Forma
//
// Crie um type guard customizado:
//   function isCirculo(forma: Forma): forma is Circulo
//
// Crie uma função analisarForma(forma: Forma | number | string): void
// que usa typeof e instanceof para:
//   - Se for string → imprime "Texto recebido: [string]"
//   - Se for number → imprime "Número: [n] ao quadrado é [n²]"
//   - Se for Circulo → imprime "⭕ Círculo de raio [raio], área [area]"
//   - Se for Retangulo → imprime "▭ Retângulo [l]x[h], área [area]"
//   - Se for Triangulo → imprime "▲ Triângulo base [b] altura [h], área [area]"

// Seu código aqui:

// Teste:
// analisarForma(new Circulo(5));
// // "⭕ Círculo de raio 5, área 78.54"
//
// analisarForma(new Retangulo(4, 6));
// // "▭ Retângulo 4x6, área 24"
//
// analisarForma(new Triangulo(3, 8));
// // "▲ Triângulo base 3 altura 8, área 12"
//
// analisarForma(42);
// // "Número: 42 ao quadrado é 1764"
//
// analisarForma("TypeScript");
// // "Texto recebido: TypeScript"

// ============================================================
// EXERCÍCIO 08 - Extending Interfaces + Intersection Types
// Dificuldade: ⭐⭐⭐
// ============================================================
// Interfaces podem ESTENDER outras interfaces, e TypeScript
// tem Intersection Types (&) que combinam múltiplos tipos.
//
// Crie a seguinte hierarquia de interfaces:
//
//   Entidade      → { id: number; criadoEm: Date; atualizadoEm: Date }
//   Nomeavel      → { nome: string; sobrenome: string; nomeCompleto(): string }
//   Contactavel   → { email: string; telefone?: string }
//   Autenticavel  → { senha: string; ultimoLogin?: Date; autenticar(senha: string): boolean }
//
//   Funcionario   extends Entidade, Nomeavel, Contactavel
//     → { cargo: string; salario: number; departamento: string }
//
//   Admin         extends Funcionario, Autenticavel
//     → { nivelAcesso: 1 | 2 | 3; permissoes: string[] }
//
// Use Intersection Type para criar:
//   type PerfilPublico = Nomeavel & Contactavel & { bio?: string }
//
// Implemente as classes Funcionario e Admin seguindo as interfaces.
// Crie uma função exibirPerfil(perfil: PerfilPublico): void

// Seu código aqui:

// Teste:
// const admin = new Admin({
//     id: 1,
//     nome: "Eduardo", sobrenome: "Moura",
//     email: "edu@empresa.com", telefone: "11999999999",
//     cargo: "Dev Sênior", salario: 12000, departamento: "TI",
//     senha: "segura123",
//     nivelAcesso: 3,
//     permissoes: ["criar_usuario", "deletar_usuario", "ver_logs"]
// });
//
// console.log(admin.nomeCompleto());       // "Eduardo Moura"
// console.log(admin.autenticar("errada")); // false
// console.log(admin.autenticar("segura123")); // true
//
// const perfil: PerfilPublico = {
//     nome: "Eduardo", sobrenome: "Moura",
//     email: "edu@publico.com",
//     nomeCompleto() { return `${this.nome} ${this.sobrenome}`; },
//     bio: "Desenvolvedor apaixonado por TypeScript"
// };
// exibirPerfil(perfil);

// ============================================================
// EXERCÍCIO 09 - Utility Types: Partial, Required, Readonly, Pick, Omit
// Dificuldade: ⭐⭐⭐
// ============================================================
// TypeScript tem Utility Types que transformam tipos existentes.
//   Partial<T>  → torna todas as propriedades opcionais
//   Required<T> → torna todas as propriedades obrigatórias
//   Readonly<T> → torna todas as propriedades readonly
//   Pick<T, K>  → seleciona apenas algumas propriedades
//   Omit<T, K>  → remove algumas propriedades
//
// Dada a interface:
//   interface Produto {
//     id: number;
//     nome: string;
//     preco: number;
//     estoque: number;
//     categoria: string;
//     descricao?: string;
//     imagemUrl?: string;
//   }
//
// Crie os seguintes tipos usando Utility Types:
//   - ProdutoResumido   → Pick com id, nome, preco
//   - ProdutoSemId      → Omit sem id
//   - ProdutoAtualizacao → Partial do ProdutoSemId (para atualizar campos)
//   - ProdutoImutavel   → Readonly<Produto>
//
// Crie uma classe ProdutoService com:
//   - private produtos: Readonly<Produto>[]
//   - criar(dados: ProdutoSemId): Produto    (gera o id automaticamente)
//   - atualizar(id: number, dados: ProdutoAtualizacao): Produto | undefined
//   - listar(): ProdutoResumido[]
//   - buscar(id: number): ProdutoImutavel | undefined

// Seu código aqui:

// Teste:
// const service = new ProdutoService();
//
// const mouse = service.criar({
//     nome: "Mouse Gamer", preco: 250, estoque: 30,
//     categoria: "Periféricos", descricao: "RGB com 7 botões"
// });
// console.log(mouse); // { id: 1, nome: "Mouse Gamer", ... }
//
// service.atualizar(1, { preco: 220, estoque: 28 });
// console.log(service.buscar(1)?.preco); // 220
//
// console.log(service.listar());
// // [{ id: 1, nome: "Mouse Gamer", preco: 220 }]
//
// // const imutavel = service.buscar(1)!;
// // imutavel.preco = 999; // ❌ Erro: propriedade é readonly

// ============================================================
// EXERCÍCIO 10 - Mini Projeto: Sistema de Pagamentos
// Dificuldade: ⭐⭐⭐⭐⭐
// ============================================================
// Use TUDO que aprendeu para criar um sistema completo de pagamentos!
//
// Interfaces necessárias:
//
// 1. MetodoPagamento (interface)
//    - tipo: string
//    - processar(valor: number): Promise<ResultadoPagamento>
//    - validar(): boolean
//
// 2. ResultadoPagamento (interface)
//    - sucesso: boolean
//    - transacaoId: string
//    - valor: number
//    - mensagem: string
//    - timestamp: Date
//
// 3. Implementações de MetodoPagamento:
//    - CartaoCredito(numero: string, validade: string, cvv: string, parcelas: number)
//        validar() → número com 16 dígitos, validade futura, cvv com 3 dígitos
//        processar() → simula delay de 1s, 90% chance de sucesso
//
//    - Pix(chave: string)
//        validar() → chave não pode ser vazia
//        processar() → simula delay de 200ms, sempre sucesso
//
//    - Boleto(cpf: string)
//        validar() → CPF com 11 dígitos
//        processar() → retorna sucesso mas com mensagem "Aguardando compensação"
//
// 4. Classe Pedido<T extends MetodoPagamento>:
//    - id: number (auto-incremento)
//    - itens: Array<{ nome: string; preco: number; quantidade: number }>
//    - metodoPagamento: T
//    - status: "rascunho" | "processando" | "pago" | "recusado" | "cancelado"
//    - adicionarItem(nome: string, preco: number, quantidade: number): void
//    - get total(): number
//    - async pagar(): Promise<ResultadoPagamento>
//       → valida o método, muda status para "processando",
//          processa, muda status para "pago" ou "recusado"
//    - cancelar(): void → só pode cancelar se status for "rascunho" ou "pago"
//    - resumo(): string

// Seu código aqui:

// Teste:
// async function rodarTestes() {
//     // Teste com Pix
//     const pedidoPix = new Pedido(new Pix("edu@email.com"));
//     pedidoPix.adicionarItem("Notebook", 3500, 1);
//     pedidoPix.adicionarItem("Mouse", 80, 2);
//
//     console.log(pedidoPix.total);     // 3660
//     const resultadoPix = await pedidoPix.pagar();
//     console.log(resultadoPix.sucesso); // true
//     console.log(pedidoPix.status);     // "pago"
//     console.log(pedidoPix.resumo());
//
//     // Teste com Cartão
//     const pedidoCartao = new Pedido(
//         new CartaoCredito("1234567812345678", "12/27", "123", 3)
//     );
//     pedidoCartao.adicionarItem("Curso TypeScript", 200, 1);
//     const resultadoCartao = await pedidoCartao.pagar();
//     console.log(`Cartão: ${resultadoCartao.sucesso ? "✅ Aprovado" : "❌ Recusado"}`);
//
//     // Teste com Boleto
//     const pedidoBoleto = new Pedido(new Boleto("12345678901"));
//     pedidoBoleto.adicionarItem("Livro TS", 90, 1);
//     const resultadoBoleto = await pedidoBoleto.pagar();
//     console.log(resultadoBoleto.mensagem); // "Aguardando compensação"
// }
//
// rodarTestes();

// ╔══════════════════════════════════════════════════════════════════════╗
// ║      📝 PROVA SIMULADA - APROVEITAMENTO DE COMPETÊNCIA              ║
// ║      Disciplina: Programação Orientada a Objetos (POO)              ║
// ║      Curso: Ciência da Computação                                   ║
// ║      Linguagem: TypeScript                                          ║
// ╚══════════════════════════════════════════════════════════════════════╝

// ┌──────────────────────────────────────────────────────────────────────┐
// │                        📊 PROGRESSO                                 │
// │                                                                      │
// │  Questão 01: [ ] Objetos e Classes (Conceitos Básicos)              │
// │  Questão 02: [ ] Construtores                                        │
// │  Questão 03: [ ] Getters e Setters                                  │
// │  Questão 04: [ ] Encapsulamento                                      │
// │  Questão 05: [ ] Composição                                          │
// │  Questão 06: [ ] Herança                                             │
// │  Questão 07: [ ] Polimorfismo                                        │
// │  Questão 08: [ ] Overload e Override (Sobrecarga e Sobreposição)    │
// │  Questão 09: [ ] Abstração (Abstract Classes)                       │
// │  Questão 10: [ ] Clean Code e SOLID                                 │
// │  Questão EXTRA: [ ] Design Pattern (Observer + Strategy)           │
// │                                                                      │
// │  Completas: 0/11                                                     │
// │  Tempo estimado: ~3 horas                                            │
// │  Última atualização:                                                 │
// └──────────────────────────────────────────────────────────────────────┘

// ════════════════════════════════════════════════════════════════════════
// QUESTÃO 01 — Objetos e Classes
// Pontuação: 0,5 pt
// Dificuldade: ⭐
// ════════════════════════════════════════════════════════════════════════
// Um objeto é uma instância de uma classe. A classe define a estrutura
// (atributos) e comportamento (métodos) que os objetos terão.
//
// Crie uma classe Livro com os atributos:
//   - titulo: string
//   - autor: string
//   - anoPublicacao: number
//   - numeroPaginas: number
//
// Adicione os métodos:
//   - exibirInfo(): string → retorna uma string formatada com todas
//     as informações do livro, ex:
//     "📖 Dom Casmurro | Autor: Machado de Assis | Ano: 1899 | Páginas: 256"
//
//   - isAntigo(): boolean → retorna true se o livro foi publicado
//     há mais de 50 anos (use o ano atual)
//
//   - calcularTempoLeitura(paginasPorHora: number): string → retorna
//     quantas horas e minutos levaria para ler o livro, ex:
//     "Tempo estimado de leitura: 4h 15min"
//
// Instancie 3 objetos Livro diferentes e chame todos os métodos.

// Seu código aqui:
class Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
    numeroPaginas: number;
    constructor(
        titulo: string,
        autor: string,
        anoPublicacao: number,
        numeroPaginas: number,
    ) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.numeroPaginas = numeroPaginas;
    }

    exibirInfo(): string {
        return `📖${this.titulo} | Autor: ${this.autor} | Ano: ${this.anoPublicacao} | Páginas: ${this.numeroPaginas}`;
    }

    isAntigo(): boolean {
        const ano: number = new Date().getFullYear();
        return ano - this.anoPublicacao > 50 ? true : false;
    }

    calcularTempoLeitura(paginasporHora: number): string {
        const tempoHora = Math.floor(this.numeroPaginas / paginasporHora);
        const tempoMinuto = tempoHora * 10;
        return `Tempo estimado de leitura: ${tempoHora}h:${tempoMinuto}`;
    }
}
const domCasmurro = new Livro('Dom Casmurro', 'Machado de Assis', 1899, 256);
console.log(domCasmurro.exibirInfo());
console.log(domCasmurro.isAntigo());
console.log(domCasmurro.calcularTempoLeitura(30));
// Saída esperada (exemplo):
// "📖 Dom Casmurro | Autor: Machado de Assis | Ano: 1899 | Páginas: 256"
// true (é antigo)
// "Tempo estimado de leitura: 2h 08min"

// ════════════════════════════════════════════════════════════════════════
// QUESTÃO 02 — Construtores
// Pontuação: 0,5 pt
// Dificuldade: ⭐⭐
// ════════════════════════════════════════════════════════════════════════
// O constructor é um método especial chamado automaticamente ao criar
// um objeto com `new`. Em TypeScript, você pode usar a sintaxe de
// "parameter properties" para declarar e inicializar atributos
// diretamente nos parâmetros do constructor.
//
// Crie uma classe Produto com:
//   - id: number (auto-gerado, começa em 1 e incrementa a cada novo produto)
//   - nome: string
//   - preco: number
//   - estoque: number (padrão: 0 se não informado)
//   - criadoEm: Date (preenchido automaticamente no constructor)
//   - private static contadorId: number = 0
//
// Use a sintaxe de parameter properties do TypeScript:
//   constructor(public nome: string, public preco: number, public estoque = 0)
//
// Adicione os métodos:
//   - toString(): string → "Produto #[id]: [nome] - R$ [preco] ([estoque] em estoque)"
//   - adicionarEstoque(quantidade: number): void
//   - removerEstoque(quantidade: number): boolean → true se removeu, false se não tinha estoque
//   - static resetarContador(): void → reseta o contador (útil pra testes)
//
// Instancie 4 produtos e demonstre que os IDs são auto-incrementados.
// Demonstre também o uso de estoque padrão (sem passar o 3º argumento).

// Seu código aqui:
class Produto {
    private static contadorId: number = 0;
    readonly criadoEm: Date = new Date();
    readonly id: number = Produto.contadorId;
    constructor(
        private nome: string,
        private preco: number,
        private estoque: number = 0,
    ) {
        Produto.contadorId++;
        this.id = Produto.contadorId;
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }
}

// Saída esperada (exemplo):
// "Produto #1: Mouse Gamer - R$ 150 (10 em estoque)"
// "Produto #2: Teclado Mecânico - R$ 300 (5 em estoque)"
// "Produto #3: Monitor - R$ 1200 (0 em estoque)"  ← estoque padrão = 0
// true (removeu 3 do estoque do mouse)
// false (tentou remover 20 de um estoque de 7)

// ════════════════════════════════════════════════════════════════════════
// QUESTÃO 03 — Getters e Setters
// Pontuação: 1 pt
// Dificuldade: ⭐⭐
// ════════════════════════════════════════════════════════════════════════
// Getters (get) e Setters (set) são assessores que permitem controlar
// como os atributos privados são lidos e modificados, adicionando
// lógica de validação sem expor os atributos diretamente.
//
// Crie uma classe Temperatura com:
//   - private _celsius: number
//
// Getters:
//   - get celsius(): number → retorna _celsius
//   - get fahrenheit(): number → converte e retorna (_celsius * 9/5) + 32
//   - get kelvin(): number → converte e retorna _celsius + 273.15
//   - get descricao(): string:
//       < 0     → "❄️ Congelante"
//       0-15    → "🥶 Muito frio"
//       16-24   → "😊 Agradável"
//       25-35   → "☀️ Quente"
//       > 35    → "🔥 Muito quente"
//
// Setters:
//   - set celsius(valor: number): valida que valor >= -273.15 (zero absoluto)
//     Se inválido, lança Error: "Temperatura abaixo do zero absoluto!"
//   - set fahrenheit(valor: number): converte para Celsius e atribui
//   - set kelvin(valor: number): converte para Celsius (k - 273.15) e atribui
//
// Crie também a classe TermometroClinical com:
//   - private _temperatura: Temperatura
//   - constructor(temperaturaInicial: number)
//   - get estaUsandoFebre(): boolean → true se celsius > 37.5
//   - registrar(celsius: number): void
//   - relatorio(): string → imprime a temperatura em todas as unidades

// Seu código aqui:

// Saída esperada (exemplo):
// t.celsius  → 100
// t.fahrenheit → 212
// t.kelvin   → 373.15
// t.descricao → "🔥 Muito quente"
// t.fahrenheit = 32 → t.celsius = 0, t.descricao = "🥶 Muito frio"
// t.celsius = -300  → ❌ lança erro

// ════════════════════════════════════════════════════════════════════════
// QUESTÃO 04 — Encapsulamento
// Pontuação: 1 pt
// Dificuldade: ⭐⭐⭐
// ════════════════════════════════════════════════════════════════════════
// Encapsulamento é o princípio de esconder os detalhes internos de uma
// classe, expondo apenas o que é necessário através de uma interface pública.
// Em TypeScript: public, private, protected, readonly.
//
// Crie uma classe CarteiraDigital com:
//   - readonly id: string (gerado com `crypto.randomUUID()` ou um
//     id fake como `"wallet-" + Date.now()`)
//   - private _saldo: number
//   - private _historicoTransacoes: Transacao[]
//   - private _senha: string
//   - public titular: string
//   - private static readonly LIMITE_SAQUE = 5000
//
//   (Crie a interface Transacao: { tipo: "deposito"|"saque"|"transferencia",
//    valor: number, data: Date, descricao: string })
//
// Métodos públicos:
//   - depositar(valor: number): void
//       → valor deve ser > 0, senão lança Error
//   - sacar(valor: number, senha: string): void
//       → valida senha, valor > 0, saldo suficiente, valor <= LIMITE_SAQUE
//   - transferir(destino: CarteiraDigital, valor: number, senha: string): void
//       → chama sacar e depositar internamente
//   - get saldo(): number → retorna o saldo atual (sem expor _saldo)
//   - extrato(senha: string): Transacao[] → retorna histórico SE senha correta
//   - alterarSenha(senhaAtual: string, novaSenha: string): void
//
// Métodos privados (use-os internamente):
//   - private validarSenha(senha: string): void → lança Error se errada
//   - private registrarTransacao(t: Transacao): void

// Seu código aqui:
interface Transacao {
    tipo: 'deposito' | 'saque' | 'transferencia';
    valor: number;
    data: Date;
    descricao: string;
}

class CarteiraDigital {
    readonly id: number;
    static proximoId: number = 0;
    private _saldo: number;
    private _historicoTransacoes: Transacao[] = [];
    private _senha: string;
    public titular: string;
    private static readonly LIMITE_SAQUE = 5000;
    constructor(saldo: number, senha: string, titular: string) {
        this.id = CarteiraDigital.proximoId++;
        this._saldo = saldo;
        this._senha = senha;
        this.titular = titular;
    }

    public depositar(valor: number): void {
        if (valor > 0) {
            this._saldo += valor;
            this._historicoTransacoes.push({
                tipo: 'deposito',
                valor: valor,
                data: new Date(),
                descricao: `Depósito de R$${valor}`,
            });
        }
        console.log('Não pode');
    }

    public sacar(valor: number, senha: string): void {
        if (
            (valor > 0 && valor < this._saldo,
            senha == this._senha,
            valor <= CarteiraDigital.LIMITE_SAQUE)
        ) {
            this._saldo += valor;
            this._historicoTransacoes.push({
                tipo: 'saque',
                valor: valor,
                data: new Date(),
                descricao: `Saque de R$${valor}`,
            });
        }
        console.log('Transação não concluida');
    }

    get saldo(): number {
        return this._saldo;
    }
}

const minhaCarteira = new CarteiraDigital(1000, 'abc', 'Eduardo');
minhaCarteira.depositar(1000);
minhaCarteira.saldo;
// Saída esperada (exemplo):
// carteira.saldo → 0
// carteira.depositar(1000) → saldo = 1000
// carteira.sacar(300, "1234") → saldo = 700
// carteira.sacar(300, "errada") → ❌ lança Error("Senha incorreta")
// carteira._saldo → ❌ Erro de compilação (private)
// carteira.extrato("1234") → [{ tipo: "deposito", valor: 1000 ... }, ...]

// ════════════════════════════════════════════════════════════════════════
// QUESTÃO 05 — Composição
// Pontuação: 1 pt
// Dificuldade: ⭐⭐⭐
// ════════════════════════════════════════════════════════════════════════
// Composição é quando uma classe "tem um" (HAS-A) outro objeto como
// atributo. É preferível à herança quando a relação é de "ter" e não
// de "ser". "Prefira composição à herança" — GoF.
//
// Construa um sistema de Computador usando composição:
//
// Classes de componentes (simples, sem herança):
//   - class ProcessadorCPU
//       → modelo: string, nucleos: number, frequenciaGHz: number
//       → info(): string → "CPU: [modelo] ([nucleos] núcleos @ [freq]GHz)"
//
//   - class MemoriaRAM
//       → capacidadeGB: number, tipo: "DDR4" | "DDR5"
//       → info(): string → "RAM: [capacidade]GB [tipo]"
//
//   - class ArmazenamentoSSD
//       → capacidadeGB: number, modelo: string
//       → private _ocupadoGB = 0
//       → info(): string → "SSD: [modelo] [cap]GB ([livre]GB livre)"
//       → instalarPrograma(tamanhoGB: number, nome: string): boolean
//           → retorna false se não houver espaço
//
//   - class PlacaDeVideo (opcional, vale 0.1pt extra)
//       → modelo: string, memoriaGB: number
//       → info(): string → "GPU: [modelo] [mem]GB VRAM"
//
// Classe principal:
//   - class Computador
//       → Tem (não herda!): cpu, ram, ssd e opcionalmente gpu
//       → nome: string
//       → ligar(): string → "💻 [nome] iniciando..."
//       → especificacoes(): void → imprime todos os componentes
//       → instalarPrograma(nome: string, tamanhoGB: number): string
//           → delega para ssd.instalarPrograma e retorna mensagem
//       → get memoriaTotal(): number → retorna ram.capacidadeGB

// Seu código aqui:

// Saída esperada (exemplo):
// pc.ligar() → "💻 Gaming Rig iniciando..."
// pc.especificacoes() →
//   CPU: Ryzen 7 5800X (8 núcleos @ 3.8GHz)
//   RAM: 16GB DDR4
//   SSD: Samsung 970 Evo 512GB (512GB livre)
// pc.instalarPrograma("GTA 6", 150) → "✅ GTA 6 instalado com sucesso!"
// pc.instalarPrograma("IA Enorme", 500) → "❌ Espaço insuficiente para IA Enorme"

// ════════════════════════════════════════════════════════════════════════
// QUESTÃO 06 — Herança
// Pontuação: 1 pt
// Dificuldade: ⭐⭐⭐
// ════════════════════════════════════════════════════════════════════════
// Herança (IS-A) permite que uma classe filha herde atributos e métodos
// de uma classe pai, podendo estendê-los ou sobrescrevê-los.
// Em TypeScript: `class Filho extends Pai { ... }`
// Use `super()` para chamar o constructor do pai.
// Use `super.metodo()` para chamar um método do pai dentro do filho.
//
// Crie uma hierarquia de Funcionários:
//
// Classe base: Funcionario
//   - protected nome: string
//   - protected salarioBase: number
//   - protected horasTrabalhadas: number
//   - constructor(nome, salarioBase)
//   - calcularSalario(): number → retorna salarioBase (pode ser sobrescrito)
//   - registrarHoras(horas: number): void → acumula horas trabalhadas
//   - toString(): string → "Funcionário: [nome] | Salário: R$ [salário calculado]"
//
// Subclasses:
//
//   FuncionarioCLT extends Funcionario
//     - private beneficios: number (vale alimentação + plano de saúde, etc.)
//     - calcularSalario(): → salárioBase + benefícios - descontos INSS (11%)
//     - get salarioLiquido(): number
//
//   FuncionarioPJ extends Funcionario
//     - private taxaImpostoPercentual: number
//     - private valorHoraExtra: number
//     - calcularSalario(): → salárioBase + (horasExtras * valorHoraExtra)
//         onde horasExtras = max(0, horasTrabalhadas - 160)
//     - get impostoDevido(): number → salário * taxaImpostoPercentual / 100
//
//   Estagiario extends Funcionario
//     - private bolsaAuxilio: number
//     - private cargaHorariaMaxima = 30 // horas semanais
//     - calcularSalario(): → apenas bolsaAuxilio (sem salárioBase)
//     - registrarHoras(horas: number): void → override que valida
//         se as horas não ultrapassam o limite
//
// Crie uma função folhaPagamento(funcionarios: Funcionario[]): void
// que imprime os dados de cada funcionário e o total da folha.

// Seu código aqui:

// Saída esperada (exemplo):
// Funcionário: Ana (CLT) | Salário: R$ 3.247,00
// Funcionário: Carlos (PJ) | Salário: R$ 6.800,00
// Funcionário: Lucas (Estagiário) | Salário: R$ 800,00
// ─────────────────────────────────────
// Total da Folha: R$ 10.847,00

// ════════════════════════════════════════════════════════════════════════
// QUESTÃO 07 — Polimorfismo
// Pontuação: 1 pt
// Dificuldade: ⭐⭐⭐
// ════════════════════════════════════════════════════════════════════════
// Polimorfismo significa "muitas formas": um mesmo método pode ter
// comportamentos diferentes dependendo do objeto que o implementa.
// Permite tratar objetos de tipos diferentes de forma uniforme.
//
// Crie um sistema de formas geométricas com polimorfismo:
//
// Classe base (ou interface): FormaGeometrica
//   - nome: string
//   - cor: string
//   - calcularArea(): number      ← cada forma calcula diferente
//   - calcularPerimetro(): number ← cada forma calcula diferente
//   - descricao(): string → "[nome] ([cor]) - Área: [area] - Perímetro: [perim]"
//   - escalar(fator: number): FormaGeometrica ← retorna nova forma escalada
//
// Implemente pelo menos 4 formas concretas:
//   - Circulo(raio: number, cor: string)
//       área = π * r²  |  perímetro = 2 * π * r
//   - Retangulo(largura: number, altura: number, cor: string)
//       área = l * h   |  perímetro = 2 * (l + h)
//   - Triangulo(base: number, altura: number, ladoA: number, ladoB: number, ladoC: number, cor: string)
//       área = (b * h) / 2  |  perímetro = a + b + c
//   - Hexagono(lado: number, cor: string)
//       área = (3√3/2) * l²  |  perímetro = 6 * l
//
// Crie as funções polimórficas:
//   - calcularAreaTotal(formas: FormaGeometrica[]): number
//   - formaComMaiorArea(formas: FormaGeometrica[]): FormaGeometrica
//   - imprimirRelatorio(formas: FormaGeometrica[]): void
//       → imprime cada forma ordenada da maior para menor área

// Seu código aqui:

// Saída esperada (exemplo):
// Relátorio de Formas (da maior para menor área):
// 1. Circulo (azul) - Área: 78.54 - Perímetro: 31.42
// 2. Hexagono (amarelo) - Área: 41.57 - Perímetro: 24.00
// 3. Retangulo (verde) - Área: 24.00 - Perímetro: 20.00
// 4. Triangulo (vermelho) - Área: 12.00 - Perímetro: 12.00
// ─────────────────────────────────────
// Área Total: 156.11

// ════════════════════════════════════════════════════════════════════════
// QUESTÃO 08 — Overload e Override (Sobrecarga e Sobreposição)
// Pontuação: 1 pt
// Dificuldade: ⭐⭐⭐⭐
// ════════════════════════════════════════════════════════════════════════
// OVERRIDE (Sobreposição): Subclasse redefine um método da superclasse.
//   → Mesma assinatura, comportamento diferente.
//   → Use @override (TS 4.3+) para indicar intenção.
//
// OVERLOAD (Sobrecarga): Mesmo método com assinaturas diferentes.
//   → TypeScript permite declarar múltiplas assinaturas antes da implementação.
//   → A implementação usa union types para tratar todos os casos.
//
// Exemplo de overload em TypeScript:
//   function processar(valor: number): number;
//   function processar(valor: string): string;
//   function processar(valor: number | string): number | string { ... }
//
// Crie uma classe Calculadora com OVERLOAD para o método calcular():
//   - calcular(a: number, b: number): number           → soma dois números
//   - calcular(a: number, b: number, op: string): number → operação: +, -, *, /
//   - calcular(valores: number[]): number              → soma um array de números
//   - calcular(a: string, b: string): string           → concatena duas strings
//
// Crie uma hierarquia com OVERRIDE:
//   - class Animal
//       → nome: string, som: string
//       → emitirSom(): string → "[nome] faz: [som]"
//       → dormir(): string → "[nome] está dormindo... 💤"
//       → apresentar(): string → "Sou [nome]"
//
//   - class Cachorro extends Animal
//       → @override emitirSom(): string → "[nome] late: AU AU! 🐕"
//       → buscar(objeto: string): string → "[nome] buscou o [objeto]! 🎾"
//       → @override apresentar(): → chama super.apresentar() + ", um cachorro leal"
//
//   - class Gato extends Animal
//       → @override emitirSom(): string → "[nome] mia: Miau~ 🐈"
//       → arranhar(alvo: string): string → "[nome] arranhou [alvo]!"
//       → @override dormir(): → "[nome] dorme 16h por dia 😴"
//
//   - class Papagaio extends Animal
//       → private vocabulario: string[]
//       → @override emitirSom(): → repete uma palavra aleatória do vocabulário
//       → aprender(palavra: string): void → adiciona ao vocabulário

// Seu código aqui:

// Saída esperada (exemplo):
// calc.calcular(5, 3)          → 8
// calc.calcular(5, 3, "*")     → 15
// calc.calcular([1, 2, 3, 4])  → 10
// calc.calcular("Olá", " Mundo") → "Olá Mundo"
//
// dog.emitirSom()   → "Rex late: AU AU! 🐕"
// cat.emitirSom()   → "Mimi mia: Miau~ 🐈"
// cat.dormir()      → "Mimi dorme 16h por dia 😴"
// dog.apresentar()  → "Sou Rex, um cachorro leal"

// ════════════════════════════════════════════════════════════════════════
// QUESTÃO 09 — Abstração (Abstract Classes)
// Pontuação: 1,5 pt
// Dificuldade: ⭐⭐⭐⭐
// ════════════════════════════════════════════════════════════════════════
// Classes abstratas definem um CONTRATO para subclasses sem fornecer
// implementação completa. Não podem ser instanciadas diretamente.
//
// Métodos abstract → obrigam subclasses a implementar.
// Métodos concretos → fornecem comportamento padrão reutilizável.
//
// Crie um sistema de processamento de dados com classes abstratas:
//
// abstract class ProcessadorDados<T, R>
//   - protected abstract nome: string
//   - abstract validar(dados: T): boolean         ← subclasse implementa
//   - abstract transformar(dados: T): R           ← subclasse implementa
//   - abstract formatarSaida(resultado: R): string ← subclasse implementa
//   - concreto processar(dados: T): R             ← Template Method:
//       1. Loga "Iniciando processamento: [nome]"
//       2. Valida (lança Error se falhar)
//       3. Transforma
//       4. Loga resultado formatado
//       5. Retorna o resultado
//   - concreto processarLote(itens: T[]): R[]
//       → processa cada item e retorna array de resultados
//
// Implemente 3 processadores concretos:
//
//   ProcessadorCPF extends ProcessadorDados<string, string>
//     - validar: CPF tem 11 dígitos (apenas números)
//     - transformar: formata como "XXX.XXX.XXX-XX"
//     - formatarSaida: "CPF formatado: [cpf]"
//
//   ProcessadorNotas extends ProcessadorDados<number[], { media: number; situacao: string }>
//     - validar: deve ter entre 1 e 4 notas, cada nota entre 0 e 10
//     - transformar: calcula média e situação:
//         >= 7 → "Aprovado ✅"  |  >= 5 → "Recuperação ⚠️"  |  < 5 → "Reprovado ❌"
//     - formatarSaida: "Média [media] - [situacao]"
//
//   ProcessadorSenha extends ProcessadorDados<string, { forte: boolean; pontuacao: number; dicas: string[] }>
//     - validar: senha deve ter ao menos 6 caracteres
//     - transformar: avalia a força da senha com pontuação 0-100:
//         +20 por ter ao menos 8 chars
//         +20 por ter letras maiúsculas
//         +20 por ter letras minúsculas
//         +20 por ter números
//         +20 por ter caracteres especiais (!@#$%...)
//         forte: pontuacao >= 60
//         dicas: lista os requisitos faltantes
//     - formatarSaida: "Senha [forte/fraca] (pontuação: [n]/100)"

// Seu código aqui:

// Saída esperada (exemplo):
// cpfProc.processar("12345678901")
//   → "Iniciando processamento: ProcessadorCPF"
//   → "CPF formatado: 123.456.789-01"
//   → retorna "123.456.789-01"
//
// notasProc.processar([8, 7, 9, 6])
//   → "Iniciando processamento: ProcessadorNotas"
//   → "Média 7.5 - Aprovado ✅"
//   → retorna { media: 7.5, situacao: "Aprovado ✅" }
//
// senhaProc.processar("abc123ABC!")
//   → "Iniciando processamento: ProcessadorSenha"
//   → "Senha forte (pontuação: 100/100)"

// ════════════════════════════════════════════════════════════════════════
// QUESTÃO 10 — Clean Code e SOLID
// Pontuação: 2 pt
// Dificuldade: ⭐⭐⭐⭐⭐
// ════════════════════════════════════════════════════════════════════════
// SOLID é um conjunto de 5 princípios para código orientado a objetos:
//
//   S — Single Responsibility Principle (SRP)
//       → Cada classe tem UMA única responsabilidade
//
//   O — Open/Closed Principle (OCP)
//       → Aberto para extensão, fechado para modificação
//
//   L — Liskov Substitution Principle (LSP)
//       → Subclasses devem poder substituir a superclasse sem quebrar o código
//
//   I — Interface Segregation Principle (ISP)
//       → Interfaces pequenas e específicas são melhores que uma grande
//
//   D — Dependency Inversion Principle (DIP)
//       → Dependa de abstrações, não de implementações concretas
//
// Você receberá código com violações de SOLID. Sua tarefa é:
// Parte A (1pt): Identificar as violações e comentar o que estão violando.
// Parte B (1pt): Refatorar o código aplicando os princípios corretos.
//
// ─── CÓDIGO COM VIOLAÇÕES (para a Parte A) ──────────────────────────────
//
// INSTRUÇÕES PARTE A: Leia o código abaixo e escreva comentários explicando
// qual princípio SOLID cada bloco viola e por quê.

class RelatorioViolado {
    gerarRelatorioVendas(vendas: number[]): string {
        // Gera relatório
        const total = vendas.reduce((s, v) => s + v, 0);
        const conteudo = `RELATÓRIO\nTotal: R$ ${total}`;
        // Salva no banco (responsabilidade extra!)
        console.log(`[DB] Salvando relatório: ${conteudo}`);
        // Envia por e-mail (outra responsabilidade!)
        console.log(`[EMAIL] Enviando para gerente@empresa.com: ${conteudo}`);
        // Formata como PDF (mais uma!)
        console.log(`[PDF] Gerando PDF do relatório...`);
        return conteudo;
    }
} // ← VIOLAÇÃO: Qual princípio? Por quê? Escreva abaixo:
// Resposta Parte A - Bloco 1:

class NotificadorViolado {
    enviar(tipo: string, mensagem: string, destino: string): void {
        if (tipo === 'email') {
            console.log(`[EMAIL → ${destino}]: ${mensagem}`);
        } else if (tipo === 'sms') {
            console.log(`[SMS → ${destino}]: ${mensagem}`);
        } else if (tipo === 'push') {
            console.log(`[PUSH → ${destino}]: ${mensagem}`);
        } else if (tipo === 'whatsapp') {
            // Para adicionar WhatsApp, DEVO MODIFICAR esta classe
            console.log(`[WhatsApp → ${destino}]: ${mensagem}`);
        }
    }
} // ← VIOLAÇÃO: Qual princípio? Por quê? Escreva abaixo:
// Resposta Parte A - Bloco 2:

interface WorkerViolado {
    trabalhar(): void;
    comer(): void;
    dormir(): void;
    carregarPeso(kg: number): void; // Robôs não comem nem dormem!
    recarregar(): void; // Humanos não recarregam!
}
// Resposta Parte A - Bloco 3:

class MySQLRepositoryViolado {
    private conexao = 'mysql://localhost/db'; // implementação concreta!
    buscar(id: number): string {
        return `[MySQL] Buscando ID ${id} em ${this.conexao}`;
    }
}
class UsuarioServiceViolado {
    // Depende diretamente de MySQL — e se mudar para PostgreSQL?
    private repo = new MySQLRepositoryViolado();
    buscarUsuario(id: number): string {
        return this.repo.buscar(id);
    }
}
// Resposta Parte A - Bloco 4:

//
// ─── PARTE B: REFATORAÇÃO ────────────────────────────────────────────────
//
// Refatore os 4 blocos acima aplicando os princípios SOLID corretamente.
// Use interfaces, injeção de dependência e separação de responsabilidades.
//
// Requisitos mínimos da refatoração:
//
// Bloco 1 (SRP):
//   - Separe em: GeradorRelatorio, SalvadorRelatorio, EnviadorEmail, GeradorPDF
//   - Crie uma classe OrquestradorRelatorio que usa todas através de injeção
//
// Bloco 2 (OCP):
//   - Crie interface Canal: { enviar(mensagem: string, destino: string): void }
//   - Implemente: CanalEmail, CanalSMS, CanalPush, CanalWhatsApp
//   - Crie Notificador que recebe Canal[] e envia para todos (broadcaster)
//   - Para adicionar um novo canal, basta criar uma nova classe — sem modificar Notificador!
//
// Bloco 3 (ISP):
//   - Separe WorkerViolado em: ITrabalhador, IAlimentavel, IDormivel, ICarregavelFisico, IRecarregavelEletrico
//   - Crie class HumanoTrabalhador implements ITrabalhador, IAlimentavel, IDormivel, ICarregavelFisico
//   - Crie class RoboTrabalhador implements ITrabalhador, IRecarregavelEletrico
//
// Bloco 4 (DIP):
//   - Crie interface IRepository<T>: { buscar(id: number): T; salvar(item: T): void }
//   - Implemente MySQLRepository e PostgreSQLRepository (podem ser simulados)
//   - Refatore UsuarioService para receber IRepository via constructor (injeção de dependência)

// Seu código de refatoração aqui:

// ════════════════════════════════════════════════════════════════════════
// QUESTÃO EXTRA — Design Pattern: Observer + Strategy combinados
// Pontuação: 1,5 pt (bônus)
// Dificuldade: ⭐⭐⭐⭐⭐
// ════════════════════════════════════════════════════════════════════════
// Design Patterns são soluções reutilizáveis para problemas comuns.
// Esta questão combina dois padrões clássicos do GoF: Observer e Strategy.
//
// ─── OBSERVER PATTERN ────────────────────────────────────────────────────
// Define uma relação 1:N onde, quando um objeto (Subject) muda de estado,
// todos os seus Observers são notificados automaticamente.
//
// Interfaces:
//   - IObservador<T> → atualizar(evento: string, dados: T): void
//   - ISubject<T>
//       → inscrever(obs: IObservador<T>): void
//       → desinscrever(obs: IObservador<T>): void
//       → notificar(evento: string, dados: T): void
//
// ─── STRATEGY PATTERN ────────────────────────────────────────────────────
// Define uma família de algoritmos intercambiáveis encapsulados em classes.
//
// Interfaces:
//   - IEstrategiaPreco
//       → calcular(preco: number, quantidade: number, cliente: TipoCliente): number
//       → nome: string
//
//   type TipoCliente = "normal" | "premium" | "vip"
//
// ─── SISTEMA INTEGRADO: LojaMercado ──────────────────────────────────────
//
// Estratégias de Preço (implemente todas):
//   - PrecoNormal: sem desconto
//   - PrecoPromocional(desconto: number): desconto fixo em % para todos
//   - PrecoDinamico: normal=0%, premium=10%, vip=20%
//   - PrecoMelhorOferta: escolhe automaticamente o MELHOR preço
//     entre PrecoPromocional(15%) e PrecoDinamico para o cliente
//
// Observadores (implemente todos):
//   - LoggerVendas: imprime log de cada venda realizada
//   - SistemaEstoque: diminui o estoque e alerta se < 5 unidades
//   - EmailMarketing: envia "e-mail" de agradecimento para clientes VIP
//   - AnalisadorVendas: acumula métricas (total vendido, ticket médio)
//
// Classe Principal:
//   - class LojaMercado implements ISubject<DadosVenda>
//       - private estrategiaPreco: IEstrategiaPreco
//       - private observers: IObservador<DadosVenda>[]
//       - private estoque: Map<string, number>
//       - constructor(estrategia: IEstrategiaPreco)
//       - adicionarProduto(nome: string, quantidade: number): void
//       - realizarVenda(produto: string, qtd: number, precoBase: number, cliente: TipoCliente): void
//           → calcula preço com estratégia, notifica todos os observers
//       - mudarEstrategia(nova: IEstrategiaPreco): void (OCP!)
//       + implementar ISubject
//
//   type DadosVenda = {
//     produto: string; quantidade: number;
//     precoFinal: number; total: number;
//     cliente: TipoCliente; timestamp: Date;
//   }

// Seu código aqui:

// Teste esperado:
// const logger = new LoggerVendas();
// const estoque = new SistemaEstoque();
// const emailMkt = new EmailMarketing();
// const analisador = new AnalisadorVendas();
//
// const loja = new LojaMercado(new PrecoDinamico());
// loja.inscrever(logger);
// loja.inscrever(estoque);
// loja.inscrever(emailMkt);
// loja.inscrever(analisador);
//
// loja.adicionarProduto("Notebook", 10);
// loja.adicionarProduto("Mouse", 50);
//
// loja.realizarVenda("Notebook", 1, 3000, "vip");
// // [LOG] Venda: 1x Notebook por R$ 2400 (VIP -20%) - Total: R$ 2400
// // [ESTOQUE] Notebook: 9 unidades restantes
// // [EMAIL] Obrigado pela compra, cliente VIP! 🌟
//
// loja.realizarVenda("Mouse", 2, 100, "premium");
// // [LOG] Venda: 2x Mouse por R$ 90 (Premium -10%) - Total: R$ 180
// // [ESTOQUE] Mouse: 48 unidades restantes
//
// loja.mudarEstrategia(new PrecoMelhorOferta());
// loja.realizarVenda("Mouse", 3, 100, "normal");
// // Melhor oferta para "normal": PrecoPromocional(15%) = R$ 85 < PrecoDinamico = R$ 100
// // [LOG] Venda: 3x Mouse por R$ 85 - Total: R$ 255
//
// console.log(analisador.relatorio());
// // Total vendido: R$ 2835 | Vendas: 3 | Ticket médio: R$ 945

// ════════════════════════════════════════════════════════════════════════
// 📌 GABARITO / DICAS
// (Descomente quando quiser conferir a abordagem correta)
// ════════════════════════════════════════════════════════════════════════

// DICA Q01: Use `new Date().getFullYear()` para pegar o ano atual.
//           Math.floor(minutos) e (minutos % 1 * 60) para converter decimais.

// DICA Q02: `private static contadorId` é compartilhado entre todas as instâncias.
//           Incremente ANTES de atribuir ao `this.id` no constructor.

// DICA Q03: Lembre-se: `set fahrenheit(f)` → `this._celsius = (f - 32) * 5/9`
//           `set kelvin(k)` → `this._celsius = k - 273.15`

// DICA Q04: Use `crypto.randomUUID()` se disponível no ambiente,
//           ou simule com `"wallet-" + Math.random().toString(36).slice(2)`.

// DICA Q05: O poder da composição: `this.ssd.instalarPrograma(...)` — você
//           delega a responsabilidade sem precisar herdar de SSD.

// DICA Q06: Em subclasses, `super(nome, salarioBase)` deve ser a PRIMEIRA
//           linha do constructor. `super.registrarHoras(horas)` chama o pai.

// DICA Q07: `[...formas].sort((a, b) => b.calcularArea() - a.calcularArea())`
//           para ordenar da maior para menor área.

// DICA Q08: Overload em TS: declare as assinaturas SEM corpo, depois a
//           implementação COM corpo usa union types. O TS não suporta
//           true overload em runtime como Java — é apenas tipagem.

// DICA Q09: Classes genéricas abstract: `abstract class ProcessadorDados<T, R>`
//           O método `processar` é concreto e usa `this.validar` e `this.transformar`
//           (Template Method Pattern embutido).

// DICA Q10: DIP → injete dependências pelo constructor:
//           `constructor(private repo: IRepository<Usuario>) {}`
//           Assim você troca MySQL por PostgreSQL sem mudar UsuarioService.

// DICA EXTRA: Para o Observer, use `Array.filter` para desinscrever:
//             `this.observers = this.observers.filter(o => o !== obs)`

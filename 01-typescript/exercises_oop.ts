// ╔══════════════════════════════════════════════════════════════════╗
// ║         📚 LISTA DE EXERCÍCIOS - OOP em TypeScript              ║
// ║                                                                   ║
// ║  Tópicos: Classes, Herança, Polimorfismo, Encapsulamento,        ║
// ║           Generics, Access Modifiers, Abstract, Decorators,      ║
// ║           Static, Getters/Setters, Method Overriding             ║
// ╚══════════════════════════════════════════════════════════════════╝

// ┌──────────────────────────────────────────────────────────────────┐
// │                    📊 PROGRESSO                                  │
// │                                                                  │
// │  Exercício 01: [ ] Classe com access modifiers e readonly        │
// │  Exercício 02: [ ] Getters e Setters com validação              │
// │  Exercício 03: [ ] Herança + super em métodos                    │
// │  Exercício 04: [ ] Polimorfismo + method overriding              │
// │  Exercício 05: [ ] Abstract class                                │
// │  Exercício 06: [ ] Static members avançado                       │
// │  Exercício 07: [ ] Generics em classes                           │
// │  Exercício 08: [ ] Mixins em TypeScript                          │
// │  Exercício 09: [ ] Parameter Properties + Overloads              │
// │  Exercício 10: [ ] Mini Projeto - RPG Battle System              │
// │                                                                  │
// │  Completos: 0/10                                                 │
// │  Última atualização:                                             │
// └──────────────────────────────────────────────────────────────────┘

// ============================================================
// EXERCÍCIO 01 - Classe com access modifiers e readonly
// Dificuldade: ⭐⭐
// ============================================================
// TypeScript oferece modificadores de acesso verdadeiros:
//   public    → acessível de qualquer lugar (padrão)
//   private   → apenas dentro da própria classe
//   protected → na classe e em subclasses
//   readonly  → atribuído uma vez (constructor), nunca mais alterado
//
// Crie uma classe Livro com:
//   - readonly isbn: string          (nunca muda após criação)
//   - public titulo: string
//   - public autor: string
//   - private _numeroPaginas: number (validado no set)
//   - private _lido: boolean = false
//   - protected _avaliacao: number = 0 (0 a 5)
//   - private static _totalCadastrados = 0
//
//   - constructor com PARAMETER PROPERTIES (atalho TypeScript):
//       constructor(readonly isbn: string, public titulo: string, public autor: string, private _numeroPaginas: number)
//   - marcarComoLido(): void
//   - avaliar(nota: number): void → valida entre 0 e 5, lança erro se fora do range
//   - toString(): string → "[Titulo] de [Autor] - [páginas] págs | Avaliação: [nota]/5"
//   - static getTotalCadastrados(): number

// Seu código aqui:
class Livro {
  private _read: boolean = false;
  protected _rate: number = 0;
  private static _allLogged = 0;

  constructor(
    readonly isbn: string,
    public title: string,
    public author: string,
    private _totalPages: number,
  ) {
    Livro._allLogged++;
  }

  markAsRead(): void {
    this._read = true;
  }

  rate(grade: number): void {
    if (grade < 0 || grade > 5) {
      console.error('Grades are on a range from 0-5');
    }
    this._rate = grade;
  }

  static getAllLogged(): number {
    return this._allLogged;
  }

  toString(): string {
    return `${this.title} de ${this.author} - ${this._totalPages} páginas | Avaliação: ${this._rate} / 5`;
  }
}
// Teste:
const livro1 = new Livro(
  '978-3-16-148410-0',
  'Clean Code',
  'Robert Martin',
  431,
);
const livro2 = new Livro(
  '978-0-13-468599-1',
  'TypeScript Handbook',
  'Microsoft',
  230,
);

console.log(Livro.getAllLogged()); // 2
//
livro1.markAsRead();
livro1.rate(5);
console.log(livro1.toString()); // "Clean Code de Robert Martin - 431 págs | Avaliação: 5/5"
//
livro1.rate(6); // ❌ Error: Avaliação deve ser entre 0 e 5
//
//livro1.isbn = "outro-isbn"; // ❌ Erro: readonly
//livro1._avaliacao = 3;      // ❌ Erro: private

// ============================================================
// EXERCÍCIrO 02 - Getters e Setters com validação de tipo
// Dificuldade: ⭐⭐
// ============================================================
// Getters (get) e Setters (set) controlam acesso a propriedades privadas.
// Em TypeScript, eles possuem tipo inferido automaticamente.
//
// Crie uma classe Temperatura com:
//   - private _celsius: number
//   - get celsius(): number
//   - set celsius(valor: number) → não pode ser abaixo de -273.15 (zero absoluto)
//   - get fahrenheit(): number → converte de celsius
//   - set fahrenheit(valor: number) → converte para celsius e atribui
//   - get kelvin(): number → celsius + 273.15
//   - set kelvin(valor: number) → converte para celsius e atribui (não pode ser negativo)
//   - toString(): string → "[X]°C | [Y]°F | [Z]K"
//
// Crie também uma classe Circulo:
//   - private _raio: number
//   - get raio(): number
//   - set raio(valor: number) → não pode ser negativo
//   - get diametro(): number
//   - set diametro(valor: number)
//   - get area(): number (readonly – apenas getter, sem setter)
//   - get perimetro(): number (readonly)

// Seu código aqui:

// Teste:
// const temp = new Temperatura(100);
// console.log(temp.toString());    // "100°C | 212°F | 373.15K"
//
// temp.fahrenheit = 32;
// console.log(temp.celsius);       // 0
// console.log(temp.toString());    // "0°C | 32°F | 273.15K"
//
// temp.celsius = -300;             // ❌ Erro: abaixo do zero absoluto
//
// const c = new Circulo(5);
// console.log(c.area.toFixed(2));  // 78.54
// c.diametro = 20;
// console.log(c.raio);             // 10

// ============================================================
// EXERCÍCIO 03 - Herança com super + typed inheritance
// Dificuldade: ⭐⭐⭐
// ============================================================
// Em TypeScript, herança é fortemente tipada. O 'super' permite
// chamar o constructor e métodos da classe pai.
//
// Crie a hierarquia de Funcionários:
//
//   Funcionario (classe base)
//     - constructor(
//         public readonly id: number,
//         public nome: string,
//         protected salario: number,
//         public departamento: string
//       )
//     - calcularSalarioLiquido(): number → remove 27.5% de IR
//     - gerarContracheque(): string
//     - protected static proximoId = 1
//     - static criarProximo(nome: string, salario: number, depto: string): Funcionario
//
//   FuncionarioCLT extends Funcionario
//     - constructor(nome, salario, departamento, private diasFeriasRestantes: number)
//     - Override calcularSalarioLiquido() → super - INSS (11%) + possível 1/3 de férias
//     - tirarFerias(dias: number): void → diminui diasFeriasRestantes
//     - get temFeriasDisponiveis(): boolean
//
//   Gerente extends FuncionarioCLT
//     - private _subordinados: Funcionario[] = []
//     - bonus: number (percentual do salário, ex: 0.2 = 20%)
//     - Override calcularSalarioLiquido() → super + bonus
//     - adicionarSubordinado(f: Funcionario): void
//     - get equipe(): readonly Funcionario[]

// Seu código aqui:

// Teste:
// const dev = new FuncionarioCLT("Eduardo", 8000, "TI", 30);
// console.log(dev.calcularSalarioLiquido().toFixed(2)); // após IR e INSS
// console.log(dev.gerarContracheque());
//
// dev.tirarFerias(10);
// console.log(dev.temFeriasDisponiveis); // true
//
// const gerente = new Gerente("Ana", 15000, "TI", 30, 0.20);
// gerente.adicionarSubordinado(dev);
// console.log(gerente.equipe.length); // 1
// console.log(gerente.calcularSalarioLiquido().toFixed(2)); // com bônus de 20%

// ============================================================
// EXERCÍCIO 04 - Polimorfismo + Method Overriding tipado
// Dificuldade: ⭐⭐⭐
// ============================================================
// Polimorfismo permite tratar objetos de tipos diferentes de forma uniforme.
// TypeScript garante em compilação que o override está correto.
//
// Crie uma classe base Animal:
//   - constructor(public nome: string, public especie: string, protected energia: number)
//   - falar(): string  → "..."
//   - mover(): string  → "[nome] se move"
//   - comer(alimento: string): void → aumenta energia em 10
//   - get estaVivo(): boolean → energia > 0
//   - toString(): string → "[Nome] ([Espécie]) - Energia: [X]"
//
// Crie as subclasses com OVERRIDE explícito (keyword override do TS 4.3+):
//   - Cachorro(nome, energia, raca: string)
//       override falar() → "Au au! 🐕"
//       override mover() → "[nome] corre abanando o rabo"
//       latir(): string (método exclusivo)
//
//   - Gato(nome, energia, indoor: boolean)
//       override falar() → "Miau 🐱"
//       override mover() → indoor ? "[nome] pula nos móveis" : "[nome] sai de casa"
//
//   - Papagaio(nome, energia, palavras: string[])
//       override falar() → repete uma palavra aleatória da lista
//       override mover() → "[nome] voa 🦜"
//       aprender(palavra: string): void
//
// Crie uma função zoologico(animais: Animal[]): void que imprime o resumo de cada um.

// Seu código aqui:

// Teste:
// const animais: Animal[] = [
//     new Cachorro("Rex", 80, "Labrador"),
//     new Gato("Mimi", 60, true),
//     new Papagaio("Louro", 90, ["Olá!", "Quero biscoito!", "TypeScript!"]),
// ];
//
// zoologico(animais);
// // Rex (Cachorro) - Energia: 80  | Rex corre abanando o rabo | Au au! 🐕
// // Mimi (Gato) - Energia: 60    | Mimi pula nos móveis       | Miau 🐱
// // Louro (Papagaio) - Energia: 90 | Louro voa 🦜             | TypeScript!
//
// const papagaio = animais[2] as Papagaio;
// papagaio.aprender("Incrível!");
// console.log(papagaio.falar()); // uma das 4 palavras aleatoriamente

// ============================================================
// EXERCÍCIO 05 - Abstract Class
// Dificuldade: ⭐⭐⭐
// ============================================================
// Classes abstratas NÃO podem ser instanciadas diretamente.
// Definem um contrato que subclasses DEVEM implementar.
// Podem ter métodos concretos (com implementação) E abstratos.
//
// Crie uma abstract class Jogo:
//   - protected pontuacao: number = 0
//   - protected nivel: number = 1
//   - protected vidas: number
//   - constructor(public nome: string, vidas: number)
//   - abstract iniciar(): void
//   - abstract processarEntrada(entrada: string): void
//   - abstract verificarFimDeJogo(): boolean
//   - concreto: exibirStatus(): string → "🎮 [nome] | Nível [nivel] | Pontos: [pontos] | Vidas: [vidas]"
//   - concreto: morrer(): void → decrementa vida, verifica fim de jogo
//   - concreto: ganharPontos(qtd: number): void → adiciona pontos e pode subir nível (a cada 100 pts)
//
// Implemente duas subclasses:
//
//   JogoQuiz(nome: string, perguntas: { pergunta: string; resposta: string }[])
//     - iniciar() → embaralha perguntas, exibe a primeira
//     - processarEntrada(resposta) → verifica e avança para próxima
//     - verificarFimDeJogo() → todas as perguntas respondidas ou sem vidas
//
//   JogoAdivinhe(nome: string, min: number, max: number)
//     - iniciar() → gera número secreto aleatório
//     - processarEntrada(numero) → diz se é maior, menor ou acertou
//     - verificarFimDeJogo() → acertou ou sem vidas

// Seu código aqui:

// Teste:
// const quiz = new JogoQuiz("Quiz TypeScript", [
//     { pergunta: "Qual keyword torna uma propriedade imutável?", resposta: "readonly" },
//     { pergunta: "Como se declara um tipo genérico?", resposta: "<T>" },
// ]);
//
// quiz.iniciar();
// console.log(quiz.exibirStatus()); // "🎮 Quiz TypeScript | Nível 1 | Pontos: 0 | Vidas: 3"
// quiz.processarEntrada("readonly"); // ✅ Correto! +50 pontos
// quiz.processarEntrada("any");      // ❌ Errado! -1 vida
//
// const adivinha = new JogoAdivinhe("Adivinhe o Número", 1, 100);
// adivinha.iniciar();
// adivinha.processarEntrada("50"); // "📈 Maior que 50" ou "📉 Menor que 50" ou "🎉 Acertou!"

// ============================================================
// EXERCÍCIO 06 - Static members avançado + Factory Methods
// Dificuldade: ⭐⭐⭐
// ============================================================
// Membros static pertencem à CLASSE, não às instâncias.
// Em TypeScript, podemos tipar static members com mais precisão.
//
// Crie uma classe Cor:
//   - private constructor(
//       public readonly r: number,
//       public readonly g: number,
//       public readonly b: number,
//       public readonly a: number = 1
//     )
//   - (constructor privado: só pode ser criado via factory methods abaixo)
//   - static fromHex(hex: string): Cor → converte "#FF5733" para Cor
//   - static fromRGB(r: number, g: number, b: number): Cor
//   - static fromHSL(h: number, s: number, l: number): Cor (pesquise a conversão!)
//   - static readonly PRETO  = Cor.fromRGB(0, 0, 0)
//   - static readonly BRANCO = Cor.fromRGB(255, 255, 255)
//   - static readonly VERMELHO = Cor.fromRGB(255, 0, 0)
//   - misturar(outra: Cor, proporcao: number = 0.5): Cor → mistura as duas cores
//   - clarear(fator: number): Cor → mistura com branco
//   - escurecer(fator: number): Cor → mistura com preto
//   - toHex(): string → "#RRGGBB"
//   - toString(): string → "rgb([r], [g], [b])"

// Seu código aqui:

// Teste:
// const vermelho = Cor.VERMELHO;
// const azul = Cor.fromRGB(0, 0, 255);
//
// const roxo = vermelho.misturar(azul);
// console.log(roxo.toString()); // "rgb(128, 0, 128)"
//
// const claro = vermelho.clarear(0.3);
// console.log(claro.toHex());   // algo próximo de "#FF4D4D"
//
// const doHex = Cor.fromHex("#1ABC9C");
// console.log(doHex.toString()); // "rgb(26, 188, 156)"
//
// // const nova = new Cor(0, 0, 0); // ❌ Erro: constructor é privado!

// ============================================================
// EXERCÍCIO 07 - Generics em Classes
// Dificuldade: ⭐⭐⭐⭐
// ============================================================
// Generics permitem criar estruturas de dados e algoritmos
// reutilizáveis com tipos seguros (sem usar 'any').
//
// Crie as seguintes estruturas de dados genéricas:
//
//   Pilha<T> (Stack - LIFO):
//     - private itens: T[]
//     - push(item: T): void
//     - pop(): T | undefined
//     - peek(): T | undefined (retorna o topo sem remover)
//     - get tamanho(): number
//     - get estaVazia(): boolean
//     - toArray(): T[] (cópia, do topo para base)
//
//   FilaPrioridade<T>(comparador: (a: T, b: T) => number):
//     - enfileirar(item: T): void
//     - desenfileirar(): T | undefined (retorna o de maior prioridade)
//     - espiar(): T | undefined
//     - get tamanho(): number
//
// Crie também uma função genérica:
//   function agruparPor<T, K extends string | number>(
//     itens: T[],
//     seletor: (item: T) => K
//   ): Record<K, T[]>
// que agrupa um array por uma chave calculada pelo seletor.

// Seu código aqui:

// Teste:
// // Pilha
// const pilha = new Pilha<number>();
// pilha.push(1); pilha.push(2); pilha.push(3);
// console.log(pilha.peek());   // 3
// console.log(pilha.pop());    // 3
// console.log(pilha.pop());    // 2
// console.log(pilha.tamanho);  // 1
//
// // Fila com prioridade (menor número = maior prioridade)
// const fila = new FilaPrioridade<{ nome: string; prioridade: number }>(
//     (a, b) => a.prioridade - b.prioridade
// );
// fila.enfileirar({ nome: "Tarefa C", prioridade: 3 });
// fila.enfileirar({ nome: "Tarefa A", prioridade: 1 });
// fila.enfileirar({ nome: "Tarefa B", prioridade: 2 });
// console.log(fila.desenfileirar()?.nome); // "Tarefa A"
//
// // agruparPor
// const produtos = [
//     { nome: "Mouse", categoria: "Periféricos" },
//     { nome: "Teclado", categoria: "Periféricos" },
//     { nome: "Monitor", categoria: "Monitores" },
// ];
// const porCategoria = agruparPor(produtos, p => p.categoria);
// console.log(porCategoria["Periféricos"].length); // 2

// ============================================================
// EXERCÍCIO 08 - Mixins em TypeScript (com tipos corretos)
// Dificuldade: ⭐⭐⭐⭐
// ============================================================
// Mixins simulam herança múltipla. Em TS, a forma correta usa
// funções que recebem uma classe e retornam uma nova classe estendida.
//
// type Constructor<T = {}> = new (...args: any[]) => T;
//
// Crie os seguintes Mixins como funções:
//
//   Timestampavel<TBase>(Base: TBase):
//     - criadoEm: Date = new Date()
//     - atualizadoEm: Date = new Date()
//     - tocar(): void → atualiza atualizadoEm
//
//   Serializavel<TBase>(Base: TBase):
//     - toJSON(): string → JSON.stringify(this)
//     - static fromJSON<T>(json: string): T → JSON.parse(json)
//     - clone(): this → cria uma cópia via JSON
//
//   Auditavel<TBase>(Base: TBase):
//     - private _historico: { campo: string; de: unknown; para: unknown; quando: Date }[]
//     - registrarAlteracao(campo: string, de: unknown, para: unknown): void
//     - getHistorico(): readonly typeof this._historico
//
// Crie uma classe Produto base e aplique todos os mixins:
//   class Produto {
//     constructor(public nome: string, public preco: number) {}
//   }
//   class ProdutoRastreavel extends Auditavel(Serializavel(Timestampavel(Produto))) {}

// Seu código aqui:

// Teste:
// const p = new ProdutoRastreavel("Mouse", 80);
//
// console.log(p.criadoEm);  // data de criação
//
// p.registrarAlteracao("preco", 80, 100);
// p.preco = 100;
// p.tocar();
//
// console.log(p.getHistorico().length); // 1
//
// const copia = p.clone();
// console.log(copia.nome);  // "Mouse"
// console.log(copia === p); // false (é uma cópia)
//
// const json = p.toJSON();
// console.log(json); // "{"nome":"Mouse","preco":100,...}"

// ============================================================
// EXERCÍCIO 09 - Parameter Properties + Method Overloads
// Dificuldade: ⭐⭐⭐
// ============================================================
// Parameter Properties → atalho TypeScript que declara E inicializa
// uma propriedade diretamente no constructor:
//   constructor(private nome: string) {} // equivale a this.nome = nome
//
// Method Overloads → definem múltiplas assinaturas para um método.
//
// Crie uma classe Agenda com:
//   - constructor(private dono: string)
//   - Um Map<string, string[]> de contatos internamente
//
//   Sobrecargas do método buscar():
//   - buscar(nome: string): string[] | undefined
//       → busca por nome exato
//   - buscar(inicial: string, tipo: "inicial"): string[]
//       → retorna todos que começam com a inicial
//   - buscar(quantidade: number, tipo: "top"): [string, string[]][]
//       → retorna os N primeiros contatos em ordem alfabética
//
//   Outros métodos:
//   - adicionar(nome: string, ...telefones: string[]): void
//   - remover(nome: string): boolean
//   - listar(): string → lista formatada de todos os contatos
//   - get totalContatos(): number

// Seu código aqui:

// Teste:
// const agenda = new Agenda("Eduardo");
// agenda.adicionar("Ana Silva", "11999990001", "11999990002");
// agenda.adicionar("Bruno Souza", "11999990003");
// agenda.adicionar("Ana Paula", "11999990004");
// agenda.adicionar("Carlos Lima", "11999990005");
//
// console.log(agenda.buscar("Ana Silva"));          // ["11999990001", "11999990002"]
// console.log(agenda.buscar("A", "inicial"));       // ["Ana Silva", "Ana Paula"] (e seus números)
// console.log(agenda.buscar(2, "top"));             // 2 primeiros em ordem alfabética
//
// console.log(agenda.totalContatos);  // 4
// console.log(agenda.listar());

// ============================================================
// EXERCÍCIO 10 - Mini Projeto: Sistema RPG Battle
// Dificuldade: ⭐⭐⭐⭐⭐
// ============================================================
// Use TUDO que você aprendeu para criar um sistema de batalha RPG!
//
// Classes necessárias:
//
// 1. abstract class Personagem
//    - constructor(
//        readonly id: number,
//        public nome: string,
//        protected hp: number,
//        protected readonly hpMax: number,
//        protected ataque: number,
//        protected defesa: number
//      )
//    - abstract usarHabilidade(alvo: Personagem): string
//    - atacar(alvo: Personagem): number → dano = max(0, ataque - defesa do alvo) com variação ±20%
//    - receberDano(dano: number): void
//    - curar(quantidade: number): void → não ultrapassa hpMax
//    - get estaVivo(): boolean
//    - get hpAtual(): number
//    - get porcentagemHp(): number (0 a 100)
//    - status(): string → barra de HP visual: "[Nome] ████░░░ 60/100"
//    - static criarId(): number (auto-incremento)
//
// 2. Guerreiro extends Personagem (ataque alto, defesa alta)
//    - override usarHabilidade(alvo) → "Golpe Devastador": dano * 2.5
//    - private escudoAtivo: boolean = false
//    - ativarEscudo(): void → dobra defesa por 1 turno
//
// 3. Mago extends Personagem (ataque altíssimo, defesa baixa)
//    - private mana: number
//    - override usarHabilidade(alvo) → "Bola de Fogo": dano fixo baseado em mana
//    - recuperarMana(qtd: number): void
//
// 4. Arqueiro extends Personagem (ataque médio, vel. alta: ataca 2x)
//    - override usarHabilidade(alvo) → "Chuva de Flechas": ataca 3x com menor dano
//    - private cargas: number = 3
//
// 5. class Batalha (orquestra a batalha)
//    - constructor(equipeA: Personagem[], equipeB: Personagem[])
//    - private turno: number = 1
//    - iniciarBatalha(): string[] → retorna o log completo da batalha, turno a turno
//       cada turno: cada vivo de equipeA ataca um vivo aleatório de equipeB e vice-versa
//       batalha termina quando um time inteiro cai
//    - exibirResultado(): string

// Seu código aqui:

// Teste:
// const equipeA: Personagem[] = [
//     new Guerreiro("Thor", 120, 25, 15),
//     new Mago("Merlin", 70, 40, 5),
// ];
//
// const equipeB: Personagem[] = [
//     new Arqueiro("Legolas", 90, 20, 8),
//     new Guerreiro("Kratos", 150, 22, 18),
// ];
//
// const batalha = new Batalha(equipeA, equipeB);
// const log = batalha.iniciarBatalha();
//
// log.forEach(linha => console.log(linha));
// console.log(batalha.exibirResultado());

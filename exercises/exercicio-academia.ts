/*
  ============================================================
  EXERCÍCIO — SISTEMA DE RESERVAS DE ACADEMIA
  ============================================================

  CONTEXTO
  --------
  Uma academia oferece aulas coletivas (spinning, yoga, musculação guiada,
  pilates) com horários fixos durante a semana. Alunos podem se inscrever
  nas aulas, cancelar inscrições e consultar seu histórico. A academia
  precisa controlar vagas, status das aulas e gerar relatórios básicos.


  O QUE O SISTEMA DEVE TER
  ------------------------

  1. MODALIDADE
     Representa o tipo da aula. Cada modalidade tem um nome, uma descrição
     curta e uma categoria. As categorias possíveis são apenas: "cardio",
     "força" e "flexibilidade". Nenhum campo é opcional.

  2. INSTRUTOR
     Tem nome, email e uma lista das modalidades que ele está habilitado
     a ministrar. Todo instrutor precisa de ao menos um campo de contato.

  3. AULA
     É o coração do sistema. Uma aula tem um identificador, uma modalidade,
     um instrutor responsável, um dia da semana (de "segunda" a "domingo"),
     um horário de início no formato string (ex: "07:00"), a capacidade
     máxima de alunos e um status. Os status possíveis são apenas:
     "agendada", "em_andamento", "concluida" e "cancelada". Nenhum campo
     é opcional — uma aula sempre precisa de todas essas informações para
     existir.

  4. ALUNO
     Tem identificador, nome, email e uma data de matrícula. O plano do
     aluno é opcional — nem todo aluno tem plano registrado. Os planos
     possíveis são: "basic", "premium" e "vip".

  5. INSCRIÇÃO
     Liga um aluno a uma aula. Tem seu próprio identificador, referência
     ao aluno, referência à aula, a data em que foi feita e um status
     próprio. Os status de inscrição possíveis são apenas: "ativa" e
     "cancelada". Uma inscrição nunca deve guardar só ids — ela deve
     guardar os objetos completos de aluno e aula.

  6. RESULTADO DE OPERAÇÃO
     Toda operação que pode falhar deve retornar um tipo que representa
     ou sucesso com dados, ou falha com mensagem de erro. Esse tipo deve
     ser genérico para funcionar com qualquer dado de retorno.


  O QUE CADA PARTE DEVE CONSEGUIR FAZER
  --------------------------------------

  REPOSITÓRIO GENÉRICO
  Implemente um repositório genérico de memória que funcione para qualquer
  entidade que tenha um campo id numérico. Ele deve conseguir salvar um
  item (inserindo ou atualizando), buscar por id retornando o item ou
  indicando ausência, listar todos os itens, remover por id informando se
  a remoção ocorreu e gerar ids sequenciais automaticamente.

  SERVIÇO DE AULAS
  Responsável pelas regras de negócio das aulas e inscrições. Deve
  conseguir criar uma aula nova com status inicial correto, inscrever um
  aluno em uma aula verificando se ainda há vagas disponíveis e se a aula
  está em um status que aceita inscrições, cancelar a inscrição de um aluno
  em uma aula específica, avançar o status de uma aula seguindo o fluxo
  natural (agendada → em_andamento → concluida) e cancelar uma aula — o
  que deve automaticamente cancelar todas as inscrições ativas dela.
  Todas essas operações devem retornar o tipo de resultado de operação.

  SERVIÇO DE RELATÓRIOS
  Separado do serviço de aulas, responsável apenas por consultas. Deve
  conseguir listar todas as aulas de um determinado dia da semana, buscar
  todas as inscrições ativas de um aluno pelo seu id, calcular quantas
  vagas ainda restam em uma aula e agrupar aulas pelo seu status atual,
  retornando um mapa onde cada status aponta para sua lista de aulas.


  RELAÇÃO ENTRE AS PARTES
  -----------------------

  Uma aula pertence a uma modalidade e a um instrutor — ela os referencia
  como objetos completos, não apenas ids. Uma inscrição pertence a um aluno
  e a uma aula — também como objetos completos. O repositório genérico é
  independente de qualquer entidade específica: tanto aulas quanto alunos
  quanto inscrições devem ser armazenados em instâncias separadas dele.
  Os dois serviços dependem dos repositórios, mas não um do outro. O tipo
  de resultado de operação é usado pelos dois serviços para comunicar
  sucesso ou falha de forma explícita no contrato de cada método.


  OBJETIVO FINAL
  --------------

  No final do arquivo, escreva um bloco de uso que simule o seguinte
  cenário sem usar console.log em excesso — só nos pontos importantes:

  Crie ao menos duas modalidades, um instrutor habilitado para ambas e
  três aulas em dias diferentes. Matricule dois alunos e faça inscrições
  em aulas distintas. Tente inscrever um aluno numa aula que já está
  lotada e verifique que o sistema recusa. Avance o status de uma aula
  até concluída. Cancele uma aula que tem inscrições ativas e verifique
  que as inscrições foram canceladas junto. Por fim, use o serviço de
  relatórios para mostrar as aulas agrupadas por status.

  Dicas de implementação (sem código):
  - Comece sempre pelos tipos antes de qualquer lógica
  - O fluxo de status da aula deve ser modelado com Record,
    igual ao que foi feito com StatusPedido no projeto anterior
  - Para contar vagas restantes, você vai precisar consultar as
    inscrições ativas daquela aula — pense em como o serviço de
    relatórios pode ajudar nisso, ou se o serviço de aulas precisa
    ter acesso ao repositório de inscrições
  - Cancelar uma aula em cascata é a parte mais desafiadora:
    você vai precisar iterar sobre inscrições e atualizar cada uma
  - Use Partial, Pick ou Omit onde fizer sentido nos tipos derivados,
    especialmente nos parâmetros de criação de aula e aluno
*/

import { group } from 'node:console';
import { KeyObject } from 'node:crypto';

// Escreva seu código abaixo desta linha

interface Repositorio<T extends { id: number }> {
    salvar(item: T): void;
    buscarPorId(id: number): T | undefined;
    remover(id: number): boolean;
    listarTodos(): T[];
    gerarId(): number;
}
class RepositorioMemoria<T extends { id: number }> implements Repositorio<T> {
    private dados: T[] = [];
    private proximoId: number = 1;

    salvar(item: T): void {
        const index = this.dados.findIndex((d) => d.id == item.id);
        if (index >= 0) {
            this.dados[index] = item;
            console.log('item atualizado no repositório');
            return;
        }
        this.dados.push(item);
        console.log("item salvo no repositório");
        return;
    }

    buscarPorId(id: number): T | undefined {
        const index = this.dados.findIndex((d) => d.id == id);
        if (index >= 0) {
            return this.dados[index];
        }
        console.log('Item não encontrado');
        return;
    }

    remover(id: number): boolean {
        const estadoAntes: number = this.dados.length;
        this.dados = this.dados.filter((d) => d.id != id);
        return this.dados.length < estadoAntes;
    }

    listarTodos(): T[] {
        return [...this.dados];
    }

    gerarId(): number {
        return this.proximoId++;
    }
}

interface Aluno {
    id: number;
    nome: string;
    email: string;
    dataMatricula: Date;
    plano?: 'basic' | 'vip' | 'premium';
}

interface Instrutor {
    nome: string;
    email: string;
    modalidades: Modalidade[];
    contato: string;
}

type StatusAula = 'agendada' | 'em_andamento' | 'concluida' | 'cancelada';

interface Aula {
    id: number;
    modalidade: Modalidade;
    instrutor: Instrutor;
    diaDaSemana: diaDaSemana;
    horarioInicio: string;
    capacidadeMaxima: number;
    status: StatusAula;
}

interface Modalidade {
    nome: string;
    descricao: string;
    categoria: 'cardio' | 'força' | 'flexibilidade';
}

interface Inscricao {
    id: number;
    aluno: Aluno;
    aula: Aula;
    dataFeita: Date;
    status: 'ativa' | 'cancelada';
}

type resultadoOperacao<T> =
    | { sucesso: true; dados: T }
    | { sucesso: false; mensagem: string };

class ServicoAulas {
    private repoAlunos = new RepositorioMemoria<Aluno>();
    private repoAulas = new RepositorioMemoria<Aula>();
    private repoInscricoes = new RepositorioMemoria<Inscricao>();

    constructor(
        repoAlunos: RepositorioMemoria<Aluno>,
        repoAulas: RepositorioMemoria<Aula>,
        repoInscricoes: RepositorioMemoria<Inscricao>,
    ) {
        this.repoAlunos = repoAlunos;
        this.repoAulas = repoAulas;
        this.repoInscricoes = repoInscricoes;
    }

    criarAula(
        modalidade: Modalidade,
        instrutor: Instrutor,
        capacidade: number,
        diaDaSemana: diaDaSemana,
        horarioInicio: string
    ): resultadoOperacao<Aula> {
        if (!instrutor.modalidades.includes(modalidade)) {
            return {
                sucesso: false,
                mensagem: 'Instrutor não habilitado para esta modalidade',
            };
        }

        const aulaCriada: Aula = {
            id: this.repoAulas.gerarId(),
            modalidade: modalidade,
            instrutor: instrutor,
            diaDaSemana: diaDaSemana,
            horarioInicio: horarioInicio,
            capacidadeMaxima: capacidade,
            status: 'agendada',
        };
        this.repoAulas.salvar(aulaCriada);
        return { sucesso: true, dados: aulaCriada };
    }

    inscreverAluno(
        aulaId: number,
        alunoId: number,
    ): resultadoOperacao<Inscricao> {
        const aula = this.repoAulas.buscarPorId(aulaId);
        const aluno = this.repoAlunos.buscarPorId(alunoId);

        if (!aula || !aluno) {
            return { sucesso: false, mensagem: 'Aula ou aluno não encontrado' };
        }

        if (aula.capacidadeMaxima <= 0) {
            return { sucesso: false, mensagem: 'Aula lotada' };
        }

        if (aula.status !== 'agendada') {
            return { sucesso: false, mensagem: 'Aula não está agendada' };
        }

        const inscricao: Inscricao = {
            id: this.repoInscricoes.gerarId(),
            aluno: aluno,
            aula: aula,
            dataFeita: new Date(),
            status: 'ativa',
        };

        this.repoInscricoes.salvar(inscricao);
        return { sucesso: true, dados: inscricao };
    }

    cancelarInscricao(inscricaoId: number): resultadoOperacao<Inscricao> {
        const inscricao = this.repoInscricoes.buscarPorId(inscricaoId);

        if (!inscricao) {
            return { sucesso: false, mensagem: 'Inscrição não existente' };
        }

        if (
            inscricao.aula.status == 'em_andamento' ||
            inscricao.aula.status == 'concluida'
        ) {
            return {
                sucesso: false,
                mensagem:
                    'Não é possível cancelar inscrição em uma Aula em andamento ou concluida',
            };
        }

        inscricao.status = 'cancelada';
        return { sucesso: true, dados: inscricao };
    }

    avancarStatus(aulaId: number): resultadoOperacao<Aula> {
        const aula = this.repoAulas.buscarPorId(aulaId);

        if (!aula) {
            return { sucesso: false, mensagem: 'Aula não encontrada' };
        }

        const fluxoStatus: Record<StatusAula, StatusAula | null> = {
            agendada: 'em_andamento',
            em_andamento: 'concluida',
            concluida: null,
            cancelada: null,
        };

        if (fluxoStatus[aula.status] == null) {
            return { sucesso: false, mensagem: 'Aula cancelada ou concluida' };
        }

        aula.status = fluxoStatus[aula.status]!;
        this.repoAulas.salvar(aula);
        return { sucesso: true, dados: aula };
    }

    //TODO: Realizar cancelamento de aula
}

type diaDaSemana = 'segunda' | 'terca' | 'quarta' | 'quinta' | 'sexta' | 'sabado' | 'domingo';

class ServicoRelatorios {
    constructor(
        private repoAulas: RepositorioMemoria<Aula>,
        private repoInscricoes: RepositorioMemoria<Inscricao>,
        private repoAlunos: RepositorioMemoria<Aluno>
    ) {}

    listarAulas(diaDaSemana: diaDaSemana): Aula[] {
        return this.repoAulas
            .listarTodos()
            .filter((aula) => aula.diaDaSemana === diaDaSemana);
    }

    buscarInscricoes(alunoId: number): Inscricao[] {
       const aluno = this.repoAlunos.buscarPorId(alunoId)
       return this.repoInscricoes.listarTodos().filter((inscricao) => inscricao.aluno == aluno)
    }

    listarAulasStatus(status: StatusAula): Aula[]{
      return this.repoAulas.listarTodos().filter((aula) => aula.status === status)
    }

    vagasRestantes(aulaId: number): number | undefined{
      if(this.repoAulas.buscarPorId(aulaId) == null){
         console.log('Aula não encontrada');
         return;
      }
      const aula = this.repoAulas.buscarPorId(aulaId)!;
      let capacidade = aula.capacidadeMaxima;
      const inscricoes = this.repoInscricoes.listarTodos().filter((inscricao) => inscricao.status = 'ativa')
      inscricoes.forEach((inscricao) => {
         if (inscricao.aula == aula){
            capacidade--;
         }
      })
      return capacidade;
    }
}

function main(): void {
    const repoAlunos = new RepositorioMemoria<Aluno>();
    const repoAulas = new RepositorioMemoria<Aula>();
    const repoInscricoes = new RepositorioMemoria<Inscricao>();
    const servico = new ServicoAulas(repoAlunos, repoAulas, repoInscricoes);
    const relatorios = new ServicoRelatorios(repoAulas, repoInscricoes, repoAlunos);

    const ginastica: Modalidade = {
        nome: 'Ginástica',
        descricao: 'Exercícios de flexibilidade e coordenação',
        categoria: 'flexibilidade',
    };
    const spinning: Modalidade = {
        nome: 'Spinning',
        descricao: 'Treinamento de alta intensidade em bicicleta estática',
        categoria: 'cardio',
    };

    const instrutor1: Instrutor = {
        nome: 'John Doe',
        email: 'john.doe@example.com',
        modalidades: [ginastica, spinning],
        contato: '119999-5555',
    };

    const instrutor2: Instrutor = {
        nome: 'Jane Smith',
        email: 'jane.smith@example.com',
        modalidades: [ginastica],
        contato: '119999-6666',
    };

    repoAlunos.salvar({
      id: repoAlunos.gerarId(),
      nome: 'Eduardo',
      email: 'abc@email.com',
      dataMatricula: new Date()
    })

    const aula1 = servico.criarAula(ginastica, instrutor2, 20, 'quarta', '08:00');
    const aula2 = servico.criarAula(spinning, instrutor1, 15, 'quinta', '09:00');
    const inscricaoEduardo = servico.inscreverAluno(1,1);

    console.log(relatorios.listarAulas('quinta'));
    console.log(relatorios.buscarInscricoes(1))
    console.log(relatorios.listarAulasStatus('agendada'))
    console.log(relatorios.vagasRestantes(1))
}

main();

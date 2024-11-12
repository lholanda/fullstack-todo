'use client'
import TarefaLista from "@/components/tarefa-lista";
import TarefaFormulario from "@/components/tarefa-form";
import useTarefas from "./hooks/use-tarefas";

export default function Home() {
  const { tarefas, adicionar, excluir } = useTarefas()

  const classNameHome =
    "flex flex-col items-center justify-center h-screen gap-4";
  return (
    <div className={classNameHome}>
      <h1>Lista de Tarefas</h1>
      <TarefaFormulario salvar={adicionar}/>  
      <TarefaLista 
         tarefas={tarefas} 
         excluir={excluir}/>
    </div>
  );
}





{/* CUIDADDO QUANDO IMPORTAR quando eu importei import { Tarefa } from "@/core/model/Tarefa"; */}

      // <div>
      //   <button className="botao azul hidden" onClick={executeObter}>
      //     Obter tarefas
      //   </button>
      // </div>//const myid = Id.gerar()

  /*
  async function executeSalvar(tarefa: Tarefa) {
    const novaTarefa = await salvarTarefa(tarefa) 
    // mapear primeiro as tarefas
    const _tarefas = tarefas.map((t:Tarefa)=>t)
    // incluir a novaTarefa em novasTarefas
    _tarefas.push(novaTarefa)
    setTarefas(_tarefas);
  }
  async function executeObter() {
    const tarefas = await obterTarefas();
    setTarefas(tarefas);
  }
  
  // exclui e atualiza as tarefas
  async function executeExclusao(id: string) {
    const tarefa = await excluirTarefa(id);
    //const tarefas = await obterTarefas();  // poderia fazer assim mas iria mistrura as responsabilidades
    const novasTarefas = tarefas.filter((x: Tarefa ) => x.id !== tarefa.id)
    setTarefas(novasTarefas);
  }
  
  */
  // quando inicia , a primeira coisa que faz é obter os dados

  
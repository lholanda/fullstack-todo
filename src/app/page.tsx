'use client'
import { useEffect, useState } from "react";
import salvarTarefa from "./backend/casos-uso/salvar-tarefa";
import obterTarefas from "./backend/casos-uso/obter-tarefas";
import excluirTarefa from "./backend/casos-uso/excluir-tarefa";
import TarefaLista from "@/components/tarefa-lista";

import TarefaFormulario from "@/components/tarefa-form";
import { Tarefa } from "@/core/model/Tarefa";



export default function Home() {

  const [tarefas, setTarefas] = useState<any>([]); // ou {}

  const classNameHome =
    "flex flex-col items-center justify-center h-screen gap-4";
  //const myid = Id.gerar()

  
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

  // quando inicia , a primeira coisa que faz é obter os dados
  useEffect(()=>{
    executeObter()
  },[])
  
  return (
    <div className={classNameHome}>
      <h1>Lista de Tarefas</h1>

      <TarefaFormulario salvar={executeSalvar}/>  
      <TarefaLista 
         tarefas={tarefas} 
         excluir={executeExclusao}/>
    </div>
  );
}





{/* CUIDADDO QUANDO IMPORTAR quando eu importei import { Tarefa } from "@/core/model/Tarefa"; */}

      // <div>
      //   <button className="botao azul hidden" onClick={executeObter}>
      //     Obter tarefas
      //   </button>
      // </div>
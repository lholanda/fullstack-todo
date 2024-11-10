'use client'
import { useEffect, useState } from "react";
import salvarTarefa from "./backend/casos-uso/salvar-tarefa";
import obterTarefas from "./backend/casos-uso/obter-tarefas";
import excluirTarefa from "./backend/casos-uso/excluir-tarefa";
import TarefaLista from "@/components/tarefa-lista";
import { Tarefa } from "@prisma/client";



export default function Home() {
  const classNameHome =
    "flex flex-col items-center justify-center h-screen gap-4";
  //const myid = Id.gerar()

  const [nome, setNome] = useState("");
  const [tarefas, setTarefas] = useState<any>([]); // ou {}
 
  async function executeSalvar() {
    const id = ''
    const novaTarefa = await salvarTarefa({ id, nome }) 
    tarefas.push(novaTarefa)
    setTarefas(tarefas);
 
    setNome('');
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
      <div className="p-2 gap-4">
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter'){
              executeSalvar()
            }
          }}
            
          className="text-black"
        />
      </div>
      <div className="flex gap-4">
        <button className="botao verde" onClick={executeSalvar}>
          Salva tarefa
        </button>
        <button className="botao azul hidden" onClick={executeObter}>
          Obter tarefas
        </button>
      </div>
      <TarefaLista 
         tarefas={tarefas} 
         excluir={executeExclusao}/>
    </div>
  );
}

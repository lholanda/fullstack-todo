import { useEffect, useState } from "react";
import { Tarefa } from "@/core/model/Tarefa";
import salvarTarefa from "../backend/casos-uso/salvar-tarefa";
import obterTarefas from "../backend/casos-uso/obter-tarefas";
import excluirTarefa from "../backend/casos-uso/excluir-tarefa";

export default function useTarefas(){
    const [tarefas, setTarefas] = useState<Tarefa[]>([]); 

    useEffect(()=>{
        carregarTarefas()
    },[])
    
    async function carregarTarefas(){
        const tarefas = await obterTarefas();
        setTarefas(tarefas);
    }

    async function adicionar(tarefa: Tarefa){
        const novaTarefa = await salvarTarefa(tarefa) 
        const _tarefas = tarefas.map((t:Tarefa)=>t)
        _tarefas.push(novaTarefa)
        setTarefas(_tarefas)

        // setTarefas([...tarefas, novaTarefa])
    }

    // exclui e atualiza as tarefas
    async function excluir(id: string) {
      const tarefa = await excluirTarefa(id);
      //const tarefas = await obterTarefas();  // poderia fazer assim mas iria mistrura as responsabilidades
      const novasTarefas = tarefas.filter((x: Tarefa ) => x.id !== tarefa.id)
     setTarefas(novasTarefas);
    }

    return {
        tarefas, 
        adicionar,
        excluir
    }
    
}



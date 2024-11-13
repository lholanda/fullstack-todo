import { useEffect, useState } from "react";
import { Tarefa } from "@/core/model/Tarefa";
import salvarTarefa from "../backend/casos-uso/salvar-tarefa";
import obterTarefas from "../backend/casos-uso/obter-tarefas";
import excluirTarefa from "../backend/casos-uso/excluir-tarefa";

export default function useTarefas(){
    const [tasks, setTasks] = useState<Tarefa[]>([]); 

    useEffect(()=>{

        readTask()
    },[])


    async function readTask(){
        const _tasks = await obterTarefas();
        setTasks(_tasks)
    }

    async function saveTask(tarefa: Tarefa){
       const _task = await salvarTarefa(tarefa) 
       setTasks([...tasks, _task])  
    }

    async function deleteTask(id: string){
        const _task = await excluirTarefa(id)
        const _newTasks = tasks.filter( (t) => (t.id !== _task.id) )
        setTasks(_newTasks)
    }

    


    return {
        tasks, 
        readTask,
        saveTask,
        deleteTask
    }
    
}

/*
// baixa performance, muito codigo
async function adicionar(tarefa: Tarefa){
    const novaTarefa = await salvarTarefa(tarefa) 
    const _tarefas = tarefas.map((t:Tarefa)=>t)
    _tarefas.push(novaTarefa)
    setTarefas(_tarefas)
}
*/


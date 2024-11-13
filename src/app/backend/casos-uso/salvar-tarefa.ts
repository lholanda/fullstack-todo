'use server'
import { Tarefa } from "@/core/model/Tarefa";
import Id from "@/core/utils/Id";
import RepositorioTarefa from "../db/RepositorioTarefa";

export default async function salvarTarefa(tarefa: Tarefa){

    if(!tarefa.nome){
        throw new Error('Nome da tarefa obrigatorio')
    }

    const novaTarefa = {
        id: Id.gerar(),
        concluida: false,
        ...tarefa
    }

    console.log(novaTarefa) // so imprime no terninal extenso .ts

    const repo = new RepositorioTarefa()

    // repo.inserir(novaTarefa) trans informacoes sobre a tarefa inserida em RepositorioTarefa
    return await repo.inserir(novaTarefa)  
}

// mexer com repo colocar 'use server'
import { Tarefa } from "@/core/model/Tarefa";
import RepositorioTarefa from "../db/RepositorioTarefa";

export default async function AlternarConclusaoTarefas(tarefa: Tarefa){
    const repo = new RepositorioTarefa()

    //const tarefaAtual = await repo.obterPorId(tarefa.id!)

    tarefa.concluida = true

    return await repo.alterar(tarefa)
}
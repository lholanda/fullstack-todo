'use server'
import RepositorioTarefa from "../db/RepositorioTarefa";

export default async function obterTarefas(){

    const repo = new RepositorioTarefa()

    // repo.inserir(novaTarefa) traz informacoes sobre a tarefa inserida em RepositorioTarefa
    return await repo.obterTodos()
}
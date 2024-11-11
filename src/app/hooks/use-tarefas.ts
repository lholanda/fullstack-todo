import { Tarefa } from "@/core/model/Tarefa";
import { useState } from "react";

export default function UseTarefas(){
    const [tarefas, setTarefas] = useState<Tarefa[]>([]); // ou {}


    // colocar todas as funcoes para acessar o bd aqui

    return {
        tarefas
    }
    
}
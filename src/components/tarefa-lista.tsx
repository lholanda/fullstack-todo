import { Tarefa } from "@/core/model/Tarefa";
import TarefaItem from "./tarefa-item";

// TarefaLista
export interface TarefaListaProps {
    tarefas: Tarefa[]
    excluir: (id: string) => void
    alternar: (tarefa: Tarefa) => void
}
export default function TarefaLista(props: TarefaListaProps) {
  const { tarefas, excluir } = props
  return (
    <ul className={`flex flex-col gap-1`}>
      {tarefas.map((tarefa: any) => (
        <TarefaItem
          key={tarefa.id}
          tarefa={tarefa}
          excluir={() => excluir(tarefa.id)}
          //lternar={()=>{}}
        />
      ))}
    </ul>
  );
}

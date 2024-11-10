
import { Tarefa } from "@/core/model/Tarefa";
import { IconTrash } from "@tabler/icons-react";

export interface TarefaItemProps {
  tarefa: Tarefa;
  excluir: (id: string | undefined) => void;
}


export default function TarefaItem(props: TarefaItemProps) {
    const classNameTarefaItem = 'flex items-center bg-zinc-900 rounded-md p-2 cursor-pointer gap-4'
  return (
    <li className={classNameTarefaItem}>
      <span className="flex-1">{props.tarefa.nome}</span>
      <IconTrash 
          className="text-red-500 hover:text-red-700" 
          onClick={()=>props.excluir(props.tarefa.id)}/>
    </li>
  );
}

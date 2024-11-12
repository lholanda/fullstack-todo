
import { Tarefa } from "@/core/model/Tarefa";
import { IconTrash } from "@tabler/icons-react";

export interface TarefaItemProps {
  tarefa: Tarefa;
  excluir: (tarefa: Tarefa) => void;
}


export default function TarefaItem(props: TarefaItemProps) {
    const classNameTarefaItem = 'flex items-center bg-zinc-900 rounded-md p-2 cursor-pointer gap-4'
    const { tarefa, excluir } = props
  return (
    <li className={classNameTarefaItem}>
      <span className="flex-1">{tarefa.nome}</span>
      <IconTrash 
          className="text-red-500 hover:text-red-700" 
          onClick={()=>excluir(tarefa)}/>
          {/* // o TarefaItem é quem dispara a execucao da exclusao */}
    </li>
  );
}

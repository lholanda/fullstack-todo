import { Tarefa } from "@/core/model/Tarefa";
import { useState } from "react";

export interface TarefaFormularioProps{
    salvar: (tarefa: Tarefa) => Promise<void>
}

export default function TarefaFormulario(props: TarefaFormularioProps) {
  const [nome, setNome] = useState<any>("");
  const { salvar } = props
  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            salvar({ nome });
            setNome('')
          }
        }}
        className="text-black h-10 text-base rounded-md"
      />
      <button className="botao verde" 
          onClick={() => {
            salvar({ nome })
            setNome('')
        }}>
        Salva tarefa
      </button>
    </div>
  );
}

/*
 */
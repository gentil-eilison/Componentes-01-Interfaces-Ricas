import TaskCard from "@/components/TaskCard";
import TaskForm from "@/components/TaskForm";

export default function Home() {
  return (
    <main className="max-w-3/4 mx-auto">
      <header>
        <h1 className="text-center text-2xl text-black font-bold">Lista de Tarefas</h1>
      </header>
      <TaskForm/>

      <div id="task-list" className="flex justify-between m-10">
        <TaskCard title="Exemplo de tarefa" body="Esta é uma tarefa de exemplo. Você pode marcar como concluída, editar ou excluir."/>
        <TaskCard title="teste" body="tsteste"/>
      </div>
    </main>
  );
}

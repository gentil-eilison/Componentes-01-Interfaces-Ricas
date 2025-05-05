"use client"

import TaskCard from "@/components/TaskCard";
import TaskForm from "@/components/TaskForm";

import { useState } from "react";

export interface Task {
    title: string,
    description: string
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask(task: Task) {
    setTasks([...tasks, task])
  }

  return (
    <main className="max-w-3/4 mx-auto">
      <header>
        <h1 className="text-center text-2xl text-black font-bold">Lista de Tarefas</h1>
      </header>
      <TaskForm handleAddTask={addTask}/>

      <div id="task-list" className="grid grid-cols-2 gap-6 m-10">
        <TaskCard title="Exemplo de tarefa" description="Esta é uma tarefa de exemplo. Você pode marcar como concluída, editar ou excluir."/>
        <TaskCard title="teste" description="tsteste"/>
        {tasks.map((task, idx) => <TaskCard key={idx} title={task.title} description={task.description}/>)}
      </div>
    </main>
  );
}

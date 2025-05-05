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

  function deleteTask(taskIdx: number) {
    setTasks(prevState => {
      return prevState.filter((task, idx) => idx != taskIdx);
    }); 
  }

  return (
    <main className="max-w-3/4 mx-auto">
      <header>
        <h1 className="text-center text-2xl text-black font-bold">Lista de Tarefas</h1>
      </header>
      <TaskForm handleAddTask={addTask}/>
      <div id="task-list" className="grid grid-cols-2 gap-6 m-10">
        {tasks.map((task, idx) => <TaskCard handleDelete={() => deleteTask(idx)} key={idx} title={task.title} description={task.description}/>)}
      </div>
    </main>
  );
}

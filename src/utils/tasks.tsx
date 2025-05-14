import { Task } from "@/app/page";

export default function updatedTasksLocalStorage(tasks: Task[]) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
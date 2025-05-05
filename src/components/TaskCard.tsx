import { Task } from "@/app/page";

import { SquarePen, Trash2 } from "lucide-react"
import { useRef } from "react";
import { useForm } from "react-hook-form";

interface TaskCardProps {
    description: string,
    title: string,
    idx: number,
    handleDelete: () => void;
    handleUpdate: (taskIdx: number, updatedTask: Task) => void;
}

interface UpdateTaskFormInputs {
    description: string,
    title: string
}

export default function TaskCard({ idx, description, title, handleDelete, handleUpdate }: TaskCardProps) {
    const { register, handleSubmit } = useForm<UpdateTaskFormInputs>({
        defaultValues: { title, description }
    });
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    function showDialog() {
        dialogRef?.current?.showModal();
    }

    function handleTaskUpdate(updatedTask: Task) {
        handleUpdate(idx, updatedTask);
        dialogRef?.current?.close();
    }

    return (
        <>
        <div className="border-solid border-2 border-gray-200 rounded gap-5 text-gray-500 p-8 w-lg">
            <header className="flex items-center justify-between mb-3">
                <div className="flex gap-2">
                    <input type="checkbox" name="done" id="done" />
                    <h2 className="font-bold text-xl text-black">{ title }</h2>
                </div>
                <div className="flex gap-5">
                    <SquarePen onClick={showDialog} size={16} color="black" className="hover:cursor-pointer"/>
                    <Trash2 onClick={handleDelete} size={16} color="black" className="hover:cursor-pointer"/>
                </div>
            </header>
            {description}
        </div>
        <dialog ref={dialogRef} id="update-task-dialog" className="text-gray-500 border-solid border-gray-200 border-2 rounded mx-auto my-auto w-xl">
            <form className="flex flex-col gap-6 p-10" method="dialog" onSubmit={handleSubmit(handleTaskUpdate)}>
                <input className="border-solid border-gray-200 border-2 rounded p-2 focus:outline-none" type="text" id="title" {...register("title")}/>
                <textarea className="border-solid border-gray-200 border-2 rounded p-2 focus:outline-none" id="description" {...register("description")}/>
                <button className="flex justify-center items-center py-2 mt-2 gap-2 bg-black text-white font-bold rounded hover:cursor-pointer" type="submit"><SquarePen color="white" size={16}/> Editar Tarefa</button>
            </form>
        </dialog>
        </>
    )
}
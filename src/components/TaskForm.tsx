import { Plus } from "lucide-react"

export default function TaskForm() {
    return (
        <form action="" method="post" className="flex flex-col gap-6 border-solid border-gray-200 border-2 m-10 p-10 rounded">
            <h2 className="font-bold text-xl">Nova Tarefa</h2>
            <fieldset className="flex flex-col gap-5 text-gray-500">
                <input 
                    type="text" 
                    name="title" 
                    id="title" 
                    required 
                    placeholder="Título da tarefa"
                    className="border-solid border-gray-200 border-2 rounded p-2 focus:outline-none"
                />
                <textarea
                    name="description" 
                    id="description" 
                    placeholder="Descrição (opcional)"
                    className="border-solid border-gray-200 border-2 rounded p-2 focus:outline-none"
                ></textarea>
            </fieldset>
            <button className="flex justify-center items-center py-2 mt-2 gap-2 bg-black text-white font-bold rounded hover:cursor-pointer" type="submit"><Plus color="white" size={16}/> Adicionar Tarefa</button>
        </form>
    )
}
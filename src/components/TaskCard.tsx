import { SquarePen, Trash2 } from "lucide-react"


interface TaskCardProps {
    description: string,
    title: string
}

export default function TaskCard({ description, title }: TaskCardProps) {
    return (
        <div className="border-solid border-2 border-gray-200 rounded gap-5 text-gray-500 p-8 w-lg">
            <header className="flex items-center justify-between mb-3">
                <div className="flex gap-2">
                    <input type="checkbox" name="done" id="done" />
                    <h2 className="font-bold text-xl text-black">{ title }</h2>
                </div>
                <div className="flex gap-5">
                    <SquarePen size={16} color="black" className="hover:cursor-pointer"/>
                    <Trash2 size={16} color="black" className="hover:cursor-pointer"/>
                </div>
            </header>
            {description}
        </div>
    )
}
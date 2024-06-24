"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { TodoSchema, TodoSchemaType } from "./schema.todo";
import { todoStore } from "./store.todo";
import { useRouter } from "next/navigation";


interface AddTodoProps {
    todo: string
}

const useAddTodo = () => {
    const { toast } = useToast()
    const router = useRouter()
    const addTodo = todoStore((state: any) => state.addTodo)

    const form = useForm<TodoSchemaType>({
        resolver: zodResolver(TodoSchema),
        mode: "onBlur"
    });

    const onSubmit = async (values: AddTodoProps, e: any) => {
        addTodo(values?.todo)
        form.reset();
    }
    return {
        form,
        onSubmit
    }
}

export default useAddTodo

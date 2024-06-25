"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { TodoSchema, TodoSchemaType } from "./schema.todo";
import { todoStore } from "./store.todo";
import { handleResponse } from "@/lib/global-error-handler";


interface AddTodoProps {
    todo: string
}

const useAddTodo = () => {
    const { toast } = useToast()
    const { editData, updateTodo, setEditData, addTodo } = todoStore((state: any) => state);

    const form = useForm<TodoSchemaType>({
        resolver: zodResolver(TodoSchema),
        mode: "onBlur"
    });

    const onSubmit = async (values: AddTodoProps) => {

        if (editData) {
            updateTodo(values, editData?.id);
            setEditData(null);
        } else {
            addTodo(values?.todo);
        }

        handleResponse({ success: true },
            editData ? "Todo Updated Successfully" : "Todo Added Successfully",
            toast);

        form.setValue('todo', '');
    }

    const handleSubmit = form.handleSubmit(onSubmit);

    return {
        form,
        handleSubmit
    }
}

export default useAddTodo

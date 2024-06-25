"use client";
import FormFieldInput from '@/components/common/formFieldInput'
import { Button } from '@/components/ui/button'
import React, { useEffect } from 'react'
import useAddTodo from './hook.todo'
import { Form } from '@/components/ui/form';
import { TodoState, todoStore } from './store.todo';

const TodoForm = () => {

    const { editData } = todoStore((state: TodoState) => state);
    const { form, handleSubmit } = useAddTodo()

    useEffect(() => {
        form.setValue("todo", editData?.todo)
    }, [editData])

    return (
        <Form {...form}>
            <form
                onSubmit={handleSubmit}
                className=" space-y-8"
            >
                <div className="grid gap-6 rounded-lg border p-4 w-full xl:w-[500px] shadow-md mx-auto mt-[20]">
                    <FormFieldInput
                        name={"todo"}
                        type={"text"}
                        label={"Enter your Todo"}
                        placeholder={"Eg : Skydiving"}
                        control={form.control}
                        errors={form.formState.errors}
                        touched={form.formState.touchedFields}
                    />
                    <Button
                        type='submit'
                        size='default'
                        className='w-fit flex justify-end'
                        text={editData ? "Update Todo" : "Add Todo"}
                    />
                </div>
            </form>
        </Form>
    )
}

export default TodoForm

"use client";
import FormFieldInput from '@/components/common/formFieldInput'
import { Button } from '@/components/ui/button'
import React from 'react'
import useAddTodo from './hook.todo'
import { Form } from '@/components/ui/form';

const TodoForm = () => {
    const { form, onSubmit } = useAddTodo()
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className=" space-y-8"
            >
                <div className="grid gap-6 rounded-lg border p-4 w-[500px] shadow-md mx-auto mt-[20]">
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
                        isSubmitting={form.formState.isSubmitting}
                        type='submit'
                        size='default'
                        className='w-fit flex justify-end'
                        text="Add Todo"
                    />
                </div>
            </form>
        </Form>
    )
}

export default TodoForm

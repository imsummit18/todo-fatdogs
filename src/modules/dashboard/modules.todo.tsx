"use client";
import { Delete, Edit } from '@/assets/icons';
import BreadCumb from '@/components/common/breadcumb'
import { DataTable } from '@/components/common/data-table';
import TableSkeleton from '@/components/common/skeleton.table';
import { useToast } from '@/components/ui/use-toast';
import { handleResponse } from '@/lib/global-error-handler';
import TodoForm from '@/modules/dashboard/form.todo'
import { Todo, TodoState, todoStore } from '@/modules/dashboard/store.todo'
import React from 'react'


const Dashboard = () => {
    const { toast } = useToast()
    const { todos, deleteTodo, loading, setEditData } = todoStore((state: TodoState) => state);

    const handleDelete = (id: Partial<Todo>) => {
        deleteTodo(id);
        handleResponse({ success: true }, "Todo Deleted Successfully", toast)
    }

    const handleEdit = (row: Todo) => {
        setEditData(row)
    }

    return (
        <>
            <div className='w-full  h-[400px] '>
                <BreadCumb
                    {...{
                        title: 'Dashboard',
                        subTitle: 'Add Todo'
                    }}
                />
                <div className='flex  flex-col  xl:flex-row item-center justify-center mt-4 '>
                    <TodoForm />
                    {
                        loading ? <TableSkeleton /> :
                            <div className='w-full shadow xl:ml-10 p-4 border border-gray-200 mt-10 xl:mt-0'>
                                <p className='font-semibold text-xl'>Todo List ({todos.length})</p>
                                <div className='mt-3'>
                                    <DataTable
                                        columns={[
                                            {
                                                header: "S.N",
                                                accessorKey: "",
                                                cell: ({ row }: { row: { index: number } }) =>
                                                    <div>{row.index + 1}</div>
                                            },
                                            {
                                                header: "Title",
                                                accessorKey: "todo"
                                            },
                                            {
                                                header: "Action",
                                                accessorKey: "",
                                                cell: (row: any) => {
                                                    return (
                                                        <div className='flex '>
                                                            <p className='text-primary-300 cursor-pointer  border p-[1px] border-primary-300 rounded'
                                                                onClick={() => handleEdit(row.row.original)}
                                                            >
                                                                <Edit size={22} />
                                                            </p>
                                                            <p className='text-red-500 cursor-pointer ml-3 border p-[1px] border-[red] rounded'
                                                                onClick={() => handleDelete(row.row.original.id)}
                                                            ><Delete size={22} /></p>
                                                        </div>
                                                    )
                                                }

                                            },
                                        ]}
                                        data={todos}
                                    />

                                </div>
                            </div>
                    }
                </div>
            </div >
        </>
    )
}

export default Dashboard

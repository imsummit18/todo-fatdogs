"use client";
import BreadCumb from '@/components/common/breadcumb'
import { DataTable } from '@/components/common/data-table';
import TodoForm from '@/modules/dashboard/form.todo'
import { todoStore } from '@/modules/dashboard/store.todo'
import React from 'react'


// const TodosColumns =
//     [
//         {
//             header: "S.N",
//             accessorKey: "",
//             cell: ({ row }: { row: { index: number } }) =>
//                 <div>{row.index + 1}</div>
//         },
//         {
//             header: "Title",
//             accessorKey: "todo"
//         },
//         {
//             header: "Action",
//             accessorKey: "",
//             cell: (row: any) => {
//                 console.log("The row is", row)
//                 return (
//                     <div className='flex justify-center'>
//                         <p className='text-primary-300 cursor-pointer'>Edit</p>
//                         <p className='text-red-500 cursor-pointer ml-3'
//                             onClick={() => deleteTodo(row.row.id)}
//                         >Delete</p>
//                     </div>
//                 )
//             }

//         },
//     ]

const Dashboard = () => {
    const { todos, deleteTodo } = todoStore((state: any) => state);
    return (
        <>
            <div className='w-full  h-[400px] '>

                <BreadCumb
                    {...{
                        title: 'Dashboard',
                        subTitle: 'Add Todo'
                    }}
                />

                <div className='flex item-center justify-center mt-4 '>
                    <TodoForm />
                    <div className='w-full shadow ml-10 p-4'>
                        <p className='font-semibold text-xl'>Todo List</p>
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
                                            console.log("The row is", row)
                                            return (
                                                <div className='flex justify-center'>
                                                    <p className='text-primary-300 cursor-pointer'>Edit</p>
                                                    <p className='text-red-500 cursor-pointer ml-3'
                                                        onClick={() => deleteTodo(row?.row?.original?.id)}
                                                    >Delete</p>
                                                </div>
                                            )
                                        }

                                    },
                                ]}
                                data={todos}
                            />

                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Dashboard

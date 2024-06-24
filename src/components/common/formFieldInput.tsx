import React from 'react'
import { Control } from 'react-hook-form';
import { Input } from '../ui/input';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';

interface FormFieldInputProps {
    name?: any;
    type?: string;
    label?: string;
    placeholder?: string;
    control?: Control<any>;
    disabled?: boolean;
    errors?: any;
    touched?: any;
    className?: string,
    isOptional?: boolean
}

const FormFieldInput: React.FC<FormFieldInputProps> = ({ name, isOptional, touched, type, errors, label, placeholder, control, disabled }) => {
    return (

        <div className='w-full 2xl:w-[521px] mb-5'>
            <FormField
                control={control}
                name={name}
                render={({ field }: { field: any }) => {
                    return (
                        <FormItem>
                            <FormLabel className="font-medium  text-base md:text-lg ">{label}<span className='text-destructive ml-1'>{!isOptional && "*"}</span></FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    type={type}
                                    placeholder={placeholder}
                                    disabled={disabled}
                                    errors={errors}
                                    touched={touched}
                                    name={name}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )
                }}
            />
        </div>

    )
}

export default FormFieldInput





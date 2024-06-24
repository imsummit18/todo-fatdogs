"use client";
import React, { useState } from 'react'
import { Control } from 'react-hook-form';
import { HideIcon, ShowIcon } from '@/assets/icons';
import { Input } from '../ui/input';
import Svg from './svg';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';

interface FormFieldInputProps {
    name?: any;
    type?: string;
    label?: string;
    placeholder?: string;
    control?: Control<any>;
    disabled?: boolean;
    errors?: any,
    touched?: any
}

const FormFieldPassword: React.FC<FormFieldInputProps> = ({ name, type, touched, errors, label, placeholder, control, disabled }) => {
    const [isVisble, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisble);
    }

    return (

        <div className='w-full 2xl:w-[521px] mb-5'>
            <FormField
                control={control}
                name={name}
                render={({ field }: { field: any }) => {
                    return (
                        <FormItem>
                            <FormLabel className="font-medium  text-base md:text-lg ">{label}<span className='text-destructive ml-1'>*</span></FormLabel>
                            <FormControl>
                                <div className='relative'>
                                    <Input
                                        {...field}
                                        type={isVisble ? 'text' : 'password'}
                                        placeholder={placeholder}
                                        disabled={disabled}
                                        name={name}
                                        errors={errors}
                                        touched={touched}
                                        successClassName='right-12'
                                        className={errors[name] ? 'border-destructive' : !errors[name] && touched[name] && 'border-[1.5px] border-success-300'}
                                    />
                                    <div
                                        onClick={handleClick}
                                        className='absolute cursor-pointer  right-3 top-4'>
                                        <Svg
                                            img={isVisble ? ShowIcon : HideIcon}
                                            height={20}
                                            width={20}
                                        />
                                    </div>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )
                }}
            />
        </div>

    )
}

export default FormFieldPassword





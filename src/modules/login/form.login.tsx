"use client";
import { useRouter } from 'next/navigation';
import React from 'react'
import Link from 'next/link';
import { Form } from '@/components/ui/form';
import FormFieldPassword from '@/components/common/formFieldPassword';
import useLogin from './hook.login';
import AuthHeader from './components/header.auth';
import FormFieldInput from '@/components/common/formFieldInput';
import { Button } from '@/components/ui/button';
import { generateRandomCredentials } from '@/lib/common.utilis';


const Login = () => {
    const router = useRouter()

    const handleGeneratePassword = () => {
        const { password } = generateRandomCredentials()
        form.setValue("password", password)
    }

    const { form, onSubmit } = useLogin({
        onSuccess: () => router.push("/dashboard")
    })
    return (
        <>
            <AuthHeader
                title="Login"
                description="Please enter your email address and password below to log in "
            />
            <div className='mt-8 md:mt-10'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} >
                        <FormFieldInput
                            name={"email"}
                            type={"text"}
                            label={"Enter your Email"}
                            placeholder={"Eg : sumitghimre018@gmail.com"}
                            control={form.control}
                            errors={form.formState.errors}
                            touched={form.formState.touchedFields}
                        />

                        <FormFieldPassword
                            name={"password"}
                            label={"Enter your password"}
                            placeholder={"Password"}
                            control={form.control}
                            errors={form.formState.errors}
                            touched={form.formState.touchedFields}
                        />
                        <div className='flex  justify-end cursor-pointer '>
                            <p className='bg-primary  rounded  p-1 px-3 w-fit text-[white]'
                                onClick={handleGeneratePassword}
                            >Generate</p>
                        </div>

                        <div className='my-6 flex justify-between w-full font-medium md:font-semibold text-sm xl:text-base 2xl:text-lg text-primary'>
                            <Link href="">
                                Forget your password?
                            </Link>
                        </div>
                        <Button
                            isSubmitting={form.formState.isSubmitting}
                            type='submit'
                            size='default'
                            className='w-full'
                            text="Login"
                        />
                    </form>
                </Form>

            </div>

            <div className='mt-5 2xl:text-lg text-center '>
                New to this platform? <Link href="" className='text-primary font-semibold '>Sign Up</Link>
            </div>

        </>
    )
}

export default Login

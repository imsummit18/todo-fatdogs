"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginSchema, LoginSchemaType } from "./schema.auth";
import { login } from "./action.auth";
import { useToast } from "@/components/ui/use-toast";
import { setCookie } from "cookies-next";
import { handleResponse } from "@/lib/global-error-handler";

interface LoginProps {
    onSuccess: () => void
}

const useLogin = ({ onSuccess }: LoginProps) => {
    const { toast } = useToast()

    const form = useForm<LoginSchemaType>({
        resolver: zodResolver(LoginSchema),
        mode: "onBlur"
    });

    const onSubmit = async (values: LoginSchemaType) => {
        const res = await login(values);
        console.log("the res in login page is", res)
        // onSuccess?.()
        if (res.success) {
            setCookie("token", res.response.access)
            onSuccess?.();
            handleResponse(res, "User Logged in Successfully", toast)
        }
        else {
            handleResponse(res?.response, res?.message, toast)
        }
    }
    return {
        form,
        onSubmit
    }
}

export default useLogin

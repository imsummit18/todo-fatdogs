import { z } from "zod";

const LoginSchema = z.object({
    email: z.string().email({ message: "Email is required" }).refine(value =>
        /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value),
        { message: "Invalid email format" }
    ),
    password: z.string().min(8, { message: "Password must be at least 8 characters" })
})



const RegisterSchema = z.object({
    email: z.string().email({ message: "Email is required" }).refine(value =>
        /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value),
        { message: "Invalid email format" }
    ),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z.string().min(8, { message: "Password must be at least 8 characters" })
})


type LoginSchemaType = z.infer<typeof LoginSchema>
type RegisterSchemaType = z.infer<typeof RegisterSchema>

export {
    LoginSchema,
    RegisterSchema,
    type LoginSchemaType,
    type RegisterSchemaType
}




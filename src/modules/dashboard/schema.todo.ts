import { z } from "zod";

const TodoSchema = z.object({
    todo: z.string().min(3, { message: "Todo must be at least 3 characters" })
})

type TodoSchemaType = z.infer<typeof TodoSchema>

export { TodoSchema, type TodoSchemaType }
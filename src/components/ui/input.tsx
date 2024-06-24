import * as React from "react"

import { cn } from "@/lib/utils"
import { CircleCheckBig } from "lucide-react"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    errors?: any
    touched?: any
    name?: any,
    successClassName?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, name, type, errors, touched, ...props }, ref) => {
        return (
            <div className="relative">
                <input
                    type={type}
                    className={cn(
                        "flex h-10 w-full rounded-md border border-border border-opacity-35  bg-background p-6  px-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus:border-[1px] focus:border-primary  disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-base ",
                        className
                    )}
                    ref={ref}

                    {...props}
                />
            </div>


        )
    }
)
Input.displayName = "Input"

export { Input }



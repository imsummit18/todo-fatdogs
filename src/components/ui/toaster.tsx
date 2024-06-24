"use client"

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { useEffect } from "react"


export function Toaster() {

  const { toasts, dismiss } = useToast()

  useEffect(() => {
    const timers = toasts.map((toast) =>
      setTimeout(() => {
        dismiss(toast.id)
      }, 3000)
    )

    return () => {
      timers.forEach((timer) => clearTimeout(timer))
    }
  }, [toasts, dismiss])

  return (
    <ToastProvider>
      {/*@ts-ignore*/}
      {toasts.map(function ({ id, icon, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className=" flex items-center space-x-3">
              {icon}
              <div>
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </div>
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}

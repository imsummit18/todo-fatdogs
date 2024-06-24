"use server";
import { AUTH_ROUTES } from "@/lib/api.routes";
import { Post } from "@/http.utilis";
import { cookies } from "next/headers";

export const login = async (data: any) => {
    return await Post({
        url: AUTH_ROUTES.LOGIN,
        data
    });
}


export const logout = async () => {
    const cookie = cookies();
    cookie.delete("token");
    cookie.delete("refreshToken");
}
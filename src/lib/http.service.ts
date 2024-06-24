"use server";
import { cookies } from "next/headers";

export async function getHeaders() {
    const cookie = cookies();
    const accessToken: any = cookie?.get('token')?.value;
    let headers: {
        "Content-Type": string;
        Accept: string;
        Authorization?: string;
    } = {
        "Content-Type": "application/json",
        Accept: "application/json",
    };

    if (await checkSession()) {
        headers = {
            ...headers,
            Authorization: `Bearer ${accessToken}`,
        };
    }
    return headers;
}

export async function checkSession() {
    const cookie = cookies();
    const accessToken: any = cookie?.get('token')?.value;
    if (accessToken) return true;
    return false
} 
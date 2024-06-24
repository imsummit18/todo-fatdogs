

import { NextRequest, NextResponse } from "next/server";
import { isAuthRoute, isProtectedRoute } from "./lib/common.utilis";

export function middleware(request: NextRequest, response: NextResponse) {
    const nextResponse = NextResponse.next();
    const path = request.nextUrl.pathname;
    const accessToken = request?.cookies.get('token')?.value;
    console.log("accessToken", accessToken)
    const url = request.nextUrl.clone();


    if ((path === '/' && (!accessToken || accessToken === undefined)) || (isProtectedRoute(path) && (!accessToken || accessToken === undefined))
    ) {
        url.pathname = "/login";
        return NextResponse.redirect(url);
    }

    if ((path === '/' && accessToken) || (isAuthRoute(path) && accessToken)
    ) {
        url.pathname = "/dashboard";
        return NextResponse.redirect(url);
    }

    return nextResponse;
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};
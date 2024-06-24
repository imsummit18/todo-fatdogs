import { DASHBOARD_ROUTES } from "./routes";

export const generateRandomString = (length: number) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};


export const generateRandomCredentials = () => {
    const randomString = generateRandomString(10);
    return {
        password: randomString,
    }
}

export function isAuthRoute(path: string) {
    const authRoutes = [
        '/login',
    ]
    return authRoutes.includes(path)
}


export const isProtectedRoute = (path: string) => {
    return DASHBOARD_ROUTES.find(route => route.path === path)?.protected
}



import { getHeaders } from "./lib/http.service";



export const parseJson = (value: string) => {
    try {
        return JSON.parse(value);
    } catch (e) {
        return value;
    }
};

const finalizedData = async (res: any) => {
    try {
        const { status } = res || {};
        const response = await res?.json();
        const { message } = response || {};
        if (status > 199 && status < 300) {
            return {
                message: message || "Success",
                response: response?.data || response,
                success: true,
            };
        }
        if (status >= 401 && status <= 403) {
            const parsedMessage = parseJson(message);
            return {
                message: parsedMessage || "Unauthorized",
                response: response || "Unauthorized",
                success: false,
            };
        }
        return {
            message: message || "Error",
            response: response?.data || "Something went wrong",
            success: false,
        };
    } catch (error) {
        return {
            message: "Error",
            response: "Something went wrong",
            success: false,
        };
    }
};

interface PostProps {
    url: string;
    data: {
        [key: string]: any
    };
}

export const Post = async (props: PostProps) => {
    try {
        const res = await fetch(props.url, {
            method: 'POST',
            headers: await getHeaders(),
            body: JSON.stringify(props.data)
        })
        return finalizedData(res);

    } catch (e) {
        return {
            message: "Error",
            response: "Something went wrong",
            success: false,
        };
    }
}
import axios from "axios";

type ResponseProps = {
    status: number;
    description: string;
    data?: any;
    title?: string
}

export const http = axios.create({
    baseURL: "/",
    headers: {
        "Content-Type": "application/json",
    },
});

export const ResponseInstance = ({ status, data, description, title }: ResponseProps) =>
    new Response(JSON.stringify({ status, data: data ?? undefined, description, title }));

export async function serverFetch(
    url: string,
    options: RequestInit = {},
    timeout = 10000
): Promise<Response> {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(url, {
            ...options,
            signal: controller.signal,
        });
        return response;
    } catch (error) {
        if ((error as Error).name === 'AbortError') {
            throw new Error('请求超时');
        }
        throw error;
    } finally {
        clearTimeout(id);
    }
}
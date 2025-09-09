import { serverFetch, ResponseInstance } from "@/utils/http";

export async function GET(request: any) {
    const requestUrl = new URL(request.url);
    const query = requestUrl.searchParams.get('query');

    if(!query) return ResponseInstance({ status: -1, title: "query not found", description: "" });

    try {
        const url = `${process.env.FINNHUB_SERVER}/search-symbol?query=${query}&apikey=${process.env.FINNHUB_APIKEY}`;
        const response = await serverFetch(url);

        if(!response.ok) {
            return ResponseInstance({ status: 500, title: "Error Message", description: "" });
        }

        const data = await response.json();
        return ResponseInstance({ status: 0, data, title: "success", description: "" });
    } catch (err: any) {
        return ResponseInstance({status: 500, title: err.message, description: "" });
    }
}

export async function POST(req: Request) {
    const requestData = await req.json();
    return ResponseInstance({status: 0, title: "success", description: ""});
}
import { serverFetch, ResponseInstance } from "@/utils/http";

export async function GET(request: any) {
    const requestUrl = new URL(request.url);
    const query = requestUrl.searchParams.get('query');

    if(!query) return ResponseInstance({ status: -1, title: "query not found", description: "" });

    try {
        const url = `${process.env.FINNHUB_SERVER}/search-symbol?query=${query}&apikey=${process.env.FINNHUB_APIKEY}`;
        const response = await serverFetch(url);
        const data = await response.json();
        
        if("Error Message" in data) {
            return ResponseInstance({ status: -1, title: data["Error Message"], description: "" });
        }

        if(!data.length) {
            return ResponseInstance({ status: -1, title: "404", description: "" });
        }

        return ResponseInstance({ status: 0, data, title: "success", description: "" });
    } catch (err: any) {
        return ResponseInstance({status: 500, title: err.message, description: "" });
    }
}

export async function POST(req: Request) {
    const requestData = await req.json();
    return ResponseInstance({status: 0, title: "success", description: ""});
}
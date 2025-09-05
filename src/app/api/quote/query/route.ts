import { serverFetch, ResponseInstance } from "@/utils/http";

export async function GET(request: any) {
    const requestUrl = new URL(request.url);
    const symbols = requestUrl.searchParams.get('symbols');

    if(!symbols) return ResponseInstance({ status: -1, title: "symbols not found", description: "" });

    const url = `${process.env.FINNHUB_SERVER_V3}/quote/${symbols}?apikey=${process.env.FINNHUB_APIKEY}`;
    try {
        const response = await serverFetch(url);
        const data = await response.json();

        if("Error Message" in data) {
            return ResponseInstance({ status: 500, title: data["Error Message"], description: "" });
        }

        if(!data.length) {
            return ResponseInstance({ status: 500, title: "404", description: "" });
        }

        return ResponseInstance({ status: 0, data, title: "success", description: "success" });
    } catch (err: any) {
        return ResponseInstance({status: 500, title: err.message, description: "" });
    }
}

export async function POST(req: Request) {
    const requestData = await req.json();
    return ResponseInstance({status: 0, title: "success", description: ""});
}
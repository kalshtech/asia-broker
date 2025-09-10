import { serverFetch, ResponseInstance } from "@/utils/http";

export async function GET(request: any) {
    const requestUrl = new URL(request.url);
    const symbols = requestUrl.searchParams.get('symbols');

    if(!symbols) return ResponseInstance({ status: -1, title: "symbols not found", description: "" });

    const url = `${process.env.FMP_SERVER_V3}/quote/${symbols}?apikey=${process.env.FMP_APIKEY}`;
    // const url = `${process.env.FMP_SERVER}/quote?symbol=${symbols}&apikey=${process.env.FMP_APIKEY}`;

    try {
        const response = await serverFetch(url);

        if(!response.ok) {
            return ResponseInstance({ status: 500, title: "Error Message", description: "" });
        }

        const data = await response.json();
        return ResponseInstance({ status: 0, data, title: "success", description: "success" });
    } catch (err: any) {
        return ResponseInstance({status: 500, title: err.message, description: "" });
    }
}

export async function POST(req: Request) {
    const requestData = await req.json();
    return ResponseInstance({status: 0, title: "success", description: ""});
}
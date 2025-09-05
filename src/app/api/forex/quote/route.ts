import { serverFetch, ResponseInstance } from "@/utils/http";

export async function GET(request: any) {
    const requestUrl = new URL(request.url);
    const symbols = requestUrl.searchParams.get('symbols');
    let url = `${process.env.FINNHUB_SERVER_V3}/fx/${symbols}?apikey=${process.env.FINNHUB_APIKEY}`;

    try {
        const response = await serverFetch(url);
        const data = await response.json();

        return ResponseInstance({status: 0, data: data, title: "success", description: ""});
    } catch (err: any) {
        return ResponseInstance({ status: 500, title: err.message, description: "" });
    }
}
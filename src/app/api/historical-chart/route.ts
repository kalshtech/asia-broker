import { serverFetch, ResponseInstance } from "@/utils/http";

export async function GET(request: any) {
    const requestUrl = new URL(request.url);
    const timeframe = requestUrl.searchParams.get('timeframe');
    const symbol = requestUrl.searchParams.get('symbol');
    const from = requestUrl.searchParams.get('from');
    const to = requestUrl.searchParams.get('to');

    if(!timeframe) return ResponseInstance({status: -1, title: "timeframe not found", description: ""});
    if(!symbol) return ResponseInstance({status: -1, title: "symbol not found", description: ""});

    let url = `${process.env.FINNHUB_SERVER_V3}/historical-chart/${timeframe}/${symbol}?apikey=${process.env.FINNHUB_APIKEY}`;

    if(from) url = url + `&from=${from}`;
    if(to) url = url + `&to=${to}`;

    try {
        const response = await serverFetch(url);
        const data = await response.json();

        if("Error Message" in data) {
            return ResponseInstance({status: -1, title: data["Error Message"], description: ""});
        }

        return ResponseInstance({status: 0, data, title: "success", description: ""});
    } catch (err: any) {
        return ResponseInstance({ status: 500, title: err.message, description: "" });
    }
}

export async function POST(req: Request) {
    const requestData = await req.json();
    return ResponseInstance({status: 0, title: "success", description: ""});
}
import { serverFetch, ResponseInstance } from "@/utils/http";

export async function GET(request: any) {
    const requestUrl = new URL(request.url);
    const timeframe = requestUrl.searchParams.get('timeframe');
    const symbol = requestUrl.searchParams.get('symbol');
    const from = requestUrl.searchParams.get('from');
    const to = requestUrl.searchParams.get('to');

    if(!timeframe) return ResponseInstance({status: -1, message: "timeframe not found" });
    if(!symbol) return ResponseInstance({status: -1, message: "symbol not found" });

    let url = `${process.env.FMP_SERVER_V3}/historical-chart/${timeframe}/${symbol}?apikey=${process.env.FMP_APIKEY}`;

    if(from) url = url + `&from=${from}`;
    if(to) url = url + `&to=${to}`;

    try {
        const response = await serverFetch(url);
        if(!response.ok) {
            return ResponseInstance({ status: 500, message: response.statusText });
        }

        const data = await response.json();

        return ResponseInstance({status: 0, data, message: "success" });
    } catch (err: any) {
        return ResponseInstance({ status: 500, message: err.message });
    }
}

export async function POST(req: Request) {
    const requestData = await req.json();
    return ResponseInstance({status: 0, message: "success" });
}
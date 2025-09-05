import { serverFetch, ResponseInstance } from "@/utils/http";

export async function GET(request: any) {
    const requestUrl = new URL(request.url);
    const symbols: any = requestUrl.searchParams.get('symbols')?.split(",");

    const url = `${process.env.FINNHUB_SERVER_V3}/quotes/crypto?apikey=${process.env.FINNHUB_APIKEY}`;

    try {
        const response = await serverFetch(url);
        const data = await response.json();
        const result = data.filter((item: any) => symbols.includes(item.symbol));

        if("Error Message" in data) {
            return ResponseInstance({ status: 500, title: data["Error Message"], description: "" });
        }

        if(!data.length) {
            return ResponseInstance({ status: 500, title: "404", description: "" });
        }

        return ResponseInstance({ status: 0, data: result, title: "success", description: "success" });
    } catch (err: any) {
        return ResponseInstance({status: 500, title: err.message, description: "" });
    }
}
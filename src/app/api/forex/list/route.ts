import { serverFetch, ResponseInstance } from "@/utils/http";

export async function GET(request: any) {
    let url = `${process.env.FINNHUB_SERVER}/forex-list?apikey=${process.env.FINNHUB_APIKEY}`;

    try {
        const response = await serverFetch(url);
        const data = await response.json();

        return ResponseInstance({status: 0, data: data, title: "success", description: ""});
    } catch (err: any) {
        return ResponseInstance({ status: 500, title: err.message, description: "" });
    }
}
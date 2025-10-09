import { serverFetch, ResponseInstance } from "@/utils/http";

export async function GET(request: any) {
    let url = `${process.env.FMP_SERVER}/forex-list?apikey=${process.env.FMP_APIKEY}`;

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
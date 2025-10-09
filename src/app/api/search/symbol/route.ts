import { serverFetch, ResponseInstance } from "@/utils/http";

export async function GET(request: any) {
    const requestUrl = new URL(request.url);
    const query = requestUrl.searchParams.get('query');

    if(!query) return ResponseInstance({ status: -1, message: "query not found" });

    try {
        const url = `${process.env.FMP_SERVER}/search-symbol?query=${query}&apikey=${process.env.FMP_APIKEY}`;
        const response = await serverFetch(url);

        if(!response.ok) {
            return ResponseInstance({ status: 500, message: response.statusText });
        }

        const data = await response.json();
        return ResponseInstance({ status: 0, data, message: "success" });
    } catch (err: any) {
        return ResponseInstance({status: 500, message: err.message  });
    }
}

export async function POST(req: Request) {
    const requestData = await req.json();
    return ResponseInstance({status: 0, message: "success" });
}
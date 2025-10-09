import { serverFetch, ResponseInstance } from "@/utils/http";

export async function GET(request: any) {
    const requestUrl = new URL(request.url);
    const from = requestUrl.searchParams.get('from');
    const to = requestUrl.searchParams.get('to');
    const country = requestUrl.searchParams.get('country');
    const importance = requestUrl.searchParams.get('importance');

    let url = `${process.env.FMP_SERVER}/economic-calendar?apikey=${process.env.FMP_APIKEY}`;

    // if(from) url = url + `&from=${from}`;
    // if(to) url = url + `&to=${to}`;

    try {
        const response = await serverFetch(url);

        if(!response.ok) {
            return ResponseInstance({ status: 500, message: response.statusText });
        }

        const data = await response.json();
        const filtered = data.filter((event: any) => {
            const matchCountry = country !== "all" ? country?.toLowerCase() === event.country.toLowerCase() : true;
            const matchImportance = importance !== "all" ? importance?.toLowerCase() === event.impact.toLowerCase() : true;
            return matchCountry && matchImportance;
        });

        return ResponseInstance({status: 0, data: filtered, message: "success"});
    } catch (err: any) {
        return ResponseInstance({ status: 500, message: err.message });
    }
}

export async function POST(req: Request) {
    const requestData = await req.json();
    return ResponseInstance({status: 0, message: "success" });
}
import { NextRequest, NextResponse } from "next/server";
import { serverFetch, ResponseInstance } from "@/utils/http";

export async function GET(req: NextRequest) {
    try {
        const url = "https://markets.newyorkfed.org/read?productCode=50&eventCodes=520&limit=25&startPosition=0&sort=postDt:-1";
        const response = await serverFetch(url);

        if(!response.ok) {
            return ResponseInstance({ status: 500, message: response.statusText });
        }

        const result = await response.json();
        const data = await result.data.map((item: any) => {
            item.newData = JSON.parse(item.data);
            return item;
        })

        return ResponseInstance({ status: 0, data, message: "success" });
    } catch (e: any) {
        return NextResponse.json({ error: e.message || String(e) }, { status: 500 });
    }
}

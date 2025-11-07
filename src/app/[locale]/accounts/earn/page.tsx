import * as React from 'react';
import { getTranslations } from "next-intl/server";
import Banner from "./Banner";
import Mechanism from "./Mechanism";
import Rates from "./Rates";
import Profit from "./Profit";
import MockCalculator from "./MockCalculator";
import Values from "./Values";
import Advance from "./Advance"
import QuestionAnswer from "@/components/common/QuestionAnswer";
import Tools from "@/components/common/Tools";
import {params_sofr} from "@/params/api";

import { headers, cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

async function fetchFromSelf(path: string, init?: RequestInit) {
    const h = await headers(); // 来自本次请求的请求头
    const proto = h.get('x-forwarded-proto') ?? 'http';
    const host  = h.get('x-forwarded-host') ?? h.get('host'); // 兼容 Vercel/本地
    const base  = `${proto}://${host}`;

    const cookieStr = cookies().toString();
    return fetch(`${base}${path}`, {
        ...init,
        cache: 'no-store',
        headers: {
            ...(init?.headers ?? {}),
            cookie: cookieStr,
        },
    });
}



export default async function Page() {
    const t = await getTranslations("Pages.accounts.earn");
    const result = await fetchFromSelf(params_sofr.url);
    const data = await result.json();

    const QA_DATA = [
        {question: t("qa.ul.li1.title"), answer: t("qa.ul.li1.desc")},
        {question: t("qa.ul.li2.title"), answer: t("qa.ul.li2.desc")},
        {question: t("qa.ul.li3.title"), answer: t("qa.ul.li3.desc")},
        {question: t("qa.ul.li4.title"), answer: t("qa.ul.li4.desc")},
        {question: t("qa.ul.li5.title"), answer: t("qa.ul.li5.desc")},
        {question: t("qa.ul.li6.title"), answer: t("qa.ul.li6.desc")},
        {question: t("qa.ul.li7.title"), answer: t("qa.ul.li7.desc")},
    ]

    return (
        <div>
            <Banner rate={data.data[0].newData.dailyRate}/>
            <Mechanism/>
            <Rates data={data.data}/>
            <Profit/>
            <MockCalculator rate={data.data[0].newData.dailyRate}/>
            <Values/>
            <Advance/>
            <QuestionAnswer data={QA_DATA} />
            <Tools/>
        </div>
    )
}
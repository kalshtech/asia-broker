import * as React from 'react';
import {getTranslations} from "next-intl/server";
import Banner from "./Banner";
import Subscribe from "./Subscribe";
import Tools from "@/components/common/Tools";
import FinancialCalendar from "./FinancialCalendar";
import AboutCalendar from "./AboutCalendar";

export default async function Page() {
    return (
        <div>
            <Banner/>
            <Subscribe/>
            <FinancialCalendar/>
            <AboutCalendar/>
            <Tools/>
        </div>
    )
}
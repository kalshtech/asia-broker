import * as React from 'react';
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
import * as React from 'react';
import { getTranslations } from "next-intl/server";
import Banner from "./Banner";
import Reasons from "./Reasons";

export default async function Page() {
    return (
        <div>
            <Banner/>
            <Reasons/>
        </div>
    )
}
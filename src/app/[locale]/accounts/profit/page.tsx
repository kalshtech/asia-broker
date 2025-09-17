import * as React from 'react';
import { getTranslations } from "next-intl/server";
import Banner from "./Banner";

export default async function Page() {
    return (
        <div>
            <Banner/>
        </div>
    )
}
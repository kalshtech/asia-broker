import * as React from 'react';
import {getTranslations} from "next-intl/server";
import Banner from "./Banner";
import Brief from "./Brief";
import Articles from "@/components/common/academy/Articles";
import Tools from "@/components/common/Tools";

export default async function Page() {
    const t = await getTranslations("Pages.ideas.professional");
    return (
        <div>
            <Banner/>
            <Brief/>
            <Articles/>
            <Tools/>
        </div>
    )
}
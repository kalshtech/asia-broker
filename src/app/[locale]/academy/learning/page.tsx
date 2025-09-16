import * as React from 'react';
import { getTranslations } from "next-intl/server";
import Banner from "./Banner";
import CoreTerms from "./CoreTerms";
import Compass from "./Compass";
import Articles from "./Articles";
import Explore from "./Explore";
import Tools from "@/components/common/Tools";

export default async function Page() {
    return (
        <div>
            <Banner/>
            <CoreTerms/>
            <Compass/>
            <Articles/>
            <Explore/>
            <Tools/>
        </div>
    )
}
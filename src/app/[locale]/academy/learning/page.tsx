import * as React from 'react';
import Banner from "./Banner";
import CoreTerms from "./CoreTerms";
import Compass from "./Compass";
import Articles from "@/components/common/academy/Articles";
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
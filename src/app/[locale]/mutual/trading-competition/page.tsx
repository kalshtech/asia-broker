import * as React from 'react';
import Banner from "./Banner";
import Slide from "./Slide";
import Professional from "./Professional";
import PrizePool from "./PrizePool";
import Reward from "./Reward";
import Celebrity from "./Celebrity";
import Rank from "./Rank";
import Entry from "./Entry";
import Decision from "./Decision";
import Conquer from "./Conquer"
import Tools from "@/components/common/Tools";

export default async function Page() {
    return (
        <div className={"bg-theme-deep-bg"}>
            <Banner/>
            <Slide/>
            <Professional/>
            <PrizePool/>
            <Reward/>
            <Celebrity/>
            <Rank/>
            <Entry/>
            <Decision/>
            <Conquer/>
            <Tools/>
        </div>
    )
}
import * as React from 'react';
import Banner from "./Banner";
import Step from "./Step";
import Trust from "./Trust";
import Global from "./Global";
import Values from "./Values";
import Compliance from "./Compliance";
import Articles from "./Articles";
import Brief from "./Brief";
import JoinUS from "./JoinUS";
import Ready from "./Ready";
import Tools from "@/components/common/Tools"

export default async function Page() {
    return (
        <div>
            <Banner/>
            <Step/>
            <Trust/>
            <Global/>
            <Values/>
            <Compliance/>
            <Articles/>
            <Brief/>
            <JoinUS/>
            <Ready/>
            <Tools/>
        </div>
    )
}
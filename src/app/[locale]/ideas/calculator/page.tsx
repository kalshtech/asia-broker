import * as React from 'react';
import {getTranslations} from "next-intl/server";
import FeeCalculator from "./FeeCalculator";
import UseCalculator from "./UseCalculator";
import Reasons from "./Reasons";
import Tools from "@/components/common/Tools";

export default async function Page() {
    return (
        <div>
            <FeeCalculator/>
            <UseCalculator/>
            <Reasons/>
            <Tools/>
        </div>
    )
}
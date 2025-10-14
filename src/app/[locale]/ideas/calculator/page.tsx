import * as React from 'react';
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
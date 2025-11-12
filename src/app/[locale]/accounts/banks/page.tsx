import * as React from "react";
import Banner from "./Banner";
import Access from "./Access";
import Spend from "./Spend";
import Beginning from "./Beginning";
import Tools from "@/components/common/Tools";

export default async function Page() {
    return (
        <div>
            <Banner/>
            <Access/>
            <Spend/>
            <Beginning/>
            <Tools/>
        </div>
    )
}
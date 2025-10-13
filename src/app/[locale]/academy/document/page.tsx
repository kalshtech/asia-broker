import * as React from "react";
import Articles from "@/components/common/academy/Articles";
import Tools from "@/components/common/Tools";

export default async function Page() {
    return (
        <div>
            <Articles showSearch={true} />
            <Tools/>
        </div>
    )
}
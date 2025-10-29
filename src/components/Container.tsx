import React, {ReactNode} from "react";
import classnames from "classnames";

type Props = {
    children: ReactNode;
    orientation?: "horizontal" | "vertical";
}


export default function (props: Props) {
    const { children, orientation = "vertical" } = props;
    return (
        <div className={classnames(["max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto w-full flex p-4 lg:p-8 xl:p-0", {
            "flex-col": orientation === "vertical",
            "flex-row": orientation === "horizontal",
        }])}>
            { children }
        </div>
    )
}
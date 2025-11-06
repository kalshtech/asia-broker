import React, {ReactNode} from "react";
import classnames from "classnames";

type Props = {
    children: ReactNode;
    orientation?: "horizontal" | "vertical";
    className?: string;
}


export default function (props: Props) {
    const { children, orientation = "vertical", className } = props;
    return (
        <div className={classnames(["max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto w-full flex px-6 xl:px-0", {
            "flex-col": orientation === "vertical",
            "flex-row": orientation === "horizontal",
        }, className])}>
            { children }
        </div>
    )
}
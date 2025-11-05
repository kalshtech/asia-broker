"use client";
import * as React from "react";
import {Button} from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import classnames from "classnames";
import { ExternalLink } from "lucide-react";

type Props = {
    text?: string;
    path?: string;
    className?: string;
    theme?: "light-solid" | "light-hollow" | "dark-solid" | "dark-hollow" | "active-solid" | "active-hollow" | "share";
    children?: React.ReactNode;
    isLink?: boolean;
}

const GeneralLinkBtn = (props: Props) => {
    const { text, path = "https://portal.asiafuturetrading.com/register/trader", className, theme = "light-solid", children, isLink = false } = props;

    const renderCls = () => {
        switch (theme) {
            case "light-solid":
                return "bg-white text-theme-active cursor-pointer hover:bg-white";
            case "light-hollow":
                return "bg-transparent text-white border cursor-pointer hover:bg-transparent";
            case "dark-solid":
                return "";
            case "dark-hollow":
                return "border border-black text-black bg-transparent hover:bg-transparent";
            case "active-solid":
                return "bg-theme-active hover:bg-theme-active-hover";
            case "active-hollow":
                return "border border-theme-active text-theme-active bg-transparent hover:bg-transparent";
            case "share":
                return "bg-transparent hover:bg-transparent text-[#fafafa] underline font-normal";
            default:
                return "bg-white text-theme-active cursor-pointer hover:bg-white";
        }
    }

    // if(isLink) {
    //     return (
    //         <a
    //             href={path}
    //             target={isLink ? "_blank" : "_self"}
    //             className={classnames(["flex items-center", {
    //                 "flex-col": children
    //             }])}
    //             title={text}
    //         >
    //             <Button className={classnames([renderCls(), className])}>
    //                 {text}
    //             </Button>
    //             {children}
    //             {theme === "share" && (
    //                 <ExternalLink className={"ml-1"}/>
    //             )}
    //         </a>
    //     )
    // }
    //
    // return (
    //     <Link
    //         href={path}
    //         target={isLink ? "_blank" : "_self"}
    //         className={classnames(["flex  items-center", {
    //             "flex-col": children
    //         }])}
    //         title={text}
    //     >
    //         <Button className={classnames([renderCls(), className])}>
    //             {text}
    //         </Button>
    //         {children}
    //         {theme === "share" && (
    //             <ExternalLink className={"ml-1"}/>
    //         )}
    //     </Link>
    // )

    return (
        <Button className={classnames([renderCls(), className])}>
            {
                isLink ? (
                    <a href={path}
                       target={"_blank"}
                       className={classnames(["flex justify-center items-center", {
                           "flex-col": children
                       }])}
                       title={text}
                    >
                        {text}
                        {children}
                        {theme === "share" && (
                            <ExternalLink className={"ml-1"}/>
                        )}
                    </a>
                ) : (
                    <Link
                        href={path}
                        className={classnames(["flex justify-center items-center", {
                            "flex-col": children
                        }])}
                        title={text}
                    >
                        { text }
                        { children }
                        { theme === "share" && (
                            <ExternalLink className={"ml-1"}/>
                        ) }
                    </Link>
                )
            }
        </Button>
    )
}

export default GeneralLinkBtn;
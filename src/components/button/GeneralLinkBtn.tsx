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
    theme?: "light-solid" | "light-hollow" | "dark-solid" | "dark-hollow" | "active-solid" | "active-hollow" | "share" | "transparent";
    children?: React.ReactNode;
    isLink?: boolean;
    tradeType?: "register" | "login" | "discord"
}

const GeneralLinkBtn = (props: Props) => {
    const { text, path = "https://portal.asiafuturetrading.com/register/trader", className, tradeType = "", theme = "light-solid", children, isLink = false } = props;

    const rotatePath = () => {
        switch (tradeType) {
            case "register":
                return "https://portal.asiafuturetrading.com/register/trader";
            case "login":
                return "https://portal.asiafuturetrading.com/login";
            case "discord":
                return "https://discord.gg/FF9rQKGy";
            default:
                return path;
        }
    }

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
            case "transparent":
                return "bg-theme-light-bg text-[#333] rounded-md hover:bg-theme-light-bg";
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
                    <a href={rotatePath()}
                       target={"_blank"}
                       className={classnames(["flex justify-center items-center", {
                           "flex-col": children
                       }])}
                       title={text}
                    >
                        {
                            tradeType === "discord" && (
                                <img src="/images/home/discord-logo.webp" className={"w-6 h-6 mr-2 object-cover"} alt=""/>
                            )
                        }
                        {text}
                        {children}
                        {theme === "share" && (
                            <ExternalLink className={"ml-1"}/>
                        )}
                    </a>
                ) : (
                    <Link
                        href={rotatePath()}
                        className={classnames(["flex justify-center items-center", {
                            "flex-col": children
                        }])}
                        title={text}
                    >
                        {
                            tradeType === "discord" && (
                                <img src="/images/home/discord-logo.webp" className={"w-6 h-6 mr-2 object-cover"} alt=""/>
                            )
                        }
                        {text}
                        {children}
                        {theme === "share" && (
                            <ExternalLink className={"ml-1"}/>
                        )}
                    </Link>
                )
            }
        </Button>
    )
}

export default GeneralLinkBtn;
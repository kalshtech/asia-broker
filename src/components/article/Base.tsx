"use client";
import React from "react";
import {Typography} from "@/components/ui/typography";
import { Link } from "@/i18n/navigation"

type Props = {
    disc: string;
    title: string;
    imageUrl: string;
    time: string;
    href?: string;
};

const BaseArticle = (props: Props) => {
    const { title, imageUrl, disc, time, href = "/" } = props;
    return (
        <div>
            <Link href={href} target={"_blank"}>
                <img src={imageUrl} alt="article-placeholder"
                     title={"article-placeholder"}/>
                <div className={"mt-4"}>
                    <button className={"text-xs bg-theme-light-bg rounded-full cursor-pointer font-medium text-[#666666] border px-2 h-6 lg:h-10 lg:px-5"}>
                        { disc }
                    </button>
                </div>
                <div className={"mt-4"}>
                    <Typography
                        variant={"h4"}
                        className={"font-medium"}
                    >
                        { title }
                    </Typography>
                </div>
                <div className={"mt-8"}>
                    <Typography variant={"muted"}>
                        { time }
                    </Typography>
                </div>
            </Link>
        </div>
    )
}

export default BaseArticle;
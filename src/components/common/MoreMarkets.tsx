import React from "react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

type Props = {
    title: string;
    desc: string;
    midst?: string;
    btnText: string;
    imageUrl: string;
};

export default async function MoreMarkets({ title, desc, midst, btnText, imageUrl }: Props) {
    return (
        <section className={`mt-20 bg-cover bg-center h-90 py-16 ${imageUrl}`}>
            <div className={"flex flex-col flex-1 h-full"}>
                <div className={"flex items-center flex-col"}>
                    <Typography variant={"h1"} className={"!text-white font-medium"}>
                        {title}
                    </Typography>
                    { midst && (
                        <Typography variant={"muted"} className={"!text-white mt-8"}>
                            {midst}
                        </Typography>
                    ) }
                    <Typography variant={"muted"} className={"!text-white mt-8"}>
                        {desc}
                    </Typography>
                </div>
                <div className={"flex justify-center mt-auto"}>
                    <Button className={"bg-theme-active hover:bg-theme-active-hover rounded-full"}>
                        {btnText}
                    </Button>
                </div>
            </div>
        </section>
    )
}
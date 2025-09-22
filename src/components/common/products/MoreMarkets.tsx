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
        <section className={`bg-cover bg-center px-4 mt-10 py-8 lg:py-16 lg:mt-20 lg:px-30 ${imageUrl}`}>
            <div className={"flex flex-col flex-1 h-full"}>
                <div className={"flex items-center flex-col mb-4 lg:mb-16"}>
                    <Typography variant={"h1"} className={"!text-white font-medium"}>
                        {title}
                    </Typography>
                    { midst && (
                        <Typography variant={"muted"} className={"!text-white mt-4 lg:mt-8"}>
                            {midst}
                        </Typography>
                    ) }
                    <Typography variant={"muted"} className={"!text-white mt-4 lg:mt-8"}>
                        {desc}
                    </Typography>
                </div>
                <div className={"flex justify-center"}>
                    <Button className={"bg-theme-active h-12 px-8 hover:bg-theme-active-hover rounded-full"}>
                        {btnText}
                    </Button>
                </div>
            </div>
        </section>
    )
}
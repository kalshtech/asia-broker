"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import classnames from "classnames";
import Container from "@/components/Container";

type Props = {
    title: string;
    desc: string;
    more: string;
    midst?: string;
    imageUrl: string;
    theme?: 'dark' | 'light';
}

export default function Commission({ title, desc, midst, more, imageUrl, theme = 'light' }: Props) {
    return (
        <section className={"w-full flex mt-4 lg:mt-30"}>
            <Container orientation={"horizontal"}>
                <div className={`flex-1 relative  bg-cover bg-center h-80 lg:h-120 ${imageUrl}`}>
                    <div className={"grid grid-cols-12 w-full lg:absolute lg:mx-auto lg:bottom-0 lg:left-0 lg:top-0"}>
                        <div className={"col-span-0 lg:col-span-4"}></div>
                        <div className={"col-span-12 mt-24 px-4 lg:px-0 lg:mt-0 lg:col-span-8"}>
                            <div className={"h-full flex flex-1 items-center"}>
                                <div className={"flex-1"}>
                                    <Typography
                                        variant={"h3"}
                                        className={classnames([{
                                            '!text-white': theme === 'light',
                                            '': theme === 'dark',
                                        }])}
                                    >
                                        {title}
                                    </Typography>
                                    {midst && (
                                        <Typography
                                            className={classnames(["my-4", {
                                                '!text-white': theme === 'light',
                                                '': theme === 'dark',
                                            }])}
                                        >
                                            {midst}
                                        </Typography>
                                    )}
                                    <Typography
                                        className={classnames(["mt-2", {
                                            '!text-white': theme === 'light',
                                            '': theme === 'dark',
                                        }])}
                                    >
                                        {desc}
                                    </Typography>
                                </div>
                                <div className={"ml-auto mr-4 lg:mr-50"}>
                                    <Button
                                        className={classnames(["rounded-full h-12 px-8 bg-theme-active hover:bg-theme-active-hover", {
                                            '!bg-white !text-theme-active': theme === 'light',
                                            '': theme === 'dark',
                                        }])}
                                    >
                                        {more}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

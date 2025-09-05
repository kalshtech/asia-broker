import React from "react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import classnames from "classnames";

type Props = {
    title: string;
    desc: string;
    more: string;
    midst?: string;
    imageUrl: string;
    theme?: 'dark' | 'light';
}

export default async function Commission({ title, desc, midst, more, imageUrl, theme = 'light' }: Props) {
    return (
        <section className={"w-full flex px-30 mt-30"}>
            <div className={`flex-1 relative  bg-cover bg-center h-[480px] ${imageUrl}`}>
                <div className={"grid grid-cols-12 absolute mx-auto bottom-0 left-0 top-0 w-full"}>
                    <div className={"col-span-4"}></div>
                    <div className={"col-span-8"}>
                        <div className={"h-full flex items-center"}>
                            <div>
                                <Typography
                                    variant={"h2"}
                                    className={classnames([{
                                       '!text-white' : theme === 'light',
                                       '' : theme === 'dark',
                                    }])}
                                >
                                    { title }
                                </Typography>
                                { midst && (
                                    <Typography
                                        variant={"p"}
                                        className={classnames(["my-4", {
                                            '!text-white' : theme === 'light',
                                            '' : theme === 'dark',
                                        }])}
                                    >
                                        { midst }
                                    </Typography>
                                ) }
                                <Typography
                                    variant={"p"}
                                    className={classnames([{
                                        '!text-white' : theme === 'light',
                                        '' : theme === 'dark',
                                    }])}
                                >
                                    { desc }
                                </Typography>
                            </div>
                            <div className={"ml-auto mr-50"}>
                                <Button className={classnames(["rounded-full bg-theme-active hover:bg-theme-active-hover", {
                                    '!bg-white !text-theme-active' : theme === 'light',
                                    '' : theme === 'dark',
                                }])}
                                >
                                    { more }
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

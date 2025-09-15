"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}


const Stream = () => {
    const t = useTranslations("Pages.accounts.vic.stream");
    const ulAry = [
        { text: t("row.col1.ul.li1") },
        { text: t("row.col1.ul.li2") },
        { text: t("row.col1.ul.li3") },
        { text: t("row.col1.ul.li4") },
        { text: t("row.col1.ul.li5") },
    ];
    return (
        <section className={"p-30"}>
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
            >
                <Typography
                    variant={"h1"}
                    className={"font-medium text-center"}
                >
                    {t("title")}
                </Typography>

                <Typography
                    variant={"muted"}
                    className={"font-medium text-center mt-6"}
                >
                    {t("desc")}
                </Typography>
            </motion.div>
            <div className={"mt-16"}>
                <div className={"grid grid-cols-12 gap-8"}>
                    <div className={"col-span-6"}>
                        <Typography
                            variant={"h3"}
                            className={"font-medium max-w-lg"}
                        >
                            {t("row.col1.title")}
                        </Typography>
                        <ul className={"mt-12"}>
                            {
                                ulAry.map((item, index) => (
                                    <li key={index} className={"flex items-center my-4"}>
                                        <span className={"w-[5px] h-[5px] min-w-[5px] min-h-[5px] bg-theme-active block rounded-full"}/>
                                        <Typography
                                            variant={"muted"}
                                            className={"font-medium ml-2"}
                                        >
                                            {item.text}
                                        </Typography>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className={"col-span-6"}>
                        <img
                            src="/images/accounts/stream-logo.png"
                            className={"w-full object-cover"}
                            alt="logo"
                            title={"logo"}
                        />
                        <div className={"bg-[url(/images/accounts/stream-bg.png)] bg-center bg-cover mt-6 h-90"}>
                            <div className={"flex justify-center items-center h-full flex-1 flex-col"}>
                                <Button className={"px-8 h-10 text-black bg-white rounded-full hover:bg-white"}>
                                    { t("row.col2.apply") }
                                </Button>
                                <Typography
                                    variant={"muted"}
                                    className={"font-medium !text-white mt-4"}
                                >
                                    { t("row.col2.desc") }
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stream;
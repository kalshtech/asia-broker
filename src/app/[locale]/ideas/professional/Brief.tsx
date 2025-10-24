"use client";
import * as React from 'react';
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Container from "@/components/Container";
import { motion, Variants} from "framer-motion";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

export default function Brief() {
    const t = useTranslations("Pages.ideas.professional.brief");
    return (
        <section className={"py-4 lg:py-30"}>
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
            >
                <Typography
                    variant={"h3"}
                    className={"text-center"}
                >
                    {t("title")}
                </Typography>

                <Typography
                    variant={"muted"}
                    className={"text-center mx-auto mt-6 max-w-3xl"}
                >
                    {t("desc")}
                </Typography>
            </motion.div>
            <Container>
                <div className={"grid grid-cols-12 gap-4 lg:gap-8 mt-8 lg:mt-20"}>
                    <div className={"col-span-12 lg:col-span-6"}>
                        <div>
                            {/*<Typography variant={"h4"}>*/}
                            {/*    {t("row.left.title")}*/}
                            {/*</Typography>*/}
                            <img
                                src={"/images/ideas/financial-report.png"}
                                alt={"financial-report"}
                                title={"financial-report"}
                                className={"mt-4"}
                            />
                            <div className={"mt-6 flex"}>
                                <div>
                                    <Typography
                                        variant={"h5"}
                                    >
                                        {t("row.left.prospect")}
                                    </Typography>
                                    <Typography
                                        variant={"muted"}
                                        className={"mt-4"}
                                    >
                                        {t("row.left.prospect-desc")}
                                    </Typography>
                                </div>
                                <div className={"ml-auto flex justify-center items-center"}>
                                    <Button className={"bg-theme-active hover:bg-theme-active-hover"}>
                                        {t("row.left.download")}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col-span-12 lg:col-span-6"}>
                        <div>
                            {/*<Typography variant={"h4"}>*/}
                            {/*    {t("row.right.title")}*/}
                            {/*</Typography>*/}

                            <ul>
                                <li className={"my-5"}>
                                    <Typography variant={"large"}>
                                        {t("row.right.title")}
                                    </Typography>
                                </li>
                                <li className={"my-5"}>
                                    <Typography variant={"large"}>
                                        {t("row.right.title")}
                                    </Typography>
                                </li>
                                <li className={"my-5"}>
                                    <Typography variant={"large"}>
                                        {t("row.right.title")}
                                    </Typography>
                                </li>
                                <li className={"my-5"}>
                                    <Typography variant={"large"}>
                                        {t("row.right.title")}
                                    </Typography>
                                </li>
                                <li className={"my-5"}>
                                    <Typography variant={"large"}>
                                        {t("row.right.title")}
                                    </Typography>
                                </li>
                                <li className={"my-4"}>
                                    <Typography variant={"large"}>
                                        {t("row.right.title")}
                                    </Typography>
                                </li>
                                <li className={"my-4"}>
                                    <Typography variant={"large"}>
                                        {t("row.right.title")}
                                    </Typography>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
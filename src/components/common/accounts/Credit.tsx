"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import classnames from "classnames";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

type Props = {
    typeText: string;
    className?: string;
    number: number | string;
}

const Credit = ({ typeText, className, number }: Props) => {
    const t = useTranslations("Pages.accounts.platinum.credit");
    return (
        <section className={classnames(["p-4 lg:p-30", className])}>
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
            >
                <Typography
                    variant={"h3"}
                    className={"font-medium text-center"}
                >
                    { t("title1") }
                </Typography>
                <div className={"flex justify-center items-center mt-4"}>
                    <Typography
                        variant={"h3"}
                        className={"font-medium text-center"}
                    >
                        { t("title2-1") }
                    </Typography>
                    <Typography
                        variant={"h3"}
                        className={"!text-[64px] text-center mx-4"}
                    >
                        5.6
                    </Typography>
                    <Typography
                        variant={"h3"}
                        className={"font-medium text-center"}
                    >
                        { t("title2-2") }
                    </Typography>
                </div>
            </motion.div>
            <div className={"mt-4 lg:mt-16"}>
                <Typography
                    variant={"h4"}
                    className={"font-medium text-center"}
                >
                    { t("midst") }
                </Typography>

                <Typography
                    variant={"muted"}
                    className={"text-center mt-6"}
                >
                    { t("desc") }
                </Typography>
            </div>

            <div className={"flex justify-center items-end mt-4 lg:mt-16"}>
                <Typography
                    variant={"h5"}
                    className={"font-medium text-center"}
                >
                    { t("transfer") }
                </Typography>
                <Typography
                    variant={"h3"}
                    className={"!text-[64px] text-center mx-4"}
                >
                    { number }
                </Typography>
                <Typography
                    variant={"h5"}
                    className={"font-medium text-center"}
                >
                    { typeText }
                </Typography>
            </div>

            <div className={"flex justify-center mt-4 lg:mt-16"}>
                <Button className={"px-8 h-10 rounded-full"}>
                    { t("immediately") }
                </Button>
                <Button className={"px-8 h-10 rounded-full ml-4 bg-transparent border border-black text-black hover:bg-transparent"}>
                    { t("understand") }
                </Button>
            </div>
        </section>
    )
}


export default Credit;
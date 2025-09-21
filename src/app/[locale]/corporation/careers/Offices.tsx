"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { QAItemRow } from "@/components/common/QuestionAnswer";
import { Separator } from "@/components/ui/separator";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Offices = () => {
    const t = useTranslations("Pages.corporation.careers.offices");

    const DATA = [
        {
            question: t("list.item1.title"),
            answer: (
                <>
                    <div className={"flex pb-16"}>
                        <Typography>
                            {t("list.item1.text1")}
                        </Typography>
                        <img
                            src="/images/corporation/careers-sydney.png"
                            className={"ml-auto max-h-80 object-cover"}
                            alt=""
                        />
                    </div>
                    <Separator/>
                </>
            )
        },
        {
            question: t("list.item2.title"),
            answer: (
                <>
                    <div className={"flex pb-16"}>
                        <div className={"flex flex-col"}>
                            <Typography>
                                {t("list.item2.text1")}
                            </Typography>
                            <Typography className={"mt-2"}>
                                {t("list.item2.text2")}
                            </Typography>
                            <Typography className={"mt-2"}>
                                {t("list.item2.text3")}
                            </Typography>
                            <Typography className={"mt-2"}>
                                {t("list.item2.text4")}
                            </Typography>
                            <Typography className={"mt-2"}>
                                {t("list.item2.text5")}
                            </Typography>
                        </div>
                        <img src="/images/corporation/careers-asia.png"
                             className={"ml-auto max-h-80 object-cover"}
                             alt=""
                        />
                    </div>
                    <Separator/>
                </>
            )
        },
        {
            question: t("list.item3.title"),
            answer: (
                <>
                    <div className={"flex pb-16"}>
                        <Typography>
                            {t("list.item3.text1")}
                        </Typography>
                        <img
                            src="/images/corporation/careers-online.png"
                            className={"ml-auto max-h-80 object-cover"}
                            alt=""
                        />
                    </div>
                    <Separator/>
                </>
            )
        }
    ];

    return (
        <section className={"p-30 bg-theme-light-bg"}>
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
            </motion.div>
            <div className={"mt-16"}>
                <div>
                    {
                        DATA.map((item, index) => (
                            <QAItemRow key={index} item={item} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Offices;
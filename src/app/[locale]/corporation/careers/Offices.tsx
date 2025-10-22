"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import Container from "@/components/Container";
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
                    <div className={"grid grid-cols-12 gap-4 pb-16"}>
                        <div className={"col-span-6"}>
                            <Typography variant={"p"}>
                                {t("list.item1.text1")}
                            </Typography>
                        </div>
                        <div className={"col-span-6"}>
                            <img
                                src="/images/corporation/careers-sydney.png"
                                className={"ml-auto max-h-80 object-cover"}
                                alt=""
                            />
                        </div>
                    </div>
                    <Separator/>
                </>
            )
        },
        {
            question: t("list.item2.title"),
            answer: (
                <>
                <div className={"grid grid-cols-12 gap-4 pb-16"}>
                        <div className={"col-span-6 flex flex-col"}>
                            <Typography variant={"p"}>
                                {t("list.item2.text1")}
                            </Typography>
                            <Typography variant={"p"} className={"mt-2"}>
                                {t("list.item2.text2")}
                            </Typography>
                            <Typography variant={"p"} className={"mt-2"}>
                                {t("list.item2.text3")}
                            </Typography>
                            <Typography variant={"p"} className={"mt-2"}>
                                {t("list.item2.text4")}
                            </Typography>
                            <Typography variant={"p"} className={"mt-2"}>
                                {t("list.item2.text5")}
                            </Typography>
                        </div>
                        <div className={"col-span-6"}>
                            <img src="/images/corporation/careers-asia.png"
                                 className={"ml-auto max-h-80 object-cover"}
                                 alt=""
                            />
                        </div>
                    </div>
                    <Separator/>
                </>
            )
        },
        {
            question: t("list.item3.title"),
            answer: (
                <>
                    <div className={"grid grid-cols-12 pb-16 gap-4"}>
                        <div className={"col-span-6"}>
                            <Typography variant={"p"}>
                                {t("list.item3.text1")}
                            </Typography>
                        </div>

                        <div className={"col-span-6"}>
                            <img
                                src="/images/corporation/careers-online.png"
                                className={"ml-auto max-h-80 object-cover"}
                                alt=""
                            />
                        </div>
                    </div>
                    <Separator/>
                </>
            )
        }
    ];

    return (
        <section className={"py-4 lg:py-30 bg-theme-light-bg"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography variant={"h3"} className={"text-center"}>
                        {t("title")}
                    </Typography>
                </motion.div>
                <div className={"mt-4 lg:mt-16"}>
                    <div>
                        {
                            DATA.map((item, index) => (
                                <QAItemRow key={index} item={item}/>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Offices;
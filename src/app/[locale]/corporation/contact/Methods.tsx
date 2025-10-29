"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import {Button} from "@/components/ui/button";
import Container from "@/components/Container";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Methods = () => {
    const t = useTranslations("Pages.corporation.contact.methods");
    const ary = [
        { imageUrl: "/images/corporation/contact-methods1.png", title: t("row.col1.title"), desc: t("row.col1.desc"), btnText: t("row.col1.btnText") },
        { imageUrl: "/images/corporation/contact-methods2.png", title: t("row.col2.title"), desc: t("row.col2.desc"), btnText: t("row.col2.btnText") },
        { imageUrl: "/images/corporation/contact-methods3.png", title: t("row.col3.title"), desc: t("row.col3.desc"), btnText: t("row.col2.btnText") },
    ];

    return (
        <section className={"py-4 xl:py-30"}>
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
                <div className={"mt-8 lg:mt-16"}>
                    <div className={"grid grid-cols-12 gap-8 h-full"}>
                        {
                            ary.map((item, index) => (
                                <div className={"col-span-12 lg:col-span-4 p-4 lg:p-10 bg-theme-light-bg rounded-2xl"}
                                     key={index}>
                                    <img
                                        src={item.imageUrl}
                                        alt="icon"
                                        title={"icon"}
                                        className={"w-10 h-10 object-cover"}
                                    />
                                    <Typography
                                        variant={"h5"}
                                        className={"font-medium my-6"}
                                    >
                                        {item.title}
                                    </Typography>
                                    <div className={"h-24"}>
                                        <Typography variant={"muted"}>
                                            {item.desc}
                                        </Typography>
                                    </div>
                                    <div className={"mt-8 lg:mt-16"}>
                                        <Button
                                            className={"bg-theme-active hover:bg-theme-active"}>
                                            {item.btnText}
                                        </Button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Methods;
"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Global =  () => {
    const t = useTranslations("Pages.corporation.about.global");
    const ulAry = [
        { title: t("row.col1.title"), desc: t("row.col1.desc")  },
        { title: t("row.col2.title"), desc: t("row.col2.desc")  },
        { title: t("row.col3.title"), desc: t("row.col3.desc")  },
        { title: t("row.col4.title"), desc: t("row.col4.desc")  },
    ];
    return (
        <section className={"bg-[url(/images/corporation/about-global-bg.png)] bg-cover bg-center p-4 lg:p-30"}>
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
            >
                <Typography
                    variant={"h3"}
                    className={"font-medium !text-white text-center"}
                >
                    {t("title")}
                </Typography>
            </motion.div>
            <div className={"mt-16"}>
                <div className={"grid grid-cols-12 gap-4"}>
                    {
                        ulAry.map((item, index) => (
                            <div className={"col-span-12 lg:col-span-3 relative"} key={index}>
                                <Typography
                                    variant={"h5"}
                                    className={"font-medium !text-white text-center"}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    variant={"muted"}
                                    className={"!text-white text-center mt-8"}
                                >
                                    {item.desc}
                                </Typography>

                                {
                                    index !== (ulAry.length - 1) && (
                                        <Separator className={"absolute right-0 top-0 hidden lg:block"} orientation={"vertical"} />
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Global;
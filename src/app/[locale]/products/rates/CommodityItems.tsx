"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import Container from "@/components/Container";
import {Typography} from "@/components/ui/typography";
import {useTranslations} from "next-intl";
import {getTranslations} from "next-intl/server";
import { ArrowRight } from "lucide-react"

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const CommodityItems = () => {
    const t = useTranslations("Pages.products.rates.table");
    const NavT = useTranslations("Navigation")

    const tableData = [
        { type: NavT("menu.products.row.col-1.ul.li1"), introduction: t("prompt1") },
        { type: NavT("menu.products.row.col-1.ul.li2"), introduction: t("prompt2") },
        { type: NavT("menu.products.row.col-1.ul.li3"), introduction: t("prompt3") },
        { type: NavT("menu.products.row.col-1.ul.li4"), introduction: t("prompt4") },
        { type: NavT("menu.products.row.col-1.ul.li5"), introduction: t("prompt5") },
        { type: NavT("menu.products.row.col-1.ul.li6"), introduction: t("prompt6") }
    ]

    return (
        <section className={"py-16 bg-theme-light-bg"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    className={"mt-8"}
                >
                    <Typography
                        variant={"h3"}
                        className={"text-center xl:text-left"}
                    >
                        {t("title")}
                    </Typography>
                </motion.div>

                <div className={"mt-8"}>
                    {
                        tableData.map((item, index) => (
                            <div className={"bg-white my-6 p-4 rounded-sm flex"} key={index}>
                                <Typography className={"font-medium"}>
                                    { item.type }
                                </Typography>
                                <ArrowRight className={"ml-auto"} />
                            </div>
                        ))
                    }
                </div>
            </Container>
        </section>
    )
}

export default CommodityItems;

"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import TitleReveal from "@/components/TitleReveal";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Banner =  () => {
    const t = useTranslations("Pages.accounts.platinum.banner");

    const ulAry = [
        { text: t("ul.li1") },
        { text: t("ul.li2") },
        { text: t("ul.li3") },
    ];
    return (
        <section className={"bg-[url(/images/accounts/platinum-banner.png)] bg-center bg-cover py-4 lg:py-30 h-108 lg:h-[632px]"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >

                    <TitleReveal
                        title={t("title")}
                        className={"!text-white !bg-gradient-to-b !from-[#FFF9F4] !to-[#D0B89F] !bg-clip-text !text-transparent"}
                    />

                    <Typography
                        variant={"lead"}
                        className={"font-medium !text-white mt-4"}
                    >
                        {t("midst")}
                    </Typography>

                    <Typography
                        variant={"muted"}
                        className={"font-medium !text-white mt-10 !max-w-xs"}
                    >
                        {t("desc")}
                    </Typography>

                    <ul className={"mt-6"}>
                        {
                            ulAry.map((item, i) => (
                                <li key={i} className={"flex my-4 items-center"}>
                                    <span className={"block w-[5px] h-[5px] bg-white rounded-full"}></span>
                                    <Typography
                                        variant={"small"}
                                        className={"!text-white ml-2"}
                                    >
                                        {item.text}
                                    </Typography>
                                </li>
                            ))
                        }
                    </ul>
                </motion.div>
                <div className={"mt-16"}>
                    <Button className={"bg-white px-8 h-10 rounded-full hover:!bg-white text-black"}>
                        {t("register")}
                    </Button>
                    <Button
                        className={"ml-4 px-8 h-10 bg-transparent hover:bg-transparent rounded-full border border-white"}>
                        {t("support")}
                    </Button>
                </div>
            </Container>
        </section>
    )
}

export default Banner;
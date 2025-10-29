"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}


const SetOut = () => {
    const t = useTranslations("Pages.corporation.careers.setOut");
    return (
        <section className={"py-8 xl:py-30"}>
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
                    <Typography variant={"muted"} className={"mt-6 text-center"}>
                        {t("desc")}
                    </Typography>
                    <div className={"mt-4 lg:mt-16 flex justify-center items-center"}>
                        <Button className={"bg-theme-active hover:bg-theme-active-hover"}>
                            {t("view")}
                        </Button>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}

export default SetOut
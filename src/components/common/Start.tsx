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

const Start = () => {
  const t = useTranslations("Common.start");
  return (
    <section className={"py-4 xl:py-30"}>
        <Container>
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
                    variant={"h4"}
                    className={"font-normal text-center mt-4 lg:mt-16 max-w-5xl mx-auto"}
                >
                    {t("desc")}
                </Typography>
            </motion.div>
            <div className={"flex justify-center mt-4 lg:mt-16"}>
                <Button className={"bg-theme-active hover:bg-theme-active"}>
                    {t("register")}
                </Button>
                <Button className={"ml-4 border border-theme-active text-theme-active bg-transparent hover:bg-theme"}>
                    {t("download")}
                </Button>
            </div>
        </Container>
    </section>
  )
}

export default Start;
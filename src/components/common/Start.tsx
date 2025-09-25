"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import classnames from "classnames"

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
    <section className={"p-4 lg:p-30"}>
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
        <Typography
          variant={"large"}
          className={"font-medium text-center mt-4 lg:mt-16"}
        >
          {t("desc")}
        </Typography>
      </motion.div>
      <div className={"flex justify-center mt-4 lg:mt-16"}>
        <Button className={"px-8 h-10 rounded-full bg-theme-active hover:bg-theme-active"}>
          {t("register")}
        </Button>
        <Button className={"px-8 ml-4 h-10 rounded-full border border-theme-active text-theme-active bg-transparent hover:bg-theme"}>
          {t("download")}
        </Button>
      </div>
    </section>
  )
}

export default Start;
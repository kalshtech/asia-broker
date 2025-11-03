"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import classnames from "classnames"
import Container from "@/components/Container";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}
const AssetsSafe = () => {
  const t = useTranslations("Pages.products.transfer.assets-safe");
  const ary = [
    { title: t("row.col1.title"), desc: t("row.col1.desc"), imageUrl: "/images/products/transfer-assets-safe1.png" },
    { title: t("row.col2.title"), desc: t("row.col2.desc"), imageUrl: "/images/products/transfer-assets-safe2.png" },
    { title: t("row.col3.title"), desc: t("row.col3.desc"), imageUrl: "/images/products/transfer-assets-safe3.png" },
    { title: t("row.col4.title"), desc: t("row.col4.desc"), imageUrl: "/images/products/transfer-assets-safe4.png" },
  ];
  return (
    <section className={"py-16 xl:py-30"}>
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
        </motion.div>
        <div className={"mt-4 lg:mt-16"}>
          <div className={"grid grid-cols-1 lg:grid-cols-2"}>
            {
              ary.map((item, index) => (
                  <div className={classnames(["py-4 lg:py-10", {
                    "bg-theme-light-bg": [1, 2].includes(index)
                  }])} key={index}>
                    <Typography
                        variant={"h4"}
                        className={"font-medium text-center"}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                        variant={"muted"}
                        className={"text-center mt-5"}
                    >
                      {item.desc}
                    </Typography>
                    <img src={item.imageUrl} className={"object-cover mx-auto"} alt=""/>
                  </div>
              ))
            }
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AssetsSafe
"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Standard = () => {
    const t = useTranslations("Pages.accounts.classic.standard");
    const liAry = [
        { label: t("row.left.ul.li1") },
        { label: t("row.left.ul.li2") },
        { label: t("row.left.ul.li3") },
        { label: t("row.left.ul.li4") },
        { label: t("row.left.ul.li5") },
        { label: t("row.left.ul.li6") },
    ];

    const rightRowAry = [
        { imageUrl: "/images/accounts/lightning.png", title: t("row.right.row.col-2-title"), desc: t("row.right.row.col-2-desc") },
        { imageUrl: "/images/accounts/line.png", title: t("row.right.row.col-3-title"), desc: t("row.right.row.col-3-desc") },
        { imageUrl: "/images/accounts/house.png", title: t("row.right.row.col-4-title"), desc: t("row.right.row.col-4-desc") },
        { imageUrl: "/images/accounts/wifi.png", title: t("row.right.row.col-5-title"), desc: t("row.right.row.col-5-desc") },
        { imageUrl: "/images/accounts/signal.png", title: t("row.right.row.col-6-title"), desc: t("row.right.row.col-6-desc") },
    ];
    return (
        <section className={"p-30"}>
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
            <div className={"grid grid-cols-12 gap-8 mt-16"}>
                <div className={"col-span-3"}>
                    <div className={""}>
                        <div>
                            <Typography variant={"h4"}>
                                {t("row.left.title")}
                            </Typography>
                            <Typography
                                variant={"muted"}
                                className={"mt-3"}
                            >
                                {t("row.left.desc")}
                            </Typography>
                        </div>
                        <ul className={"mt-6"}>
                            {
                                liAry.map((item, index) => (
                                    <li key={index} className={"my-6 flex items-center"}>
                                        <div className={"w-[5px] h-[5px] rounded-full bg-theme-active"}></div>
                                        <Typography className={"ml-3 font-medium"}>
                                            { item.label }
                                        </Typography>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className={"col-span-9"}>
                    <div className={"grid grid-cols-3 gap-4"}>
                        <div className={"bg-theme-light-bg p-6 relative rounded-lg"}>
                            <img
                                src="/images/accounts/zero.png"
                                className={"object-cover max-w-[180px] max-h-[180px] absolute -top-1/4 right-0"}
                                alt="icon"
                                title={"icon"}
                            />
                            <Typography variant={"h4"} className={"mt-16"}>
                                {t("row.right.row.col-1-title")}
                            </Typography>
                            <Typography className={"block mt-4"}>
                                {t("row.right.row.col-1-desc")}
                            </Typography>
                        </div>
                        {
                            rightRowAry.map((item, index) => (
                                <div className={"bg-theme-light-bg p-6 rounded-lg"} key={index}>
                                    <img
                                        src={item.imageUrl}
                                        className={"w-[30px] h-[30px] object-cover"}
                                        alt="icon"
                                        title={"icon"}
                                    />
                                    <Typography variant={"h4"} className={"mt-6"}>
                                        { item.title }
                                    </Typography>
                                    <Typography className={"block mt-4"}>
                                        { item.desc }
                                    </Typography>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Standard;
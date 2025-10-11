"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const VIC = () => {
    const t = useTranslations("Pages.accounts.platinum.VIC");
    return (
        <section className={"bg-theme-deep-bg p-4 lg:p-30"}>
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
                <div className={"grid grid-cols-12"}>
                    <div className={"h-full col-span-12 lg:col-span-6"}>
                        <div className={"bg-white h-full p-4 lg:py-20 lg:px-16"}>
                            <Typography>
                                {t("left.desc")}
                            </Typography>

                            <div className={"mt-4 lg:mt-16"}>
                                <div className={"flex items-center"}>
                                    <Typography
                                        variant={"h4"}
                                        className={"font-medium"}
                                    >
                                        {t("left.title")}
                                    </Typography>
                                    <Typography
                                        variant={"lead"}
                                        className={"font-medium ml-2"}
                                    >
                                        {t("left.for")}
                                    </Typography>
                                </div>
                            </div>

                            <div className={"mt-4 lg:mt-16"}>
                                <Button className={"px-8 h-10 rounded-full"}>
                                    { t("left.understand") }
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={"col-span-12 lg:col-span-6"}>
                        <img
                            className={"object-cover max-h-[450px] w-full"}
                            src="/images/accounts/vic-img.png"
                            alt="vic"
                            title={"vic"}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VIC;
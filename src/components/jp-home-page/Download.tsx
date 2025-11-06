"use client";
import React from "react";
import { Typography } from "@/components/ui/typography";
import Container from "@/components/Container";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

export default function () {
    return (
        <div className={"py-16 xl:py-30"}>
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
                        现在马上下载 MT5 投资软件
                    </Typography>

                    <Typography
                        variant={"muted"}
                        className={"text-center max-w-3xl mx-auto mt-4"}
                    >
                        以先进技术驱动全球交易，让您在任何设备上尽享 专业、智能与高效 的交易体验。
                    </Typography>
                </motion.div>
                <div className={"mt-16"}>

                </div>
            </Container>
        </div>
    )
}
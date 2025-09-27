"use client";
import * as React from 'react'
import Image from "next/image";
import { useTranslations } from "next-intl";
import {Typography} from "@/components/ui/typography";
import {motion, Variants} from "framer-motion";
import {Button} from "@/components/ui/button";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import CalendarTable from "@/components/common/CalendarTable";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const FinancialCalendar = () => {
    const t = useTranslations("Pages.ideas.calendar.financialCalendar");
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
            </motion.div>
            <div className={"mt-16"}>
                <Card>
                    <CardContent>
                        <CalendarTable/>
                    </CardContent>
                    <CardFooter></CardFooter>
                </Card>
            </div>
        </section>
    )
}

export default FinancialCalendar;
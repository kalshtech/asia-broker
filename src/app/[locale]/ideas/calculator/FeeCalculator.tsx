"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Label} from "@/components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import Container from "@/components/Container";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const FeeCalculator = () => {
    const t = useTranslations("Pages.ideas.calculator.fee");
    const [ tabActive, setTabActive ] = React.useState<string>("forex");

    const tabList = [
        { label: t("tabs.forex"), value: "forex" },
        { label: t("tabs.commodity"), value: "commodity" },
        { label: t("tabs.indices"), value: "indices" },
        { label: t("tabs.stock"), value: "stock" },
        { label: t("tabs.crypto"), value: "crypto" },
    ];

    const TablePrompt = React.useMemo(() => t(`${tabActive}-prompt`), [tabActive])

    const handleToggleTabActive = (active: string) => {
        setTabActive(active);
    }

    return (
        <section className={"py-4 lg:py-30"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography
                        variant={"h3"}
                        className={"font-medium text-center"}
                    >
                        {t("title")}
                    </Typography>

                    <Typography
                        variant={"lead"}
                        className={"font-medium mt-4 text-center"}
                    >
                        {t("desc")}
                    </Typography>
                </motion.div>
                <div className={"mt-10"}>
                    <div className={"flex lg:hidden"}>
                        <Select value={tabActive} onValueChange={handleToggleTabActive}>
                            <SelectTrigger className={"w-full"}>
                                <SelectValue placeholder="Theme"/>
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    tabList.map((item, index) => (
                                        <SelectItem value={item.value} key={index}>
                                            {item.label}
                                        </SelectItem>
                                    ))
                                }
                            </SelectContent>
                        </Select>
                    </div>

                    <Tabs value={tabActive}
                          className={"justify-center items-center hidden lg:flex"}
                          onValueChange={handleToggleTabActive}
                    >
                        <TabsList className={"h-10 grid grid-cols-3 lg:block"}>
                            {
                                tabList.map((item, index) => (
                                    <TabsTrigger
                                        key={index}
                                        value={item.value}
                                        className={"px-8 cursor-pointer rounded-full bg-theme-light-bg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"}
                                    >
                                        {item.label}
                                    </TabsTrigger>
                                ))
                            }
                        </TabsList>
                    </Tabs>
                    <Typography
                        variant={"lead"}
                        className={"font-medium mt-8 text-center"}
                    >
                        {TablePrompt}
                    </Typography>
                </div>
                <div className={"mt-10 bg-theme-light-bg rounded-xs p-4 lg:p-12"}>
                    <div className={"grid gap-4 lg:gap-8 grid-cols-2 lg:grid-cols-3"}>
                        <div className={""}>
                            <Label htmlFor="date" className={"px-1 mb-2"}>
                                {t("form.type")}
                            </Label>
                            <Select>
                                <SelectTrigger className={"bg-white w-full lg:min-w-40"}>
                                    <SelectValue placeholder={t("form.type")}/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value={"t"}>
                                        测试
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className={""}>
                            <Label htmlFor="date" className={"px-1 mb-2"}>
                                {t("form.currency")}
                            </Label>
                            <Select>
                                <SelectTrigger className={"bg-white w-full lg:min-w-40"}>
                                    <SelectValue placeholder={t("form.currency")}/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value={"t"}>
                                        测试
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className={""}>
                            <Label htmlFor="date" className={"px-1 mb-2"}>
                                {t("form.species")}
                            </Label>
                            <Select>
                                <SelectTrigger className={"bg-white w-full lg:min-w-40"}>
                                    <SelectValue placeholder={t("form.species")}/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value={"t"}>
                                        测试
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className={""}>
                            <Label htmlFor="date" className={"px-1 mb-2"}>
                                {t("form.level")}
                            </Label>
                            <Select>
                                <SelectTrigger className={"bg-white w-full lg:min-w-40"}>
                                    <SelectValue placeholder={t("form.level")}/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value={"t"}>
                                        测试
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className={""}>
                            <Label htmlFor="date" className={"px-1 mb-2"}>
                                {t("form.volume")}
                            </Label>
                            <Select>
                                <SelectTrigger className={"bg-white w-full lg:min-w-40"}>
                                    <SelectValue placeholder={t("form.volume")}/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value={"t"}>
                                        测试
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className={""}>
                            <Button className={"w-full mt-[22px]"}>
                                {t("form.calculate")}
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center my-8">
                        <Separator className="flex-1"/>
                        <span className="mx-4 text-sm text-muted-foreground font-medium">
                        {t("form.result")}
                    </span>
                        <Separator className="flex-1"/>
                    </div>
                    <div className={"grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12"}>
                        <div className={""}>
                            <div className={"flex mb-2"}>
                                <Typography>
                                    {t("form.margin")}
                                </Typography>
                                <Typography className={"ml-auto"}>
                                    {t("form.margin")}
                                </Typography>
                            </div>
                            <Separator className="flex-1"/>
                        </div>
                        <div className={""}>
                            <div className={"flex mb-2"}>
                                <Typography>
                                    {t("form.shortCredit")}
                                </Typography>
                                <Typography className={"ml-auto"}>
                                    {t("form.shortCredit")}
                                </Typography>
                            </div>
                            <Separator className="flex-1"/>
                        </div>
                        <div className={""}>
                            <div className={"flex mb-2"}>
                                <Typography>
                                    {t("form.cost")}
                                </Typography>
                                <Typography className={"ml-auto"}>
                                    {t("form.cost")}
                                </Typography>
                            </div>
                            <Separator className="flex-1"/>
                        </div>
                        <div className={""}>
                            <div className={"flex mb-2"}>
                                <Typography>
                                    {t("form.longCredit")}
                                </Typography>
                                <Typography className={"ml-auto"}>
                                    {t("form.longCredit")}
                                </Typography>
                            </div>
                            <Separator className="flex-1"/>
                        </div>
                        <div className={""}>
                            <div className={"flex mb-2"}>
                                <Typography>
                                    {t("form.fee")}
                                </Typography>
                                <Typography className={"ml-auto"}>
                                    {t("form.fee")}
                                </Typography>
                            </div>
                            <Separator className="flex-1"/>
                        </div>
                        <div className={""}>
                            <div className={"flex mb-2"}>
                                <Typography>
                                    {t("form.pointValue")}
                                </Typography>
                                <Typography className={"ml-auto"}>
                                    {t("form.pointValue")}
                                </Typography>
                            </div>
                            <Separator className="flex-1"/>
                        </div>
                    </div>
                </div>
                <Typography variant={"muted"} className={"text-center mx-auto mt-8 max-w-2xl"}>
                    {t("disclaimer")}
                </Typography>
            </Container>
        </section>
    )
}

export default FeeCalculator;
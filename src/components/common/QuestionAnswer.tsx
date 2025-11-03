"use client";
import * as React from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronUp, ChevronDown } from "lucide-react";
import {motion, Variants} from "framer-motion";
import {Typography} from "@/components/ui/typography";
import {useTranslations} from "next-intl";
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

export function QAItemRow({ item }: any) {
    const [open, setOpen] = React.useState(false);
    return (
        <Collapsible open={open} onOpenChange={setOpen}>
            <div className="py-5">
                <CollapsibleTrigger className="group flex w-full items-start justify-between gap-4 text-left">
                    <h3 className="text-[18px] md:text-[20px] font-medium leading-[28px] text-foreground">
                        {item.question}
                    </h3>
                    <span aria-hidden className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full transition-colors group-hover:bg-muted">
                        { open ? <ChevronUp className="h-8 w-8" /> :  <ChevronDown className="h-8 w-8" /> }
                  </span>
                </CollapsibleTrigger>
                <CollapsibleContent className="data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden">
                    <div className="pt-4 text-[14px] md:text-[15px]">{item.answer}</div>
                </CollapsibleContent>
            </div>
        </Collapsible>
    );
}

export default function QuestionAnswer({ data, isShowBtn, btn1Text, btn2Text } : any) {
    const t = useTranslations("Common");
    return (
        <section className="py-16 xl:py-30 bg-theme-light-bg">
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography variant={"h3"} className={"text-center"}>
                        {t("qa-title")}
                    </Typography>
                </motion.div>
                <div className="mt-4 lg:mt-16">
                    <div className="divide-y divide-border">
                        {data.map((item: any, index: number) => (
                            <QAItemRow key={index} item={item}/>
                        ))}
                    </div>
                </div>
                {
                    isShowBtn && (
                        <div className={"mt-10 flex justify-center"}>
                            <Button className={"bg-theme-active hover:bg-theme-active-hover"}>
                                { btn1Text }
                            </Button>
                            <Button className={"ml-4 text-theme-active border border-theme-active bg-transparent hover:bg-transparent"}>
                                { btn2Text }
                            </Button>
                        </div>
                    )
                }
            </Container>
        </section>
    );
}


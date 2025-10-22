"use client";
import * as React from 'react'
import Image from "next/image";
import { useTranslations } from "next-intl";
import {Typography} from "@/components/ui/typography";
import {motion, Variants} from "framer-motion";
import {Button} from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react"
import Container from "@/components/Container";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Subscribe = () => {
    const t = useTranslations("Pages.ideas.vps.subscribe");

    const Schema = z.object({
        first: z.string().min(1, { message: t("form.first-placeholder") }),
        last: z.string().min(1, { message: t("form.last-placeholder") }),
        email: z.string().min(1, { message: t("form.email-placeholder") }),
        phone: z.string().min(1, { message: t("form.phone-placeholder") }),
    })

    type FormValues = z.infer<typeof Schema>

    const form = useForm<FormValues>({
        resolver: zodResolver(Schema),
        defaultValues: {
            first: "",
            last: "",
            email: "",
            phone: "",
        },
        mode: "onChange",
    })

    const onSubmit = async (values: FormValues) => {
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
                    <Typography variant={"h3"} className={"text-center"}>
                        {t("title")}
                    </Typography>
                </motion.div>
                <div className={"mt-4 lg:mt-10"}>
                    <Typography
                        variant={"lead"}
                        className={"font-medium text-center"}
                    >
                        {t("form-name")}
                    </Typography>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-10">
                            <div className={"grid grid-cols-12 gap-4"}>
                                <div className={"col-span-6"}>
                                    <FormField
                                        control={form.control}
                                        name="first"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>
                                                    {t("form.first")}
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder={t("form.first-placeholder")}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className={"col-span-6"}>
                                    <FormField
                                        control={form.control}
                                        name="last"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>
                                                    {t("form.last")}
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder={t("form.last-placeholder")}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            <FormField
                                control={form.control}
                                name="email"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>
                                            {t("form.email")}
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder={t("form.email-placeholder")}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="phone"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>
                                            {t("form.phone")}
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder={t("form.phone-placeholder")}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />


                            <Button
                                type="submit"
                                className={"w-full mt-10 bg-theme-active hover:bg-theme-active-hover"}
                                disabled={form.formState.isSubmitting}
                            >
                                {form.formState.isSubmitting ?
                                    <Loader2 className="h-4 w-4 animate-spin"/> : t("form.submit")}
                            </Button>
                        </form>
                    </Form>
                </div>
            </Container>
        </section>
    )
}

export default Subscribe;
"use client";
import * as React from 'react'
import { useTranslations, useLocale } from "next-intl";
import Container from "@/components/Container";
import Commission from "@/components/common/products/Commission";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

const MetaProfession = () => {
    const t =  useTranslations("Pages.products.pm");
    const local = useLocale();
    const isEn = local === "en";

    if(isEn) {
        return (
            <Container>
                <div className={"flex items-center"}>
                    <div>
                        <Typography
                            variant={"h3"}
                            className={"!text-theme-active max-w-xl"}
                        >
                            { t("meta.title") }
                        </Typography>

                        <Typography
                            variant={"p"}
                            className={"max-w-xl mt-6"}
                        >
                            { t("meta.desc") }
                        </Typography>
                    </div>
                    <div className={"ml-auto"}>
                        <Button className={"px-8 h-10 rounded-full bg-theme-active hover:bg-theme-active-hover"}>
                            { t("meta.trade") }
                        </Button>
                        <Button className={"px-8 h-10 ml-4 rounded-full border border-theme-active text-theme-active bg-transparent hover:bg-transparent"}>
                            { t("meta.open") }
                        </Button>
                    </div>
                </div>
            </Container>
        )
    }

    return (
        <Commission
            title={t("commission.title")}
            desc={t("commission.desc")}
            more={t("commission.more")}
            theme={"light"}
            imageUrl={"bg-[url(/images/products/energy-commission-background.png)]"}
        />
    )
}

export default MetaProfession;
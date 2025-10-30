"use client";
import * as React from 'react'
import { useTranslations } from "next-intl";
import Container from "@/components/Container";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

type Props = {
    languageLocal: string;
    backgroundImage: string;
    isShowCommission?: boolean;
    isShowOpenBtn?: boolean;
};

const MetaProfession = ( props: Props ) => {
    const { languageLocal, isShowOpenBtn = true } = props;
    const t =  useTranslations(languageLocal);

    return (
        <Container>
            <div className={"flex items-center flex-col xl:flex-row"}>
                <div>
                    <Typography
                        variant={"h3"}
                        className={"!text-theme-active max-w-xl text-center xl:text-left"}
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
                <div className={"mt-4 lg:mt-8 xl:mt-0 xl:ml-auto"}>
                    <Button className={"bg-theme-active hover:bg-theme-active-hover"}>
                        { t("meta.trade") }
                    </Button>
                    {
                        isShowOpenBtn && (
                            <Button className={"ml-4 border border-theme-active text-theme-active bg-transparent hover:bg-transparent"}>
                                { t("meta.open") }
                            </Button>
                        )
                    }
                </div>
            </div>
        </Container>
    )
}

export default MetaProfession;
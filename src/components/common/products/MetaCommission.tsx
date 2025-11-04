"use client";
import * as React from 'react'
import { useTranslations } from "next-intl";
import Container from "@/components/Container";
import { Typography } from "@/components/ui/typography";
import GeneralLinkBtn from "@/components/button/GeneralLinkBtn";

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
            <div className={"flex items-center flex-col xl:flex-row py-16 xl:py-30"}>
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
                    <GeneralLinkBtn
                        text={t("meta.trade")}
                        theme={"active-solid"}
                        isLink
                    />
                    {
                        isShowOpenBtn && (
                            <GeneralLinkBtn
                                text={t("meta.open")}
                                theme={"active-hollow"}
                                className={"ml-4"}
                                isLink
                            />
                        )
                    }
                </div>
            </div>
        </Container>
    )
}

export default MetaProfession;
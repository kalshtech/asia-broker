import React from "react";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import classnames from "classnames";
import Container from "@/components/Container";
import GeneralLinkBtn from "@/components/button/GeneralLinkBtn";

type Props = {
    theme?: string;
    isHavePb?: boolean;
}

const JoinCommunity = (props: Props) => {
    const t  = useTranslations("Common");
    const { theme = "dark", isHavePb = true } = props;
    return (
        <section className={classnames(["bg-theme-light-bg", isHavePb ? "pb-16 xl:pb-30" : ""])}>
            <Container>
                <div className={classnames(["", {
                    "bg-theme-deep-bg": theme === "dark",
                    "": theme === "light",
                }])}>
                    <div className={"w-full relative flex items-center py-8 px-4 xl:px-16 flex-col xl:flex-row"}>
                        <img src="/images/boat.png" className={"w-[60px] h-30 absolute left-16 -top-8 hidden xl:block"}
                             alt="boat"
                             title={"boat"}/>
                        <Typography variant={"p"} className={classnames(["text-center xl:ml-20", {
                            "!text-white": theme === "dark"
                        }])}>
                            {t("join-community")}
                        </Typography>
                        <div className={"mt-4 xl:mt-0 xl:ml-auto flex"}>
                            <GeneralLinkBtn
                                text={t("join-community-btn")}
                                theme={"active-solid"}
                                tradeType={"discord"}
                                isLink
                            />
                            <GeneralLinkBtn
                                text={t("register")}
                                theme={theme === "light" ? "active-hollow" : "light-hollow"}
                                className={"ml-4"}
                                isLink
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default JoinCommunity;
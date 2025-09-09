import React from "react";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import classnames from "classnames";

type Props = {
    theme?: string;
}

const JoinCommunity = (props: Props) => {
    const t  = useTranslations("Common");
    const { theme = "dark" } = props;
    return (
        <section className={"bg-theme-light-bg"}>
            <div className={classnames(["mx-30 mb-30", {
                "bg-theme-deep-bg": theme === "dark",
                "": theme === "light",
            }])}>
                <div className={"w-full relative py-8 px-16 flex items-center"}>
                    <img src="/images/boat.png" className={"w-[60px] h-30 absolute left-16 -top-8"} alt="boat"
                         title={"boat"}/>
                    <Typography className={classnames(["ml-20", {
                        "text-white": theme === "dark"
                    }])}>
                        {t("join-community")}
                    </Typography>
                    <Button className={"ml-auto px-8 h-12 rounded-full bg-theme-active hover:bg-theme-active-hover"}>
                        {t("join-community-btn")}
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default JoinCommunity;
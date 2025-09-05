import React from "react";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

const JoinCommunity = () => {
    const t  = useTranslations("Common");
    return (
        <section className={"bg-theme-light-bg"}>
            <div className={"mx-30 mb-30 bg-theme-deep-bg"}>
                <div className={"w-full relative py-8 px-16 flex "}>
                    <img src="/images/boat.png" className={"w-[60px] h-30 absolute left-16 -top-8"} alt="boat"
                         title={"boat"}/>
                    <Typography className={"text-white ml-20"}>
                        {t("join-community")}
                    </Typography>
                    <Button className={"ml-auto bg-theme-active hover:bg-theme-active-hover"}>
                        {t("join-community-btn")}
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default JoinCommunity;